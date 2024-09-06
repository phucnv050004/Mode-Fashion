import News from "@/interface/New";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useNew = () => {
  const [news, setNews] = useState<News[]>([]);
  const [currentNew, setCurrentNew] = useState<News | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const getAllNew = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/news");
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllNew();
  }, []);

  const getNew = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/news/${id}`);
      setCurrentNew(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getNew(id);
  }, [id]);


 
  return {
    news,};
};
export default useNew;
