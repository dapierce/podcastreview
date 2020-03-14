import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 *
 * definitions:
 *   Podcast:
 *     type: object
 *     properties:
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
 *       reviewCount:
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
  name: string;
  creators: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: Array<object>;
  network: Array<object>;
  reviews: Array<object>;
}

const PodcastSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    creators: { type: String, required: false },
    description: { type: String, required: false },
    rating: { type: Number, required: false },
    reviewCount: { type: Number, required: false },
    tags: [
      {
        name: { type: String, required: false },
        count: { type: Number, required: false },
      },
    ],
    network: [
      {
        name: { type: String, required: false },
        url: { type: String, required: false },
      },
    ],
    reviews: [
      {
        user: { type: String, required: false },
        rating: { type: Number, required: false },
        text: { type: String, required: false },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);

// calculate the 0-5 star rating of the podcast from db values
PodcastSchema.virtual("ratingAvg").get(function(): number {
  if (this.reviewCount === 0 || isNaN(this.reviewCount)) {
    return 0;
  }
  const formatedRating = (this.rating / this.reviewCount).toPrecision(2);
  return Number(formatedRating);
});

// calculate the 0-100 score of the podcast
PodcastSchema.virtual("ratingPercent").get(function(): number {
  if (this.reviewCount === 0 || isNaN(this.reviewCount)) {
    return 0;
  }
  return Math.round((this.rating / this.reviewCount / 5) * 100);
});

export const Podcast = mongoose.model<PodcastInterface>(
  "Podcast",
  PodcastSchema,
  "podcasts"
);
