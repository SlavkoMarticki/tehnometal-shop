import axios from 'axios';
import { ICategories, ICategoriesData } from '../../types';

class CategoriesService {
  get baseUrl(): string {
    return process.env.REACT_APP_BASE_DB_URL!;
  }

  async getAllCategories(): Promise<ICategories> {
    try {
      const response = await axios.get(`${this.baseUrl}categories.json`);
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: Add error handler
      throw new Error();
    }
  }

  async getCategoryById(id: string): Promise<ICategoriesData> {
    try {
      const response = await axios.get(`${this.baseUrl}categories/${id}.json`);
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: Add error handler
      throw new Error();
    }
  }

  async getAllSubCategories(id: string): Promise<ICategories> {
    try {
      const response = await axios.get(
        `https://tehnometal-shop-default-rtdb.firebaseio.com/sub-categories/${id}.json`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: Add error handler
      throw new Error();
    }
  }

  async getSubCategoryById(categoryId: string, id: string): Promise<ICategoriesData> {
    try {
      const response = await axios.get(
        `https://tehnometal-shop-default-rtdb.firebaseio.com/sub-categories/${categoryId}/${id}.json`
      );
      const data = await response.data;
      console.log(data)
      return data;
    } catch (error) {
      // TODO: Add error handler
      throw new Error();
    }
  }
}

const categoriesServiceInstance = new CategoriesService();
export { categoriesServiceInstance };
