import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

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
  return (
    <div>
      {/* Danh mục nổi bật */}
      <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-left mb-6">Danh mục nổi bật</h2>
      <Row gutter={[16, 16]}>
        {categories.map((category, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card
              hoverable
              cover={<img alt={category.title} src={category.image} className="w-full h-auto object-cover" />}
              className="rounded-lg shadow-lg overflow-hidden bg-card"
            >
              <Card.Meta
                title={<h3 className="text-lg font-semibold">{category.title}</h3>}
                description={<a href="#" className="text-primary hover:underline"><ArrowRightOutlined /></a>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
   {/* bài viết  */}
 
    </div>
  )
}

export default HomePage