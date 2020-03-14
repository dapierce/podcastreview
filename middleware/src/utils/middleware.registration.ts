import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import * as env from "../environment";
import jsConfig = require("../swagger.json");

const allowList: string[] = ["http://localhost:4200", env.allowedCors];

const corsOptions: cors.CorsOptions = {
  origin: allowList,
};

function LoggingMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const now = new Date(Date.now());
  console.log(
    `\x1b[30m\x1b[43m ${now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })} \x1b[0m Request URL: ${env.baseUrl}:${env.port}${req.url} | Response: ${
      res.statusCode
    }`
  );
  next();
}

export function RegisterMiddleware(app: express.Express): void {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(LoggingMiddleware);
  app.use(cors(corsOptions));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(jsConfig));
}
