let error = {};

error.e200 = {
  status: 200,
  message: 'Success'
}

error.e201 = {
  status: 201,
  message: 'Created'
}

error.e204 = {
  status: 204,
  message: 'No Content'
}

error.e304 = {
  status: 304,
  message: 'Not Modified'
}

error.e400 = {
  status: 400,
  message: 'Bad Request'
}

error.e401 = {
  status: 401,
  message: 'Unauthorized'
}

error.e402 = {
  status: 402,
  message: 'Payment Required'
}

error.e403 = {
  status: 403,
  message: 'Forbidden'
}

error.e404 = {
  status: 404,
  message: 'Not Found'
}

error.e409 = {
  status: 409,
  message: 'Conflict'
}

error.e500 = {
  status: 500,
  message: 'Internal Server Error'
}

error.e502 = {
  status: 502,
  message: 'Bad Gateway'
}

error.e503 = {
  status: 503,
  message: 'Service Unavailable'
}

error.e504 = {
  status: 504,
  message: 'Gateway Timeout'
}

let errorGenerator = (code, errorMsg, err) => {
  let errObj = {};

  if (code) {
    errObj = error[`${'e' + code}`];
  }
  if (err) {
    errObj.error = err;
    errObj.errorMsg = errorMsg ? errorMsg : 'Something went wrong!';
  } else {
    errObj.userMsg = errorMsg ? errorMsg : 'Operation completed Successfully!';
  }
  
  return errObj;
}


module.exports = errorGenerator;