import useProductOutstanding from "@/hooks/outstanding";
import { Button } from "antd"
import { FaRegEye } from "react-icons/fa"

const Outstanding = () => {
  const {productsOutstanding} = useProductOutstanding();

  return (
    <div className="bg-[#faefec] mt-10">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center py-5">
      SET ĐỒ NỔI BẬT
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center gap-5 sm:gap-10 lg:gap-20 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 py-5">
       {productsOutstanding.map((product, index) => (
          <div className="group overflow-hidden hover:shadow-lg rounded-lg pb-3" key={index}>
          <div className="relative">
            <div className="flex transition-transform ease-in-out duration-500">
              <img
                src={product.image}
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
             {product.name}
            </h3>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
              <span className="text-[#FF0000] font-semibold">{product.price}.000đ</span>
              <span className="text-[#878c8f] font-light line-through text-[13px]">
                1,250,000₫
              </span>
            </div>
            <Button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full px-2 sm:px-4 mx-auto">
              MUA NGUYÊN SET
            </Button>
          </div>
        </div>
       ))}
     

    </div>
  </div>

  )
}

export default Outstanding