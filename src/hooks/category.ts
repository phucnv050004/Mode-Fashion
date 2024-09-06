import Category from "@/interface/Category";
import Product from "@/interface/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useCategory = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        setCategorys(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategory();
  }, []);

  const getCategory = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/categories/${id}`);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getCategory(id);
  }, [id]);

  const updateCategory = async (product: Category) => {
    try {
        const { data } = await axios.put(
            `http://localhost:3000/categories/${product.id}`,
            product
        );
        setCategorys(categorys.map((item) => (item.id === data.id ? data : item)));
        toast.success("Product updated successfully");
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
  };
  return { category, categorys, updateCategory };
};
export default useCategory;
