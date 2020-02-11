import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 *
 * definitions:
 *   Podcast:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         example: '1234'
 *       name:
 *         type: string
 *         example: 'CodeNewbie'
 *       cast:
 *         type: array
 *         items:
 *           type: string
 *           example: ['Saron Yitbarek']
 *       tags:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: '1234'
 *             name:
 *               type: string
 *               example: 'Tech'
 *             count:
 *               type: integer
 *               example: 25
 *       network:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: '1234'
 *             name:
 *               type: string
 *               example: 'Apple Podcasts'
 *             url:
 *               type: string
 *               example: 'https://podcasts.apple.com/us/podcast/id919219256'
 *       rating:
 *         type: number
 *         example: 3.2
 *       reviews:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: '1234'
 *             user:
 *               type: string
 *               example: 'David'
 *             rating:
 *               type: number
 *               example: 4
 *             text:
 *               type: string
 *               example: 'This is my podcast review.'
 */

export interface PodcastInterface extends Document {
  _id: string;
  name: string;
  cast: Array<string>;
  tags: Array<object>;
  network: Array<object>;
  rating: number;
  reviews: Array<object>;
}

const PodcastSchema: Schema = new Schema({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: false },
  cast: { type: Array, required: false, unique: false },
  tags: [
    {
      _id: { type: String, required: true, unique: true },
      name: { type: String, required: true, unique: false },
      count: { type: Number, required: false, unique: false },
    },
  ],
  network: [
    {
      _id: { type: String, required: true, unique: true },
      name: { type: String, required: true, unique: false },
      url: { type: String, required: true, unique: false },
    },
  ],
  rating: { type: Number, required: false, unique: false },
  reviews: [
    {
      _id: { type: String, required: true, unique: true },
      user: { type: String, required: true, unique: false },
      rating: { type: Number, required: false, unique: false },
      text: { type: String, required: false, unique: false },
    },
  ],
});

export const Podcast = mongoose.model<PodcastInterface>(
  "Podcast",
  PodcastSchema,
  "podcasts"
);
