import express from "express";
import mongoose from "mongoose";

import * as environment from "./environment";
import { RegisterControllers } from "./utils/controller.registration";
import { RegisterErrorMiddleware } from "./utils/errorhandler.registration";
import { RegisterMiddleware } from "./utils/middleware.registration";

// start express, open port and path to db
const app = express();

RegisterMiddleware(app);
RegisterControllers(app);
RegisterErrorMiddleware(app);

// start the Express server
app.listen(environment.port, async () => {
  const options: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
  };
  await mongoose.connect(environment.mongoDbUrl, options);
  const collections = await mongoose.connection.db.collections();
  collections.forEach(c => console.log(`Found: ${c.collectionName}`));
  console.log(
    `********\n\x1b[44mPodacast Review Middleware\x1b[0m is ready at ${environment.baseUrl}:${environment.port}\n********`
  );
});
