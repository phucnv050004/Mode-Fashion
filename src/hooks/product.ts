import Product from "@/interface/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  const getProduct = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const removeProduct = async (id: number) => {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        setProducts(products.filter((item) => item.id !== id));
        toast.success("Product deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const addProduct = async (product: Product) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      setProducts([...products, data]);
      toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const updateProduct = async (product: Product) => {
    try {
        const { data } = await axios.put(
            `http://localhost:3000/products/${product.id}`,
            product
        );
        setProducts(products.map((item) => (item.id === data.id ? data : item)));
        toast.success("Product updated successfully");
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
  };
  return { products, product, removeProduct, addProduct, updateProduct };
};
export default useProduct;
