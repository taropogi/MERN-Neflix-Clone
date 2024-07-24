export function throw400(message) {
  // 400 means bad request
  const error = new Error(message);
  error.statusCode = 400;
  throw error;
}
