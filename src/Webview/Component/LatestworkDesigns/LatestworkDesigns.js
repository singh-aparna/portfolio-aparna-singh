
import designImage from '../../Image/design1.PNG';

const LatestworkDesigns = ({ designImage, vercelLink }) => {
  const handleClick = () => {
    window.open(vercelLink, "_blank");
  };

  return (
    <div className="relative cursor-pointer w-[350px]" onClick={handleClick}>
      <div className=''>
        <img
          src="https://img.freepik.com/premium-vector/blank-screen-laptop-gadget-icon-isolated-white-background_1308-46353.jpg"
          alt="Laptop"
          
        />
      </div>
      <div className=''>
        <img src={designImage} alt="Design" className="h-[73%] w-[80%]  absolute top-[6%] left-[10%] pointer-events-none  " />
      </div>
    </div>
  );
};

export default LatestworkDesigns;
