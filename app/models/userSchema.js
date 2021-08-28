const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const newUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 250,
  },
  lastName: {
    type: String,
    required: true,
    max: 255,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    min: 6,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: 6,
    max: 1024,
    select: false,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: 6,
    max: 1024,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  token: {
    type: String,
  },
  resetLink: {
    data: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

newUserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model('Users', newUserSchema);
