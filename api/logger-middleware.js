module.exports = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} to ${req.originalUrl}`);
  
    next();
  };
  