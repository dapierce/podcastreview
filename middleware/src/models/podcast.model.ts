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
 *         example: '2e4b0d5d724daf2210bb9698'
 *       name:
 *         type: string
 *         example: 'CodeNewbie'
 *       creators:
 *         type: string
 *         example: 'Saron Yitbarek'
 *       description:
 *         type: string
 *         example: 'Stories and interviews from people on their coding journey.'
 *       rating:
 *         type: number
 *         example: 3.2
 *       review_count:
 *         type: integer
 *         example: 2
 *       tags:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             id:
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
 *             id:
 *               type: string
 *               example: '1234'
 *             name:
 *               type: string
 *               example: 'Apple Podcasts'
 *             url:
 *               type: string
 *               example: 'https://podcasts.apple.com/us/podcast/id919219256'
 *       reviews:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             id:
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
  creators: string;
  description: string;
  rating: number;
  review_count: number;
  tags: Array<object>;
  network: Array<object>;
  reviews: Array<object>;
}

const PodcastSchema: Schema = new Schema({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: false },
  creators: { type: String, required: false, unique: false },
  description: { type: String, required: false, unique: false },
  rating: { type: Number, required: false, unique: false },
  review_count: { type: Number, required: false, unique: false },
  tags: [
    {
      id: { type: String, required: false, unique: true },
      name: { type: String, required: false, unique: false },
      count: { type: Number, required: false, unique: false },
    },
  ],
  network: [
    {
      id: { type: String, required: false, unique: true },
      name: { type: String, required: false, unique: false },
      url: { type: String, required: false, unique: false },
    },
  ],
  reviews: [
    {
      id: { type: String, required: false, unique: true },
      user: { type: String, required: false, unique: false },
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
