const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Motor service must have a title'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Motor service must have a description'],
    unique: true,
    trim: true,
  },
  services_image_url: {
    type: String,
    required: [true, 'service must have an image'],
    trim: true,
  },
  otherServices: [
    {
      title: {
        type: String,
        required: [true, 'service must have a title'],
        unique: true,
        trim: true,
      },
      description: {
        type: String,
        required: [true, 'service must have a description'],
        unique: true,
        trim: true,
      },
      otherServices_image_url: {
        type: String,
        required: [true, 'service must have an image'],
        trim: true,
      },
      pricing: {
        type: Number,
        required: [true, 'Motor service must have a price'],
      },
    },
  ],
});

const Services = mongoose.model('Services', serviceSchema);

module.exports = {
  Services,
  serviceSchema,
};
