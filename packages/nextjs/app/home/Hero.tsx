import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { dataImgRight } from "~~/data/data";
import { dataImgLeft } from "~~/data/data";

export const Hero = () => {
  return (
    <section className="flex justify-between md:h-heroHeight bg-heroPattern bg-contain md:p-8">
      <div className="hidden md:flex flex-col justify-center  md:w-1/5 p-8 ">
        {dataImgRight.map(img => {
          return (
            <Image
              className={`self-${img.selfAlign}`}
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>
      <div className="text-center md:p-4">
        <div className=" ">
          <p className="flex flex-col md:flex-row md:justify-center">
            <button className="bg-active text-white rounded-[50px] px-3 py-2">+Join</button>
            <span className="bg-lightGreen text-neutral text-sm p-2">Join us to ensure fair elections.</span>   
          </p>
        </div>
        <div className="text-center flex flex-col justify-around items-center p-4 pt-20">
          <h1 className="text-h1 text-ocre mb-10">Enhancing Electoral</h1>
          <h2 className="text-h2 text-darkOrange mb-10">Integrity</h2>
          <h3 className="text-h3 text-ocre mb-10">Through Blockchain</h3>
          <button className="btn border-0 text-white bg-gradient-to-b from-darkOrange to-lightOrange">
            I want to know more
            <BsStars />
          </button>
        </div>
      </div>
      <div className=" hidden md:flex flex-col justify-center w-1/5 p-8">
        {dataImgLeft.map(img => {
          return (
            <Image
              className={`self-${img.selfAlign}`}
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>
    </section>
  );
};
