// 'use client'
import React, { useEffect } from 'react'
// import { Carousel, initTE } from "tw-elements"
// import NewCarousel from './carousel.tsx'
// import projData from '../../public/assets/json/projects.json';
// import carouselItem from "./carouselItem";
import Project from '../../public/assets/objects/proj'

export default function Projects(projData: Project[]) {
  // useEffect(() => {
    // const init = async () => {
      // const { Datepicker, Input, initTE } = await import("tw-elements");
      // initTE({ Datepicker, Input });
    // };
    // init();
    // initTE(Carousel)
    // }, []);
    // { let success = projData.forEach((proj: Project) => {
      // {carouselItem(proj)}
    // })}
  return (
    <>
    {/* {NewCarousel({Carousel,success})} */}
    {/* </NewCarousel> */}
    </>
  );
};

// export default Projects;

// export default function Projects() {
//   return(
//     <>
//       <h2>Here there be projects.</h2>
//       <p>And a carousel. Eventually.</p>
//     </>
//   )
// }