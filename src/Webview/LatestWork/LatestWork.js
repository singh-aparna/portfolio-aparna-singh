import React from "react";
import LatestworkDesigns from "../Component/LatestworkDesigns/LatestworkDesigns";
import "../Image/img2.PNG";
import "../Image/image.png";
import "../Image/design1.PNG";
import "../Image/image-4.png";

// ../../../public/Image/design1.PNG

const LatestWork = () => {
  const designs = [
    {
      image: "../Image/design1.PNG",
      link: "https://web-assignment-fitpeo-tech.vercel.app/",
    },
    {
      image: "../Image/img2.PNG",
      link: "https://wodmart-nextjs-project.vercel.app/",
    },
    {
      image: "../Image/image.png",
      link: "https://test-project-wheat-omega.vercel.app/",
    },
    {
      image: "../Image/image-4.png",
      link: "https://prove-way-assignment.vercel.app/",
    },
    {
      image: "../Image/Image5.png",
      link: "https://caption-video-webapp.vercel.app/",
    },
  ];
  return (
    <div className="bg-[#f4f2ee] px-24  md:px-32  py-8 lg:py-5 ">
      <div className="text-xl md:text-3xl font-semibold  text-center mb-5 md:mt-0  ">
        Latest Works
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2   justify-start  ">
        {designs.map((design, index) => (
          <LatestworkDesigns
            key={index}
            designImage={design.image}
            vercelLink={design.link}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestWork;

