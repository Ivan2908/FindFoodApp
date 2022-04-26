export default interface Restaurant {
  id_Restaurant: number;
  id_cousin: number;
  name: string;
  description: string;
  rating: number;
  img: string;
  createAt: Date;
  category: string;
  reviews: number;
}
