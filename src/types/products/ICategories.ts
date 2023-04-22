export interface ICategories {
  id: ICategoriesData;
}
export interface ICategoriesData {
  id: string;
  imgUrl: string;
  name: string;
}

export interface ICategory {
  id: string;
  data: ICategoriesData;
}
export interface ISubCategory {
  id: string;
  data: ICategoriesData;
}
