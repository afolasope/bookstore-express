const Joi = require('joi');

const BookSchema = Joi.object({
  title: Joi.string().required().min(5).max(255).trim(),
  shortDescription: Joi.string().min(5).max(500).required().trim(),
  longDescription: Joi.string().min(10).optional().trim(),
  year: Joi.number().integer().required().min(1900).max(2000),
  price: Joi.number().min(0).required(),
  createdAt: Joi.date().default(Date.now),
  lastUpdatedAt: Joi.date().default(Date.now),
});

async function BookValidationMW(req, res, next) {
  const bookPayload = req.body;
  try {
    await BookSchema.validateAsync(bookPayload);
    next();
  } catch (error) {
    next(error.details[0].message);
  }
}
