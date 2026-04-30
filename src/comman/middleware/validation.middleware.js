import Joi from "joi";
import BaseDto from "../dto/baseDto.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

const validate = (dtoClass) => {
  return (req, res, next) => {
    const { errors, value } = dtoClass.validate(req.body);
    if (errors) {
      throw new ApiError.badRequest(errors.join("; "));
    }
    req.body = value; //
    next();
  };
};

export default validate