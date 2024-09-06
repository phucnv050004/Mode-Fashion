import useCategory from "@/hooks/category";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd"

const Category = () => {
    const { categorys: categories } = useCategory();
  return (
    <div className="container mx-auto py-4 px-8">
        <h2 className="text-lg font-bold text-left mt-12 mb-6  ">
        DANH MỤC NỔI BẬT
        </h2>
        <Row gutter={[16, 16]}>
          {categories.map((category, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={category.title}
                    src={category.image}
                    className="w-full h-auto object-cover "
                  />
                }
                className="rounded-lg shadow-lg overflow-hidden  bg-card"
              >
                <Card.Meta
                  title={
                    <h3 className="text-sm font-semibold">{category.title}</h3>
                  }
                  description={
                    <a href="#" className="text-primary hover:underline">
                      <ArrowRightOutlined />
                    </a>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  )
}

export default Category