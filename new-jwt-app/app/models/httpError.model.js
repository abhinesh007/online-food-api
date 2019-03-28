let error = {};

error.e200 = {
  staus: 200,
  message: 'Success'
}

error.e201 = {
  staus: 201,
  message: 'Created'
}

error.e204 = {
  staus: 204,
  message: 'No Content'
}

error.e304 = {
  staus: 304,
  message: 'Not Modified'
}

error.e400 = {
  staus: 400,
  message: 'Bad Request'
}

error.e401 = {
  staus: 401,
  message: 'Unauthorized'
}

error.e402 = {
  staus: 402,
  message: 'Payment Required'
}

error.e403 = {
  staus: 403,
  message: 'Forbidden'
}

error.e404 = {
  staus: 404,
  message: 'Not Found'
}

error.e409 = {
  staus: 409,
  message: 'Conflict'
}

error.e500 = {
  staus: 500,
  message: 'Internal Server Error'
}

error.e502 = {
  staus: 502,
  message: 'Bad Gateway'
}

error.e503 = {
  staus: 503,
  message: 'Service Unavailable'
}

error.e504 = {
  staus: 504,
  message: 'Gateway Timeout'
}

let errorGenerator = (code, errorMsg, err) => {
  let errObj = {};

  if (code) {
    errObj = error[`${'e' + code}`];
  }
  if (err) {
    errObj.error = err;
  }
  errObj.errorMsg = errorMsg ? errorMsg : 'Something went wrong!';

  return errObj;
}


module.exports = errorGenerator;