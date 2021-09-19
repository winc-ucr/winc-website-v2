import React from "react";
import Layout from "../components/layout";
import Calendar from "../components/sections/events/Calendar";
import EventCards from "../components/sections/events/EventCards";
import Seo from "../components/seo";

const Events = () => {
  return (
    <Layout>
      <Seo title="Events" />
      <Calendar />
      <EventCards />
    </Layout>
  );
};

export default Events;
