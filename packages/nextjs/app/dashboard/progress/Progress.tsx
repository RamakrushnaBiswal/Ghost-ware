import Image from "next/image";
import progressChart from "../../../public/progressChart.svg";
import { BsPatchCheckFill } from "react-icons/bs";

const Progress = () => {
  return (
    <article className="p-6 border-[1px] border-lightGrey rounded-2xl self-start mb-10">
      <h4 className="text-darkGrey mb-4 font-semibold">Voters</h4>
      <div className="flex">
        <BsPatchCheckFill fill="darkOrange" size={35} />
        <div className="pl-2">
          <span className="text-active">Daily goal   </span>
          <div className="flex items-center">
            <div className="w-[150px] mr-2 bg-progressGrey rounded-full h-2.5">
              <div className="bg-lightOrange h-2.5 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <span className=" text-subP text-light text-lightGrey">8/20</span>
          </div>
        </div>
      </div>
      <Image src={progressChart} alt="Progress Chart" width={300} height={300} />
    </article>
  );
};
export default Progress;
