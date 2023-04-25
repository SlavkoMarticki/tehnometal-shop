import axios from 'axios';
import { IProduct } from '../../types';
import { ApiResponse } from '../../utils';

class ProductService {
  get baseUrl(): string {
    return process.env.REACT_APP_BASE_DB_URL!;
  }

  async getAllProductsBySubCategory(
    subId: string,
    params: any
  ): Promise<IProduct> {
    try {
      const response = await axios.get(
        `${this.baseUrl}products/${subId}.json`,
        { params }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: add error handling
      throw new Error();
    }
  }

  async getShallowAllProductsBySubCategory(subId: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseUrl}products/${subId}.json`,
        { params: { shallow: true } }
      );
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

  // TODO: add types
  updateFavoriteStatus = async (
    subCatId: string,
    prodId: string,
    favoriteState: boolean
  ): Promise<void> => {
    try {
      await axios.patch(`${this.baseUrl}products/${subCatId}/${prodId}.json`, {
        isFavorite: favoriteState
      });
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

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

  // TODO: add favorite products ids
  getFavoriteProductsByIds = async (postData: any): Promise<any> => {
    const fetchData = async (
      subCatId: string,
      prodId: string
    ): Promise<any> => {
      const response = await axios.get(
        `${this.baseUrl}products/${subCatId}/${prodId}.json`
      );
      const postData = await response.data;
      return {
        ...postData,
        isFavorite: true,
        prodId
      };
    };

    try {
      const response = await Promise.all(
        /* eslint-disable-next-line */
        postData.map((post: any) =>
          fetchData(post.data.subCatId, post.data.prodId)
        )
      );

      return new ApiResponse(response);
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  getFavoriteProductsByUser = async (uid: string): Promise<any> => {
    try {
      const response = await axios.get(
        `${this.baseUrl}users/${uid}/favorites.json`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };

  getCartByUser = async (uid: string): Promise<any> => {
    try {
      const response = await axios.get(`${this.baseUrl}users/${uid}/cart.json`);
      const data = await response.data;
      return data;
    } catch (error) {
      // TODO: add err handling
      console.log(error);
    }
  };
}

const productServiceInstance = new ProductService();
export { productServiceInstance };
