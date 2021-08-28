const {
  signupValidation,
  resetPasswordValidator,
  loginValidation,
} = require("../validation");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const dotenv = require("dotenv");
const mailgun = require("mailgun-js");
const AppError = require("../helpers/errorHandler");
const sendEmail = require("../helpers/email");
const crypto = require("crypto");
dotenv.config();

const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });
const signToken = async (id) => {
  return await jwt.sign({ user_id: id }, process.env.TOKEN_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ message: "Email already exists" });
  }
  try {
    const { error } = signupValidation(req.body);
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    if (error) {
      let message = error.details[0].message;
      if (message.includes("repeatPassword")) {
        message = "Confirm-Password must be the same as password";
      }
      return next(new AppError(message, 400));
    }
    await newUser.save();
    const token = await signToken(newUser._id);
    newUser.token = token;
    newUser.password = undefined;
    return res.status(200).json({
      status: "success",
      message: "Created new User",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(new AppError("Failed to create new User", 400));
  }
};

const login = async (req, res, next) => {
  try {
    const { error } = await loginValidation(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return next(new AppError("Email or Password wrong", 401));
    }

    const invalidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!invalidPassword) {
      return next(new AppError("Email or Password wrong", 400));
    }
    const token = {
      token: await signToken(user._id),
      userName: user.firstName,
    };

    res.status(200).json({ status: "success", message: "logged in!", token });
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("User with this email does not exist.", 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save();

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/forgot-password/${resetToken}`;
  const message = `Forgot your password? Submit a PATCH request with your new password and repeatPassword to: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`;
  try {
    await sendEmail({
      email: user.email,
      subject: "your password rest token (valid for 10mins)",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    return next(
      new AppError("There was an error sending the email. Try again later", 500)
    );
  }
};

const resetPassword = async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new AppError("Token is invalid or has expired!", 400));
  }
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  const { error } = await resetPasswordValidator(req.body);
  if (error) {
    let message = error.details[0].message;
    if (message.includes("repeatPassword")) {
      message = "Confirm-Password must be the same as password";
    }
    return next(new AppError(message, 400));
  }
  await user.save();

  const token = await signToken(user._id);
  return res
    .status(200)
    .json({ status: "success", message: "logged in!", token });
};

module.exports = { signup, login, forgotPassword, resetPassword };
