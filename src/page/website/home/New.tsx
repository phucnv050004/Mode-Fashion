import useNew from "@/hooks/new";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import { useRef } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const { news } = useNew();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div>
      <div className="hidden md:block relative mt-4">
        <Button
          onClick={scrollLeft}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2"
        >
          <LeftOutlined />
        </Button>
        <h1 className="text-lg font-bold text-center px-6 mb-6 mt-6">
          TIN TỨC NỔI BẬT
        </h1>
        <div
          ref={scrollContainerRef}
          className="overflow-hidden scrollbar-hide  whitespace-nowrap "
        >
          {news.map((article, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 465, display: "inline-block" }}
              cover={
                <img
                  alt={article.title}
                  src={article.image}
                  className="rounded-t-lg"
                />
              }
              className="m-5 rounded-lg shadow-lg overflow-hidden relative bg-white"
            >
              <div className="absolute top-0 left-0 bg-white text-gray-500 px-2 py-1 rounded-br-lg">
                {article.date}
              </div>
              <Meta
                title={
                  <span className="text-orange-500 text-left">
                    {article.title}
                  </span>
                }
                description={article.description.substring(0, 50) + "..."}
              />
              <Link
                to={article.link}
                className="text-black hover:text-orange-600 flex items-center mt-4"
              >
                Xem thêm
                <svg
                  className="w-4 h-4 ml-1 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
        <Button
          onClick={scrollRight}
          className="absolute right-24 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2"
        >
          <RightOutlined />
        </Button>
      </div>
      <div className="block md:hidden">
        <h1 className="text-xl font-bold text-center py-2  ">
          TIN TỨC NỔI BẬT
        </h1>
        <Carousel
          slidesToShow={2}
          dots
          arrows
          responsive={[
            {
              breakpoint: 768, // breakpoint for tablet
              settings: {
                slidesToShow: 2, // 2 items per slide on smaller screens
                arrows: false,
              },
            },
            {
              breakpoint: 480, // breakpoint for mobile
              settings: {
                slidesToShow: 2, // 2 items per slide on mobile
                arrows: false,
              },
            },
          ]}
        >
          {news.map((newsItem, index) => (
            <div key={index} className="px-2">
              <Card
                hoverable
                cover={
                  <img
                    alt={newsItem.title}
                    src={newsItem.image}
                    className="rounded-t-lg"
                  />
                }
                className="rounded-lg shadow-lg overflow-hidden mb-4 relative"
              >
                <div className="absolute top-0 left-0 bg-white text-orange-500 px-2 py-1 rounded-br-lg">
                  {newsItem.date}
                </div>
                <Meta
                  title={
                    <span className="text-orange-500">{newsItem.title}</span>
                  }
                  description={
                    <div>
                      <p className="text-gray-600 mb-2 ">
                        {newsItem.description.substring(0, 20)}{" "}
                      </p>
                      <Link
                        to={newsItem.link}
                        className="text-black hover:text-orange-600 flex items-center mt-4"
                      >
                        Xem thêm
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  }
                />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default News;
