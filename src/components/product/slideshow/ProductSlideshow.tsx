'use client'

import React, { useState } from 'react';


import {Swiper as SwiperObject} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode,Navigation,Thumbs} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';

interface Props{
    images:string[];
    title:string;
    className?:string;
}

export const ProductSlideshow = ({images,title,className}:Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>(null);

  return (
      <div className={ className }>

          {
              images.map(image=>(
               
                    <Image
                        key={image}
                        width={600}
                        height={600}
                        src={`/products/${image}`}
                        alt={title}
                        className='rounded-lg '
                    />
              ))
          }
      </div>
  )
}
