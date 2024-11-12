import { Module1 } from "./ruta_aprendizaje/components/Module";
import { ModuleCallToAction } from "./ruta_aprendizaje/components/ModuleCallToACtion";
import DashboardLayout from "~~/components/DashboardLayout";

const HappyPath = () => {
  return (
    <DashboardLayout>
      <section>
        <h2 className="text-active text-[23px] mb-6">Voter Roll Dashboard</h2>
        <Module1 />
        <ModuleCallToAction />
      </section>
    </DashboardLayout>
  );
};

HappyPath.getLayout = (page: any) => {
  return page;
};

export default HappyPath;
