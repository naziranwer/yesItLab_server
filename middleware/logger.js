const logger = (req, res, next) => {
  console.log(
    `${req.method} request to ${req.url} - ${new Date().toISOString()}`
  );
  next();
};

module.exports = logger;
