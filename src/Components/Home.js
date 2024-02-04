import React from "react";
import Image from "react-bootstrap/Image";
import mainimage from "../images.png";

const Home = () => {
  return (
    <>
      <Image src={mainimage} className="img-size" />
    </>
  );
};

export default Home;
