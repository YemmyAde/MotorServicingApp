const { Services } = require('../models/servicesModel');
const AppError = require('../helpers/errorHandler');

exports.getAllServices = async (req, res, next) => {
  try {
    const services = await Services.find({});

    return res.status(200).json({ status: 'success', data: { services } });
  } catch (error) {
    next(new AppError('Server Error', 500));
  }
};

exports.getServiceById = async (req, res, next) => {
  try {
    const service = await Services.findById(req.params.id);

    return res.status(200).json({ status: 'success', data: { service } });
  } catch (error) {
    next(new AppError('Server Error', 500));
  }
};
