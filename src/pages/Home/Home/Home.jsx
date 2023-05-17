import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
  return (
    <div className="mb-4">
      <h5>In Home</h5>
      <SubCategory></SubCategory>
    </div>
  );
};

export default Home;
