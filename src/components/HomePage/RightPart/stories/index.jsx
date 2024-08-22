import React from "react";
import { storiesData } from "./storiesData";
import { Swiper, SwiperSlide } from "swiper/react";
const Stories = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="font-gilroyBold text-lg text-black">Stories</h4>
      </div>
      <div className="w-[310px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          //onSlideChange={() => console.log("slide change")}
          //onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="flex items-center gap-2">
            {storiesData.map((data, i) => (
              <SwiperSlide
                key={i}
                style={{
                  background: `url(${data.bgPicture})`,
                }}
                className="bg-cover bg-no-repeat bg-center w-[33%] h-[200px] rounded-md"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary_bg mt-2 ml-2">
                  <img
                    src={data.bgPicture}
                    className="w-full h-full object-cover"
                    alt="profile pic"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Stories;
