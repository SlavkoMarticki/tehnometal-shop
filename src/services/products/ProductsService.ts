import axios from 'axios';
import { IProduct } from '../../types';

class ProductService {
  async getAllProducts(): Promise<IProduct> {
    try {
      const response = await axios.get(
        'https://tehnometal-shop-default-rtdb.firebaseio.com/products.json'
      );
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error();
    }
  }

  async getProductById(id: string): Promise<IProduct> {
    try {
      const response = await axios.get(
        `https://tehnometal-shop-default-rtdb.firebaseio.com/products/${id}.json`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error();
    }
  }
}

const productServiceInstance = new ProductService();
export { productServiceInstance };
