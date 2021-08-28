const AppError = require("../helpers/errorHandler");
const Cart = require("../models/cartSchema");

exports.creatCart = async (req, res, next) => {
  const cart = req.body;
  try {
    const newCart = await Cart.create(cart);
    res.status(201).json({
      status: "Success",
      data: {
        newCart,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateCart) return next(new AppError("Cart does not exist"));
    return res.status(200).json({
      status: "success",
      data: {
        updatedCart,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to create cart, please try again.", 500));
  }
};

exports.getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find({});
    if (!carts) {
      return res.status(200).json({
        status: "success",
        message: "There are no carts available.",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        carts,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to get all carts", 500));
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const deletedCart = await Cart.findByIdAndRemove(req.params.id);
    if (!deletedCart) return next(new AppError("Cart does not exist"));
    return res.status(200).json({
      status: "success",
      data: {
        deletedCart,
      },
    });
  } catch (error) {
    return next(error);
  }
};
