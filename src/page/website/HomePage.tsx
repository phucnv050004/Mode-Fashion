import Category from "./home/Category";
import News from "./home/New";
import Outstanding from "./home/Outstanding";
import ProductList from "./home/ProductList";

const HomePage = () => {
  
  return (
    <div>
      {/* Danh mục nổi bật */}
      <Category/>
      {/* product list */}
      <ProductList/>
      {/* SET ĐỒ NỔI BẬT */}
      <Outstanding/>
      {/* bài viết  */}
      <News/>
    </div>
  );
};

export default HomePage;
