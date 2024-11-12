import { BsStars } from "react-icons/bs";

export const ModuleCallToAction = () => {
  return (
    <section className="border-[1px] border-darkOrange rounded-2xl px-14 py-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:pl-8">
          <p className="text-subP text-darkGrey">Join the Fight for Fair Elections</p>
          <h4 className="text-h4 text-darkOrange leading-6">Empower Democracy with Blockchain</h4>
        </div>
      </div>
      <p className="text-subP text-center text-darkGrey">
        Together, we can eliminate vote-buying and enhance <br />
        electoral integrity. By leveraging innovative technology, we <br />
        aim to create a transparent voting process that empowers <br />
        every citizen.
      </p>
      <button className="m-auto flex items-center py-2 px-10 rounded-2xl bg-gradient-to-b from-darkOrange to-lightOrange text-white font-normal">
       [Get Involved Now]<BsStars fill="white" />
      </button>
    </section>
  );
};
