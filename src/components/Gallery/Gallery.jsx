// @ts-nocheck
import React, { useState, useRef } from 'react'
import "./gallery.scss"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Lazy, FreeMode, Navigation, Thumbs } from "swiper";
const Gallery = ({ item }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className="gallery">
            <div className="gallery__main">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    lazy={true}
                    grabCursor={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {item.thumbUrl.map((url, i) => (
                        <SwiperSlide key={i}>
                            <img src={url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="gallery__sub">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {item.thumbUrl.map((url, i) => (
                        <SwiperSlide key={i}>
                            <img src={url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery