import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SubCategory from "../SubCategory/SubCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
const Home = () => {
  return (
    <div className="mb-4">
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
    </div>
  );
};

export default Home;
