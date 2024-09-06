import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Carousel } from 'antd'
import { useRef } from 'react'

const Banner = () => {
  const carouselRef = useRef<any>(null)

  const prev = () => {
    carouselRef.current.prev()
  }

  const next = () => {
    carouselRef.current.next()
  }

  return (
    <div className='w-full mx-auto top-2.5  relative pt-16 md:pt-0'>
      <Carousel ref={carouselRef} effect='fade' autoplay className='overflow-hidden shadow-lg'>
        <img
          src='https://theme.hstatic.net/200000592359/1001192084/14/slide_3_img.jpg?v=55,1'
          alt='Slide 1'
          className='w-full object-cover'
        />
        <img
          src='https://theme.hstatic.net/200000592359/1001192084/14/slide_1_img.jpg?v=55,2'
          alt='Slide 2'
          className='w-full object-cover'
        />
        <img
          src='https://theme.hstatic.net/200000592359/1001192084/14/slide_2_img.jpg?v=55,3'
          alt='Slide 3'
          className='w-full object-cover'
        />
      </Carousel>

      {/* Nút sang trái */}
      <Button
        onClick={prev}
        className='hidden md:block absolute top-1/2 transform -translate-y-2/3  left-4  bg-white text-black px-2   rounded-full shadow-lg hover:bg-gray-200 transition'
      >
        <LeftOutlined />
      </Button>

      {/* Nút sang phải */}
      <Button
        onClick={next}
        className='hidden md:block absolute top-1/2 transform -translate-y-2/3 right-4 bg-white text-black  px-2 rounded-full shadow-lg hover:bg-gray-200 transition'
      >
        <RightOutlined />
      </Button>
    </div>
    // dưới banner
  )
}

export default Banner
