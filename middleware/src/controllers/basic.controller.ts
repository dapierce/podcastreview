import * as express from "express";
import { ControllerInterface } from "./controller.interface";

export class BasicController implements ControllerInterface {
  public router = express.Router();
  public route = "/basic";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get("/", this.readBasic);
    this.router.get("/mirror", this.createBasic);
  }

  /**
   * @swagger
   *
   * /basic:
   *   get:
   *     description: returns hello world
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         response: any
   */
  async readBasic(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const result = await Promise.resolve({ response: "Hello World!" });
    res.status(200).send(result);
  }

  // no swagger since this takes everything and returns everything
  async createBasic(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const result = await Promise.resolve(req.body);
    res.status(200).send(result);
  }
}
