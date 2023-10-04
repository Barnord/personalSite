// 'use client'
import Image from 'next/image'
import React from 'react';
// import Project from '../../public/assets/objects/proj.tsx'


export default function carouselItem(proj: any) {
  return(
    <Image
    src={proj.imgs[0]}
    alt=''
    width={192}
    height={108}
    />
    //   {/* <h2>Project Name</h2>
    //   <ul>
    //   <li></li>
    //   TODO: Figure out how to conveniently store project information. Database seems overkill. csv?
    // </ul> */}
    // </Carousel>
  );
}