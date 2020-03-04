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
    this.router.get("/search/:query", this.getPodcastSearchResults);
    this.router.get("/podcast/:id", this.getPodcast);
    // this.router.get("/tag/:name", this.getTaggedPodcasts);
    // this.router.post("/review/:id", this.postReview);
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
   *           type: array
   *           items:
   *              $ref: '#/definitions/Podcast'
   */
  async getPodcasts(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    try {
      const podcasts = await Podcast.find({}, [
        "name",
        "creators",
        "rating",
        "review_count",
      ]);
      res.json(podcasts);
    } catch (error) {
      const details = JSON.stringify(error);
      next(new HttpException(500, `Failed to get podcasts ${details}`));
    }
  }

  /**
   * @swagger
   *
   * /search/{query}:
   *   get:
   *     description: Get podcasts that match search terms.
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: input
   *         description: Name of podcast, creators or tag you wish to find.
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
    const search = req.params.query;
    const searchRegex = "/" + search + "$/";
    console.log("Search: " + search);
    try {
      const podcasts = await Podcast.find({ name: search }, [
        "name",
        "creators",
        "rating",
        "review_count",
      ]);
      res.json(podcasts);
      console.log(podcasts);
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
    const idInput: string = req.params.id;
    const idSanitized: string = idInput.replace(/\W/g, "").toLowerCase();
    console.log("Get Podcast: " + idSanitized);
    try {
      const query = await Podcast.findById(idSanitized, [
        "name",
        "creators",
        "description",
        "rating",
        "review_count",
      ]);
      res.json(query);
    } catch (error) {
      const details = JSON.stringify(error);
      next(new HttpException(500, `No podcast found ${details}`));
    }
  }
}
