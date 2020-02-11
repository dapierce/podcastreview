import * as express from "express";
import { ControllerInterface } from "./controller.interface";
import { HttpException } from "../errors/httpexception.error";
import { Podcast, PodcastInterface } from "../models/podcast.model";

export class PodcastController implements ControllerInterface {
  public router = express.Router();
  public route = "/";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get("/", this.getPodcasts);
    this.router.get("/search/:", this.getPodcastSearchResults);
    this.router.get("/podcast/:", this.getPodcast);
    // this.router.post("/review", this.postReview);
  }

  /**
   * @swagger
   *
   * /:
   *   get:
   *     description: Get all podcasts.
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         response:
   *           type: object
   *           items:
   *              $ref: '#/definitions/Podcast'
   */
  async getPodcasts(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    try {
      const podcasts = await Podcast.find();
      res.json(podcasts);
    } catch (error) {
      const details = JSON.stringify(error);
      next(new HttpException(500, `Failed to get podcasts ${details}`));
    }
  }

  /**
   * @swagger
   *
   * /search/{input}:
   *   get:
   *     description: Get podcasts that match search terms.
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: input
   *         description: Name of podcast, creator or tag you wish to find.
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         response:
   *           type: object
   *           items:
   *              $ref: '#/definitions/Podcast'
   */
  async getPodcastSearchResults(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    try {
      const podcasts = await Podcast.find();
      res.json(podcasts);
    } catch (error) {
      const details = JSON.stringify(error);
      next(
        new HttpException(
          500,
          `Failed to find podcasts that match your search ${details}`
        )
      );
    }
  }

  /**
   * @swagger
   *
   * /podcast/{id}:
   *   get:
   *     description: Get a single podcast.
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: id
   *         description: Podcast Id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         response:
   *           type: array
   *           items:
   *              $ref: '#/definitions/Podcast'
   */
  async getPodcast(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const id: string = req.params.id;
    try {
      const query = Podcast.find();
      query.where("_id").gte(id);
      const users = await query.exec();
      res.json(users);
    } catch (error) {
      const details = JSON.stringify(error);
      next(new HttpException(500, `No podcast found ${details}`));
    }
  }
}
