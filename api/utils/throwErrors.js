export function throw400(message) {
  // 400 means bad request
  const error = new Error(message);
  error.statusCode = 400;
  throw error;
}

export function throw404(message) {
  //
  const error = new Error(message);
  error.statusCode = 404;
  throw error;
}

//response general error
export function resGeneralError(error, res) {
  console.log("Auth Error: " + error.message);
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
}
