const winston = require("winston");
const logger = winston.createLogger
(
  {
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: 
    [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  }
);
function showError() 
{
  throw new Error("Es equivocado");
}
try 
{
  showError();
} 
catch (e) 
{
  //logger.log("ERROR", e.toString());
  logger.log("Un halcón navegó al golf por error")
  logger.info("")
}