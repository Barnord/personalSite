import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';
// import carouselItem from './carouselItem';
// import ProjData from '../../public/assets/json/projects.json'
// import Project from '../../public/assets/objects/proj';
// import React, { useState } from 'react'

// export default function multiCarousel() {
class MultiCarousel extends Component {
  // state = { isMoving: false }

  // const cItems: any[] = [];
  // ProjData.projects.forEach(proj => {
  //   cItems.push(carouselItem(proj))
  // });
  
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1//cItems.length
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
    }
    return(
      // <></>
      <Carousel
        responsive={responsive}
        ssr={true}
        >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        {/* {cItems} */}
      </Carousel>
    );
  }
}

export default MultiCarousel;