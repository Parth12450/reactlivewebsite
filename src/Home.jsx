import React from "react";
import web from "../src/images/smartphone-balancing-with-pink-background.png";
import Common from "./Common";

const Home =() => {
  return(
  <>
<Common
name = "Welcome To Home Page"
imgsrc = {web}
visit = "/service"
btname = "Let Go"
/>
  </>);
};

export default Home;