import React from "react";
import LatestworkDesigns from "../Component/LatestworkDesigns/LatestworkDesigns";
// import "../Image/img2.PNG";
// import "../Image/image.png";
// import "../Image/design1.PNG";
// import "../Image/image-4.png";
import "../Image/Image55.png";
import "../Image/Image66.png";
import "../Image/Image11.png";
import "../Image/Image22.png";
import "../Image/Image33.png";
import "../Image/Image44.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ../../../public/Image/design1.PNG

const LatestWork = () => {

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 3,
    // slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
        // settings: 'unslick',
      },
    ],

  };

  const designs2 = [
    {
      image: "../Image/Image66.png",
      link: "https://to-do-app-react-node-uclf.vercel.app/",
      ProjectName: "To-Do App",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image11.png",
      link: "https://web-assignment-fitpeo-tech.vercel.app/",
      ProjectName: "Website Clone",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image55.png",
      link: "https://caption-video-webapp.vercel.app/",
      ProjectName: "Caption-Video-App",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image44.png",
      link: "https://prove-way-assignment.vercel.app/",
      ProjectName: "Website Clone",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image22.png",
      link: "https://wodmart-nextjs-project.vercel.app/",
      ProjectName: "Website Clone",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image33.png",
      link: "https://test-project-wheat-omega.vercel.app/",
      ProjectName: "Website Clone",
      ProjectDesc: ""
    }]



  const designs1 = [
    {
      image: "../Image/Image66.png",
      link: "https://to-do-app-react-node-uclf.vercel.app/",
      ProjectName: "To-Do App",
      ProjectDesc: ""
    },
    {
      image: "../Image/Image55.png",
      link: "https://caption-video-webapp.vercel.app/",
      ProjectName: "Caption-Video-App",
      ProjectDesc: ""
    }
  ];
  return (
    <div className="bg-[#f4f2ee] px-10  md:px-24  py-8 lg:py-12 " >
      <div className="text-xl md:text-3xl font-semibold  text-center mb-5 md:mt-0  ">
        LATEST PROJECTS
      </div>


      <div className="h-full w-full px-12 ">
        <div className="text-center text-lg md:text-xl font-semibold">MERN STACK PROJECTS</div>
        <br />
        <Slider {...settings} className="">

          {designs1.map((design, index) => (

            <LatestworkDesigns
              key={index}
              designImage={design.image}
              vercelLink={design.link}
              ProjectName={design.ProjectName}
              ProjectDesc={design.ProjectDesc}
            />

          ))}
        </Slider>

        <br />
        <br />
        <div className="text-center text-lg md:text-xl font-semibold">WEBSITE CLONE</div>
        <br />
        <Slider {...settings} className="">

          {designs2.map((design, index) => (

            <LatestworkDesigns
              key={index}
              designImage={design.image}
              vercelLink={design.link}
              ProjectName={design.ProjectName}
              ProjectDesc={design.ProjectDesc}
            />

          ))}
        </Slider>
      </div>

    </div>
    // grid grid-cols-3 md:grid-cols-2   justify-start
  );
};

export default LatestWork;

