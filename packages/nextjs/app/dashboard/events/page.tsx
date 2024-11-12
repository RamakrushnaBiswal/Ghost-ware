import DashboardLayout from "~~/components/DashboardLayout";

const Events = () => {
  return (
    <DashboardLayout>
      <div>Events screen</div>
    </DashboardLayout>
  );
};

Events.getLayout = (page: any) => {
  return page;
};

export default Events;
