let codes = {};

codes.e200 = {
  status: 200,
  message: 'Success'
}

codes.e201 = {
  status: 201,
  message: 'Created'
}

codes.e202 = {
  status: 202,
  message: 'Accepted'
}

codes.e204 = {
  status: 204,
  message: 'No Content'
}

codes.e302 = {
  status: 302,
  message: 'Found'
}

codes.e304 = {
  status: 304,
  message: 'Not Modified'
}

codes.e400 = {
  status: 400,
  message: 'Bad Request'
}

codes.e401 = {
  status: 401,
  message: 'Unauthorized'
}

codes.e402 = {
  status: 402,
  message: 'Payment Required'
}

codes.e403 = {
  status: 403,
  message: 'Forbidden'
}

codes.e404 = {
  status: 404,
  message: 'Not Found'
}

codes.e409 = {
  status: 409,
  message: 'Conflict'
}

codes.e500 = {
  status: 500,
  message: 'Internal Server Error'
}

codes.e502 = {
  status: 502,
  message: 'Bad Gateway'
}

codes.e503 = {
  status: 503,
  message: 'Service Unavailable'
}

codes.e504 = {
  status: 504,
  message: 'Gateway Timeout'
}

let errorGenerator = (code, errorMsg, err) => {
  let errObj = {};

  if (code) {
    errObj = JSON.parse(JSON.stringify(codes[`${'e' + code}`]));
  }
  if (err) {
    errObj.codes = err;
    errObj.errorMsg = errorMsg ? errorMsg : 'Something went wrong!';
  } else {
    errObj.userMsg = errorMsg ? errorMsg : 'Operation completed Successfully!';
  }
  
  return errObj;
}


module.exports = errorGenerator;