const LatestworkDesigns = ({ designImage, vercelLink }) => {
  const handleClick = () => {
    window.open(vercelLink, "_blank");
  };

  return (
    <div
      className="relative cursor-pointer w-[200px] md:w-[500px]"
      onClick={handleClick}
    >
      <div className="">
        <img
          src="https://img.freepik.com/premium-photo/modern-laptop-with-blank-white-screen-isolated-white-background-mock-up-template_136875-3651.jpg"
          alt="Laptop"
        />
      </div>

      <div className="">
        <img
          src={designImage}
          alt="Design"
          className="h-[55%] w-[59%]  absolute top-[15%] left-[22%] pointer-events-none  "
        />
      </div>
    </div>
  );
};

export default LatestworkDesigns;
