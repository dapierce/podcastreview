export interface Podcast {
  id: string
  name: string
  creators: string
  description: string
  rating: number
  reviewCount: number
  ratingAvg: number
  ratingPercent: number
  tags: Array<object>
  network: Array<object>
  reviews: Array<object>
}
