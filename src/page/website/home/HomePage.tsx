import { ArrowRightOutlined } from '@ant-design/icons';
import {  Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Card, Carousel, Button } from 'antd';
import Meta from 'antd/es/card/Meta';
import  { useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Thời trang nam',
    image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_category_1_img.jpg?v=55',
  },
  {
    title: 'Thời trang nữ',
    image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_category_2_img.jpg?v=55',
  },
  {
    title: 'Thời trang mùa đông',
    image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_category_3_img.jpg?v=55',
  },
  {
    title: 'Thời trang nổi bật 2022',
    image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_category_4_img.jpg?v=55',
  },
];
const newsItems = [
  {
    title: 'Mẫu chân váy dạ mùa đông xinh xắn cho những ngày đông',
    description: 'Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn muốn chia sẻ.',
    date: '13 Tháng 07, 2023',
    image: 'https://file.hstatic.net/200000592359/article/blog01_aa6af9e80dc243019d1bc995be370853_large.jpg',
    link: '/link-1',
  },
  {
    title: 'Cách phối đồ với quần jogger nữ đơn giản nhưng cực kỳ cá tính',
    description: 'Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn muốn chia sẻ.',
    date: '13 Tháng 07, 2023',
    image: 'https://file.hstatic.net/200000592359/article/blog02_ad9040892087469290bb2caf37862b98_large.jpg',
    link: '/link-2',
  },
  {
    title: 'Tips phối đồ với boots nam thêm lịch lãm, fashion',
    description: 'Boot đã có nhưng kết hợp với áo gì cũng khiến các anh chàng có gu thêm phần băn khoăn. Kiểu áo cũng là một yếu tố giúp set đồ của bạn thêm phần hoàn hảo. Một số gợi ý dưới đây sẽ giúp chàng thêm phần đẹp và trẻ trung hơn.',
    date: '13 Tháng 07, 2023',
    image: 'https://file.hstatic.net/200000592359/article/blog03_a6f29cf3485048cf9c505228277b6990_large.jpg',
    link: '/link-3',
  },
  {
    title: 'Cách phối đồ nam mùa đông cực thời trang và trendy',
    description: 'Thời nay, biết cách ăn mặc là điều vô cùng quan trọng đối với bất cứ ai, dù là nam hay nữ. Nó sẽ giúp bạn ghi điểm trong mắt mọi người xung quanh. Do đó, dưới đây YODY sẽ chia sẻ với anh em những bí kíp phối đồ mùa đông nam cực chuẩn và hợp mốt.',
    date: '13 Tháng 07, 2023',
    image: 'https://file.hstatic.net/200000592359/article/blog04_6d7325827ad345c3afb2c68f34677da3_large.jpg',
    link: '/link-2',
  }
]
// interface Article {
//   title: string;
//   image: string;
//   excerpt: string;
//   date: string;
//   link: string; 
// }
// const articles: Article[] = [
//   {
//     title: 'Tin tuc 1',
//     image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_article_1_img.jpg?v=55',
//     excerpt: 'Tin tuc 1',
//     date: '01/01/2022',
//     link: 'https://www.google.com/',
//   },
//   {
//     title: 'Tin tuc 1',
//     image: 'https://theme.hstatic.net/200000592359/1001192084/14/home_article_1_img.jpg?v=55',
//     excerpt: 'Tin tuc 1',
//     date: '01/01/2022',
//     link: 'https://www.google.com/',
//   }
// ];

const HomePage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <div>
      {/* Danh mục nổi bật */}
      <div className="container mx-auto py-4 px-8">
      <h2 className="text-lg font-bold text-left mt-12 mb-6  ">Danh mục nổi bật</h2>
      <Row gutter={[16, 16]}>
        {categories.map((category, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card
              hoverable
              cover={<img alt={category.title} src={category.image} className="w-full h-auto object-cover " />}
              className="rounded-lg shadow-lg overflow-hidden  bg-card"
            >
              <Card.Meta
                title={<h3 className="text-sm font-semibold">{category.title}</h3>}
                description={<a href="#" className="text-primary hover:underline"><ArrowRightOutlined /></a>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
   {/* bài viết  */}
   <div>
      <div className="hidden md:block relative mt-4">
        <Button
          onClick={scrollLeft}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2"
        >
          <LeftOutlined />
        </Button>
        <h1 className="text-lg font-bold text-center px-6 mb-6 mt-6">Tin tức nổi bật</h1>
        <div
          ref={scrollContainerRef}
          className="overflow-hidden scrollbar-hide  whitespace-nowrap "
        >
          {newsItems.map((article, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 465, display: 'inline-block' }}
              cover={<img alt={article.title} src={article.image} className="rounded-t-lg" />}
              className="m-5 rounded-lg shadow-lg overflow-hidden relative bg-white"
            >
              <div className="absolute top-0 left-0 bg-white text-gray-500 px-2 py-1 rounded-br-lg">
                {article.date}
              </div>
              <Meta title={<span className="text-orange-500 text-left">{article.title}</span>} description={article.description.substring(0, 50)+"..."} />
              <Link to={article.link} className="text-black hover:text-orange-600 flex items-center mt-4">
                Xem thêm
                <svg className="w-4 h-4 ml-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
        <h1 className="text-xl font-bold text-center py-2  ">Tin tức nổi bật</h1>
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
          {newsItems.map((newsItem, index) => (
            <div key={index} className="px-2">
              <Card
                hoverable
                cover={<img alt={newsItem.title} src={newsItem.image} className="rounded-t-lg" />}
                className="rounded-lg shadow-lg overflow-hidden mb-4 relative"
              >
                <div className="absolute top-0 left-0 bg-white text-orange-500 px-2 py-1 rounded-br-lg">
                  {newsItem.date}
                </div>
                <Meta
                  title={<span className="text-orange-500">{newsItem.title}</span>}
                  description={
                    <div>
                      <p className="text-gray-600 mb-2 ">{newsItem.description.substring(0, 20)} </p>
                      <Link to={newsItem.link} className="text-black hover:text-orange-600 flex items-center mt-4">
                        Xem thêm
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
    </div>
  )
}

export default HomePage