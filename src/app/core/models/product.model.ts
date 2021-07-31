import { Profile } from './profile.model';

export interface Product {
  _id: string;
  title: string;
  description: string;
  content: string;
  categories: string;
  image: string;
  images: string;
  price: string;
  sale_price: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  author: Profile;
}
