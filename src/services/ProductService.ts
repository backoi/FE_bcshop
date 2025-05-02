import { axiosPublic, axiosPrivate, setAuthToken } from "../config/axios";
export const productService = {
  getAll: async () => {
    try {
      const response = await axiosPublic.get("/product/");
      return response.data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Rethrow the error to handle it in the calling function
    }
  },
  getOne: async (slug: string) => {
    try {
      const response = await axiosPublic.get(`/product/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Rethrow the error to handle it in the calling function
    }
  },
  getByCategory: async (subCategories: string[] | []) => {
    console.log("subCategories:", subCategories);
    try {
      let url = `/product/collections/${subCategories}`;

      if (subCategories && subCategories.length > 1) {
        const subCategoriesQuery = subCategories.join(",");
        url = `/product/collections/?subCategories=${subCategoriesQuery}`;
      }

      const response = await axiosPublic.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      throw error;
    }
  },
};
