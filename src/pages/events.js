import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Calendar from "../components/sections/events/Calendar";
import Seo from "../components/seo";

const Events = () => {
  return (
    <Layout>
      <Seo title="Events" />
      <Calendar />
    </Layout>
  );
};

export default Events;
