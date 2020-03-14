import express from "express";
import { ControllerInterface } from "../controllers/controller.interface";
import { BasicController } from "../controllers/basic.controller";
import { PodcastController } from "../controllers/podcast.controller";

const controllers: ControllerInterface[] = [
  new PodcastController(),
  new BasicController(),
];

export function RegisterControllers(app: express.Express) {
  controllers.forEach(controller => {
    app.use(controller.route, controller.router);
  });
}
