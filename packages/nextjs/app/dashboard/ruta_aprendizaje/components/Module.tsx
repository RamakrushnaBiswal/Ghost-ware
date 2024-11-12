import ModuleTask from "./ModuleTask";
import ModuleTitle from "./ModuleTitle";

export const Module1 = ({ certModal }: any) => {
  return (
    <div>
      <ModuleTitle
        className="flex justify-between text-white bg-active p-5 rounded-xl"
        num="1"
        subTitle="Total Voters"
      />
      <ModuleTask bgColor={`bg-active text-white ${certModal ? "bg-active text-white" : ""}`} textColor="text-active" />
    </div>
  );
};
