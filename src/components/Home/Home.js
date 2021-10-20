import React from "react";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ServiceHome from "../ServiceHome/ServiceHome";
import Procedure from "../Procedure/Procedure";

const Home = () => {
  document.title = 'Docfind';
  return (
    <>
      <Header />
      <Navigation slide={true}/>
      <ServiceHome item={6} />
      <Procedure></Procedure>
      <Review />
      <Footer />
    </>
  );
};

export default Home;
