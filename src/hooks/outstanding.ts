import Outstanding from "@/interface/outstanding";
import Product from "@/interface/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProductOutstanding = () => {
  const [productsOutstanding, setProducts] = useState<Outstanding[]>([]);
  const [productOutstanding, setProduct] = useState<Outstanding | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const getAllOutstanding = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/outstanding");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllOutstanding();
  }, []);

  const getProductOutstanding = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/outstanding/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProductOutstanding(id);
  }, [id]);

  const removeProductOutstanding = async (id: number) => {
    try {
      if (window.confirm("Are you sure you want to delete this outstanding?")) {
        await axios.delete(`http://localhost:3000/outstanding/${id}`);
        setProducts(productsOutstanding.filter((item) => item.id !== id));
        toast.success("outstanding deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const addProductOutstanding = async (product: Product) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/outstanding",
        product
      );
      setProducts([...productsOutstanding, data]);
      toast.success("outstanding added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const updateProductOutstanding = async (product: Product) => {
    try {
        const { data } = await axios.put(
            `http://localhost:3000/outstanding/${product.id}`,
            product
        );
        setProducts(productsOutstanding.map((item) => (item.id === data.id ? data : item)));
        toast.success("outstanding updated successfully");
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
  };
  return { productsOutstanding, productOutstanding, removeProductOutstanding, addProductOutstanding, updateProductOutstanding };
};
export default useProductOutstanding;
