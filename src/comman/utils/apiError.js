

class ApiError extends Error{
   constructor(statusCode, massage){
    super(massage),
    this.statusCode = statusCode,
    this.isOperatinal = true
    Error.captureStackTrace(this, this.constructor)
   }

  static badRequest(massage = "bad Request"){    
    return new ApiError(400, massage)

  }
  static unauthorized(massage = "not authorized"){    
    return new ApiError(401, massage)

  }
  static notFound(massage = "data not found"){    
    return new ApiError(404, massage)

  }


}


export default ApiError