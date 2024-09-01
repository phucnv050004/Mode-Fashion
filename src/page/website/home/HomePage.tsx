import { ArrowRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Carousel, Button } from "antd";
import Meta from "antd/es/card/Meta";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const categories = [
  {
    title: "Thời trang nam",
    image:
      "https://theme.hstatic.net/200000592359/1001192084/14/home_category_1_img.jpg?v=55",
  },
  {
    title: "Thời trang nữ",
    image:
      "https://theme.hstatic.net/200000592359/1001192084/14/home_category_2_img.jpg?v=55",
  },
  {
    title: "Thời trang mùa đông",
    image:
      "https://theme.hstatic.net/200000592359/1001192084/14/home_category_3_img.jpg?v=55",
  },
  {
    title: "Thời trang nổi bật 2022",
    image:
      "https://theme.hstatic.net/200000592359/1001192084/14/home_category_4_img.jpg?v=55",
  },
];
const newsItems = [
  {
    title: "Mẫu chân váy dạ mùa đông xinh xắn cho những ngày đông",
    description:
      "Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn muốn chia sẻ.",
    date: "13 Tháng 07, 2023",
    image:
      "https://file.hstatic.net/200000592359/article/blog01_aa6af9e80dc243019d1bc995be370853_large.jpg",
    link: "/link-1",
  },
  {
    title: "Cách phối đồ với quần jogger nữ đơn giản nhưng cực kỳ cá tính",
    description:
      "Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn muốn chia sẻ.",
    date: "13 Tháng 07, 2023",
    image:
      "https://file.hstatic.net/200000592359/article/blog02_ad9040892087469290bb2caf37862b98_large.jpg",
    link: "/link-2",
  },
  {
    title: "Tips phối đồ với boots nam thêm lịch lãm, fashion",
    description:
      "Boot đã có nhưng kết hợp với áo gì cũng khiến các anh chàng có gu thêm phần băn khoăn. Kiểu áo cũng là một yếu tố giúp set đồ của bạn thêm phần hoàn hảo. Một số gợi ý dưới đây sẽ giúp chàng thêm phần đẹp và trẻ trung hơn.",
    date: "13 Tháng 07, 2023",
    image:
      "https://file.hstatic.net/200000592359/article/blog03_a6f29cf3485048cf9c505228277b6990_large.jpg",
    link: "/link-3",
  },
  {
    title: "Cách phối đồ nam mùa đông cực thời trang và trendy",
    description:
      "Thời nay, biết cách ăn mặc là điều vô cùng quan trọng đối với bất cứ ai, dù là nam hay nữ. Nó sẽ giúp bạn ghi điểm trong mắt mọi người xung quanh. Do đó, dưới đây YODY sẽ chia sẻ với anh em những bí kíp phối đồ mùa đông nam cực chuẩn và hợp mốt.",
    date: "13 Tháng 07, 2023",
    image:
      "https://file.hstatic.net/200000592359/article/blog04_6d7325827ad345c3afb2c68f34677da3_large.jpg",
    link: "/link-2",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div>
      {/* Danh mục nổi bật */}
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
      {/* product list */}
      <h2 className="text-center text-[25px] text-xl mt-6 mb-10">
        SẢN PHẨM MỚI RA MẮT
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5 mx-8">
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/nu-6_e6d4657516ee487aa83a448d64671de5_b6f3b18dbc6b428688ad1ff9df92ed41_79fe54d771d94a898efc8b25bcac96cb_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/-6-1_015a3e3df35b42ecb268c0492ba697ad_7c43907ffa0a45d1a8699734bfcb6620_6c12bbeb29c54e0e9773f4ae597b2055_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo có slogan</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/-2-5_e111d02c6da5438b8c18fa081b77b817_6b84d30304e8484c94855b868e120038_89824349463f422590cd37d49e4c7756_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/-2-6_a217785366d4447aa6bfc594d11a7905_261b15eb4a2442f980620cc70989d9c9_5c062b2d5e2244f890ff08de4e55505d_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo len cổ tròn kiểu Cổ điển</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/-5-9_f69ee5ff25104175859df5c01b1075b0_8c3452c0c4804cc486f00e1044ce1e86_25d7a31fb7ec49579557eea482a97b3c_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/5-11_be4bad94c08f4a508b99cbb02e3803b0_e78b05de7b35419b9d1fd9b734563b71_340858d2e6334b8988b8d0d8358f6353_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo phông đồ họa Jersey</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/am-2_bdbfaa6332744939a95ae473eec398ba_05b1d97767f94ff894c7aaa879a45be9_690529155fe845ad862222b8178dda68_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/-2-2_52d155e2fccb40188b82921d65fbd090_a2c1406d8bba4f43a30bd566199acea1_3ca2077f6d7540c6be57063d2741bbcc_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo Thun Nam Y2010 Basic Z02</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/5-13_fd0163fcc7a4454099d700927584d4f6_dfa592098d8448e79d2122b5ecbc3c56_9bda3d29e4f64395a9ff38ccf9e4cf55_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/5-15_8b7c9fb33de8476bbabe080efb2b5b7b_1377d005166440c5b592781484eb75d9_271b9533deb642c0a598a11a1c3ec1cc_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo sơ mi nữ vải Chiffon</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/ben-sherman-ss-gingham-shirt-1_9a9aeecc4bc74ec7af907e15f332d9e1_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/ben-sherman-ss-gingham-shirt-5_aa5e4f0d0b5245ffae5e290035d81c14_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo Sơ mi Caro tay ngắn</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/5559325807_2_1_1_8660205298d2417890e21c916af64125_2a5d97869a744f2591c84f69de5eaee9_master.jpeg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/5559325807_2_3_1_6c7303c67ccf46128ab7b4a074d168ff_0b00087fe6f54e0b94ec4bcb87563751_master.jpeg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo len cổ điển</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/5559315400_2_1_1_5788900aa97141aca0faf61e83002a70_853d938818ff4cb79042eef6cabba17e_master.jpeg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/5559315400_2_4_1_ff56e7cffeab4f1ca5787e6147c12575_95b90642848c4075b42d866d1c1d009f_master.jpeg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Elessi Knit</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/12-9_0a3db44e803c4ac4a3726bae953070a2_9960b7812e4f47b6b599583bfc3416d7_d2879beefccc4e429b8669b55e5febb5_master.jpg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/2-10_4a57fa69d1a14f71bbb83b8c1c1ac653_5b880b0c67bd4528a679d69e6ebd0447_1385a6e27a8c449c8764b3ba540a1d4e_master.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Mũ bóng chày chống nắng kiểu Hàn Quốc</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 ">
          <div className="relative">
            <div className="flex group-hover:-translate-x-full transition-transform ease-in-out duration-500">
              <img
                src="https://product.hstatic.net/200000592359/product/2141498300_1_1_1_1da0f014e355489796151255eb7fb6cf_d0790862aaea4e76807555ff01911b89_master.jpeg"
                alt=""
                className="object-cover"
              />
              <img
                src="https://product.hstatic.net/200000592359/product/2141498300_2_1_1_1aa2267b5c3942f08587a2dcc49a687c_4edd816eeca14cfba275d855bc48140e_master.jpeg"
                alt=""
                className="object-cover"
              />
            </div>
            <FaRegEye
              className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
              title="Xem nhanh"
            />
            <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
              -29%
            </span>
          </div>
          <div className="mx-2 text-center space-y-2 mt-3">
            <h3>Áo khoác cho nam</h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">890,000₫</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
              <span className="text-[12px] uppercase font-semibold text-ellipsis ">
                Thêm vào giỏ
              </span>
              <div className="p-[6px] bg-[#FCA120] rounded-full">
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
      </div>
      <div className="bg-[#faefec] mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center py-5">
          SET ĐỒ NỔI BẬT
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center gap-5 sm:gap-10 lg:gap-20 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 py-5">
          <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3">
            <div className="relative">
              <div className="flex transition-transform ease-in-out duration-500">
                <img
                  src="https://theme.hstatic.net/200000592359/1001192084/14/home_set_combo_1_img.jpg?v=55"
                  alt=""
                  className="object-cover"
                />
              </div>
              <FaRegEye
                className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full w-7 h-7 md:w-8 md:h-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
                title="Xem nhanh"
              />
              <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
                -29%
              </span>
            </div>
            <div className="mx-2 text-center space-y-2 mt-3">
              <h3 className="text-sm sm:text-base">
                Áo len cổ tròn kiểu Cổ điển
              </h3>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
                <span className="text-[#FF0000] font-semibold">890,000₫</span>
                <span className="text-[#878c8f] font-light line-through text-[13px]">
                  1,250,000₫
                </span>
              </div>
              <Button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full px-2 sm:px-4 mx-auto">
                MUA NGUYÊN SET
              </Button>
            </div>
          </div>

          <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3">
            <div className="relative">
              <div className="flex transition-transform ease-in-out duration-500">
                <img
                  src="https://theme.hstatic.net/200000592359/1001192084/14/home_set_combo_3_img.jpg?v=55"
                  alt=""
                  className="object-cover"
                />
              </div>
              <FaRegEye
                className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full w-7 h-7 md:w-8 md:h-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
                title="Xem nhanh"
              />
              <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
                -29%
              </span>
            </div>
            <div className="mx-2 text-center space-y-2 mt-3">
              <h3 className="text-sm sm:text-base">
                Áo len cổ tròn kiểu Cổ điển
              </h3>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
                <span className="text-[#FF0000] font-semibold">890,000₫</span>
                <span className="text-[#878c8f] font-light line-through text-[13px]">
                  1,250,000₫
                </span>
              </div>
              <Button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full px-2 sm:px-4 mx-auto">
                MUA NGUYÊN SET
              </Button>
            </div>
          </div>
          <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3">
            <div className="relative">
              <div className="flex transition-transform ease-in-out duration-500">
                <img
                  src="https://theme.hstatic.net/200000592359/1001192084/14/home_set_combo_2_img.jpg?v=55"
                  alt=""
                  className="object-cover"
                />
              </div>
              <FaRegEye
                className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full w-7 h-7 md:w-8 md:h-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
                title="Xem nhanh"
              />
              <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
                -29%
              </span>
            </div>
            <div className="mx-2 text-center space-y-2 mt-3">
              <h3 className="text-sm sm:text-base">
                Áo len cổ tròn kiểu Cổ điển
              </h3>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
                <span className="text-[#FF0000] font-semibold">890,000₫</span>
                <span className="text-[#878c8f] font-light line-through text-[13px]">
                  1,250,000₫
                </span>
              </div>
              <Button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full px-2 sm:px-4 mx-auto">
                MUA NGUYÊN SET
              </Button>
            </div>
          </div>
          <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3">
            <div className="relative">
              <div className="flex transition-transform ease-in-out duration-500">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu840J-DpMUz2A1w_Td3xShT7sj6UGeL1Pzg&s"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <FaRegEye
                className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full w-7 h-7 md:w-8 md:h-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
                title="Xem nhanh"
              />
              <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
                -29%
              </span>
            </div>
            <div className="mx-2 text-center space-y-2 mt-3">
              <h3 className="text-sm sm:text-base">
                Áo len cổ tròn kiểu Cổ điển
              </h3>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
                <span className="text-[#FF0000] font-semibold">890,000₫</span>
                <span className="text-[#878c8f] font-light line-through text-[13px]">
                  1,250,000₫
                </span>
              </div>
              <Button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full px-2 sm:px-4 mx-auto">
                MUA NGUYÊN SET
              </Button>
            </div>
          </div>
        </div>
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
          <h1 className="text-lg font-bold text-center px-6 mb-6 mt-6">
          TIN TỨC NỔI BẬT
          </h1>
          <div
            ref={scrollContainerRef}
            className="overflow-hidden scrollbar-hide  whitespace-nowrap "
          >
            {newsItems.map((article, index) => (
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
            {newsItems.map((newsItem, index) => (
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
      {/* end baì viết  */}
    </div>
  );
};

export default HomePage;
