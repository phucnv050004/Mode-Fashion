import {
  FacebookFilled,
  GooglePlusOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-500 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Đăng ký nhận tin */}
          <div className="order-1 md:order-4">
            <h2 className="text-lg font-bold text-center md:text-left">
              Đăng ký nhận tin
            </h2>
            <p className="text-muted-foreground">
              Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và
              thông tin giảm giá khác.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="border border-border rounded-l-md p-2 flex-grow"
              />
              <button className="bg-black text-secondary-foreground rounded-r-md p-2 hover:bg-secondary/80">
                <span className="text-white">ĐĂNG KÝ</span>
              </button>
            </div>
          </div>

          {/* Về Mode Fashion */}
          <div className="order-2">
            <h2 className="text-lg font-bold text-center md:text-left">
              Về Mode Fashion
            </h2>
            <p className="text-muted-foreground">
              Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì
              bạn cần để xây dựng thương hiệu online, thành công trong bán lẻ và
              marketing đột phá.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-white text-2xl border border-white p-2 rounded-full flex items-center justify-center"
              >
                <FacebookFilled />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-white p-2 rounded-full flex items-center justify-center"
              >
                <TwitterOutlined />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-white p-2 rounded-full flex items-center justify-center"
              >
                <InstagramOutlined />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-white p-2 rounded-full flex items-center justify-center"
              >
                <GooglePlusOutlined />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-white p-2 rounded-full flex items-center justify-center"
              >
                <YoutubeOutlined />
              </a>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div className="order-3">
            <h2 className="text-lg font-bold text-center md:text-left">
              Thông tin liên hệ
            </h2>
            <p className="text-muted-foreground">
              Địa chỉ: Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành,
              phường 15, quận 11, Tp. Hồ Chí Minh.
            </p>
            <p className="text-muted-foreground">Điện thoại: 1900.636.000</p>
            <p className="text-muted-foreground">Fax: 1900.636.000</p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a href="mailto:hi@modefashion.com" className="text-primary">
                hi@modefashion.com
              </a>
            </p>
            <h3 className="mt-6 font-bold">Phương thức vận chuyển</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <img
                src="https://theme.hstatic.net/200000748041/1001116292/14/shipment_1_img.png?v=31"
                alt="GHN Express"
                className="h-8"
              />
              <img
                src="https://theme.hstatic.net/200000748041/1001116292/14/shipment_3_img.png?v=31"
                alt="Ahamove"
                className="h-8"
              />
              <img
                src="https://theme.hstatic.net/200000748041/1001116292/14/shipment_4_img.png?v=31"
                alt="J&T Express"
                className="h-8"
              />
            </div>
          </div>

          {/* Nhóm liên kết */}
          <div className="order-4 md:order-1">
            <h2 className="text-lg font-bold text-center md:text-left">
              Nhóm liên kết
            </h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Tìm kiếm</li>
              <li>Giới thiệu</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản dịch vụ</li>
              <li>Hệ thống cửa hàng</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
