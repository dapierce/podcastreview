import bodyParser from "body-parser";
import express from "express";
import swaggerUi from "swagger-ui-express";

import * as env from "../environment";
import jsConfig = require("../swagger.json");

function LoggingMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const now = new Date(Date.now());
  console.log(
    `Time: ${now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })} | Request URL: ${env.baseUrl}:${env.port}${req.url} | Response: ${
      res.statusCode
    }`
  );
  next();
}

export function RegisterMiddleware(app: express.Express): void {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(LoggingMiddleware);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(jsConfig));
}
