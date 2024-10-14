import React, { useContext, useEffect, useState } from "react";
import Img1 from "../../assets/women/first.jfif";
import Img2 from "../../assets/women/firsr1.jfif";
import Img3 from "../../assets/women/first2.jfif";
import Img4 from "../../assets/women/first3.jfif";
import Img5 from "../../assets/women/earrings.jfif";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import UserContext from "../../context/UserContext";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: " Pearl Bracelets",
    rating: 5.0,
    color: "yellow",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Necklace sets",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Oxidised silver bracelet",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Trendy Bracelets",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Pink pearl earrings",
    rating: 4.5,
    color: "red",
    aosDelay: "800",
  },
];

export default function Products() {
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState(''); // For the main image display
  let {auth} = useContext(UserContext)
let navigation = useNavigate()
  async function getProfile() {
    try {
      let result = await axios.get('https://actl.co.in/sikha/getProduct');
      if(result){
        const final = result.data.map(item => {
          if ((typeof item.productImages === 'string') && (typeof item.productSize === 'string')) {
            return { ...item, productImages: JSON.parse(item.productImages),productSize: JSON.parse(item.productSize)  };
          }   
           return item;
        });
        // let finalData = final.filter((item)=> item.productSubCategory == filterData)
        setData(final)
        // setSelectedCategory(filterData)
        // console.log(finalData)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  async function addCart(data){
   
    // if(size){
      if(auth.username){
        let cartdata = {...data,productImages:`https://actl.co.in/sikha_uploads/${data.productImages[0]}`}
      let user =  auth.username.email.split('@')[0] + '_sikha_cart'
      // console.log(user)
      await axios.post(`https://actl.co.in/sikha/cartSave/${user}`,cartdata)
      navigation('/cart')
      }else{
        navigation('/signinsignup')
      }
      // console.log(cartdata)
    // }else{
    //   alert("Please Select Product-Size to AddCart")
    // }
    }
   async function addWish(data){
    // console.log(data.productImages[0])
    // setMainImage(`https://actl.co.in/sikha_uploads/${data.productImages[0]}`);
    // if(size){
      if(auth.username){
        let cartdata = {...data, productImages:`https://actl.co.in/sikha_uploads/${data.productImages[0]}`}
        // console.log(cartdata)
      let user =  auth.username.email.split('@')[0] + '_sikha_wish'
      // console.log(user)
      await axios.post(`https://actl.co.in/sikha/wishSave/${user}`,cartdata)
      navigation('/wishlist')
      }else{
        navigation('/signinsignup')
      }
      // console.log(cartdata)
    // }else{
    //   alert("Please Select Product-Size to AddCart")
    // }
    }
  // console.log(data)
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our Popular Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Adorn Yourself with Our Exclusive Range Of Handmade Jewellary
          </p>
        </div>
        {/* Body section */}
        <div>
        <div className="flex gap-10 flex-wrap justify-center">
        {data && data.map((product, index) => (
          <div key={index} className="border w-72 p-4 rounded-lg" to={`/productpage/${product.productCode}`}>
            <Link to={`/productpage/${product.productCode}`}>
            <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
         <style>
    {`
      .swiper-button-next, .swiper-button-prev {
        color: gray; /* Your desired color */
      }
      .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 20px; /* Optional: Adjust the arrow size */
      }
    `}
  </style>
        {product.productImages.map(slide => (
          <SwiperSlide key={slide.id}>
            <img
              src={`https://actl.co.in/sikha_uploads/${slide}`}
              alt={`Slide ${slide.id}`}
              className="w-full h-72 object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
            <h2 className="text-lg font-semibold">{product.productTitle}</h2>
            <p className="text-red-500">{Math.ceil(product.productPrice -((product.productPrice * product.productDiscount)/100))} Rs.</p>
            <p className="line-through text-gray-400">{product.productPrice} Rs.</p>
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button onClick={()=>addCart(product)} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-2 text-sm rounded-lg w-full sm:w-auto">
                Add to Cart
              </button>
              <button onClick={()=>addWish(product)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 text-sm rounded-lg w-full sm:w-auto">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          {/* view all button */}
          {/* <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};


