import {
  BellOutlined,
  DownOutlined,
  MailOutlined,
  MehOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  Badge,
  Button,
  Carousel,
  Divider,
  Drawer,
  Dropdown,
  GetProps,
  Input,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const { useToken } = theme;

const Header = () => {
  const menu: MenuProps["items"] = [
    {
      key: "1",
      label: <span className="text-muted-foreground">Sản phẩm mới</span>,
    },
    {
      key: "2",
      label: <span className="text-muted-foreground">Sản phẩm nổi bật</span>,
    },
    {
      key: "3",
      label: (
        <span className="text-muted-foreground">Chương trình khuyến mãi</span>
      ),
    },
  ];

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setVisible(true);
    // setOpen(true)
  };
  const show = () => {
    // setVisible(true)
    setOpen(true);
  };
  const onClose = () => {
    setVisible(false);
    setOpen(false);
  };

  const menus: MenuProps["items"] = [
    {
      key: "sub1",
      label: "Sản phẩm mới",
      children: [
        { key: "1", label: "Nội thất theo yêu cầu" },
        { key: "2", label: "Sản phẩm đặc biệt 2023" },
        { key: "3", label: "Trang trí bếp" },
      ],
    },
    {
      key: "sub2",
      label: "Sản phẩm nổi bật",
      children: [
        { key: "4", label: "Trang trí phòng khách" },
        { key: "5", label: "Trang trí phòng ngủ" },
        { key: "6", label: "Sân vườn thoải mái" },
      ],
    },
    {
      key: "sub3",
      label: "Chương trình khuyến mãi",
      children: [
        { key: "7", label: "Giảm giá mùa hè" },
        { key: "8", label: "Sale lớn lên tới 49%" },
      ],
    },
    {
      key: "9",
      label: (
        <div className="bg-accent text-accent-foreground p-4 rounded-lg">
          <h3 className="text-xl font-bold">SPRING SALE</h3>
          <p className="text-lg">HÀNG HIỆU NGẬP TRÀN GIÁ NGÀN YÊU THƯƠNG</p>
          <p className="text-2xl font-bold">
            Chỉ từ <span className="text-red-500">99.000đ</span>
          </p>
          <p className="text-sm">1-31.03 | Áp dụng hàng ngàn sản phẩm</p>
        </div>
      ),
    },
  ];

  
  const users: MenuProps["items"] = [
    {
      label: <a href="#">Tên người dùng</a>,
      key: "0",
    },
    {
      label: <a  href="#">Đơn hàng</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <a  href="#">Logout</a>,
      key: "3",
    },
  ];
  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const [showPromo, setShowPromo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlPromoVisibility = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      // Khi cuộn xuống và độ cao cuộn lớn hơn 50px, ẩn khuyến mãi
      setShowPromo(false);
    } else if (window.scrollY < lastScrollY) {
      // Khi cuộn lên, hiện khuyến mãi
      setShowPromo(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlPromoVisibility);

    return () => {
      window.removeEventListener('scroll', controlPromoVisibility);
    };
  }, [lastScrollY]);
  return (
    <div>
        <div
        className={`bg-white p-1 text-center transition-transform duration-500 fixed top-0 left-0 right-0 z-50 ${
          showPromo ? 'block' : 'hidden'
        }`}>
        <Carousel autoplay effect="fade" dots={false}>
          <div>
            <span>Miễn phí vận chuyển cho đơn trên 500k</span>
          </div>
          <div>
            <span>Khuyến mãi khủng giảm tới 35% cho tất cả sản phẩm</span>
          </div>
          <div>
            <span>Sale hot chào lương về - Freeship đơn từ 0đ</span>
          </div>
        </Carousel>
        <hr />
      </div>
      
      {/* header */}
      <nav
        className={`flex items-center justify-between p-5 bg-background fixed w-full top-0 z-40 bg-white shadow-md transition-all duration-500 ${
          showPromo ? 'mt-7' : 'mt-0'
        }`}>
        <div className="text-2xl font-bold text-foreground">
          <div className="text-2xl font-bold text-foreground  ">Mode Fashion</div>
        </div>
        <div className="hidden md:flex space-x-8 ">
          <NavLink to={"#"} className="text-muted hover:text-muted-foreground">
            Trang chủ
          </NavLink>
          <Dropdown menu={{ items: menus }}>
            <NavLink to={"#"} className="bg-white">
              Sản phẩm <DownOutlined className="text-xs " />
            </NavLink>
          </Dropdown>
          <NavLink to={"#"} className="text-muted hover:text-muted-foreground">
            Giới thiệu
          </NavLink>
          <NavLink to={"#"} className="text-muted hover:text-muted-foreground">
            Cẩm nang trang trí
          </NavLink>
          <NavLink to={"#"} className="text-muted hover:text-muted-foreground">
            Liên hệ
          </NavLink>
          <span className='text-red-500'>• Live stream</span>
        </div>
        <div className="flex items-center space-x-4">
          <Dropdown
            trigger={["click"]}
            dropdownRender={() => (
              <div style={contentStyle}>
                <Divider style={{ margin: 0 }} />
                <Space style={{ padding: 8 }}>
                  <Search
                    className=" w-full"
                    placeholder="tìm kiếm sản phẩm... "
                    onSearch={onSearch}
                    style={{ width: 200 }}
                  />
                </Space>
                <br />
                <Space className=" px-16 py-2 rounded">
                  <Button className="bg-yellow-500 ">Tìm kiếm</Button>
                </Space>
              </div>
            )}
          >
            <span onClick={(e) => e.preventDefault()}>
              <Space>
                <Button shape="circle" icon={<SearchOutlined />} />
              </Space>
            </span>
          </Dropdown>

          <Dropdown menu={{ items: users }} trigger={["click"]}>
            <span onClick={(e) => e.preventDefault()}>
              <Space>
                <Button shape="circle" icon={<UserOutlined />} />
              </Space>
            </span>
          </Dropdown>
          <Button
            shape="circle"
            icon={<ShoppingCartOutlined />}
            className="relative "
            onClick={show}
          >
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              0
            </span>
          </Button>
          <Button
            className="md:hidden"
            shape="circle"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </div>
        <Drawer
          className=""
          title="DANH MỤC"
          placement="right"
          onClose={onClose}
          open={visible}
          width={320}
        >
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            Trang chủ
          </NavLink>
          <div className="p-2  ">
            <Dropdown menu={{ items: menu }} trigger={["click"]}>
              <span className="text-secondary hover:text-yellow-600">
                Sản phẩm mới <DownOutlined className="text-xs" />
              </span>
            </Dropdown>
          </div>
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            Giới thiệu
          </NavLink>
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            Cẩm nang trang trí
          </NavLink>
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            Hệ thống cửa hàng
          </NavLink>
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            FAQs
          </NavLink>
          <NavLink
            to={"#"}
            className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
          >
            Landing page
          </NavLink>
          <hr />
          <span className="block  text-yellow-600 hover:text-muted-foreground mb-6 mt-4">
            BẠN CẦN HỖ TRỢ ?
          </span>
          <span className="block  text-black hover:text-yellow-600 mb-6 mt-2">
            <PhoneOutlined /> 1900 0091
          </span>
          <span className="block  text-black hover:text-yellow-600 mb-6 mt-2">
            <MailOutlined /> admin@gmail.com
          </span>
        </Drawer>
        {/* giỏ hàng  */}
        <Drawer width={320} title="GIỎ HÀNG" onClose={onClose} open={open}>
          <div className="text-center ">
            <span>
              <MehOutlined />
            </span>
            <br />
            <span>Không có sản phẩm trong giỏ hàng</span>
            <br />
            <NavLink to={"#"} className="text-sm">
              trở về trang sản phẩm
            </NavLink>
          </div>
        </Drawer>
      </nav>
     
      
    </div>
  );
};

export default Header;
