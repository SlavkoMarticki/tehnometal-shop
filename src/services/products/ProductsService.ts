import axios from 'axios';
import { IProduct } from '../../types';

class ProductService {
  get baseUrl(): string {
    return process.env.REACT_APP_BASE_DB_URL!;
  }

  async getAllProductsBySubCategory(subId: string): Promise<IProduct> {
    try {
      const response = await axios.get(`${this.baseUrl}products/${subId}.json`);
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: add error handling
      throw new Error();
    }
  }

  async getProductById(subCatId: string, prodId: string): Promise<IProduct> {
    try {
      const response = await axios.get(
        `${this.baseUrl}products/${subCatId}/${prodId}.json`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: add error handling
      throw new Error();
    }
  }

  //  Add cart on user
  updateUserWithCurrentCart = async (data: any, uid: string): Promise<any> => {
    try {
      const response = await axios.put(
        `${this.baseUrl}/users/${uid}/cart.json`,
        { ...data }
      );
      const responseData = await response.data;
      const blob = new Blob([JSON.stringify(responseData)], {
        type: 'application/json'
      });
      return blob;
    } catch (error) {
      // Add error handling
      console.log(error);
    }
  };
}

const productServiceInstance = new ProductService();
export { productServiceInstance };
