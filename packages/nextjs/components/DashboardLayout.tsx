import { ReactNode } from "react";
import { Compite } from "~~/app/dashboard/progress/Compite";


interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap lg:justify-center gap-8 max-w-[1536px] m-auto">
      <div className="max-w-[750px] md:p-6">{children}</div>
      <aside className="lg:max-w-[380px]">
        <Compite />
      </aside>
    </div>
  );
};
export default DashboardLayout;
