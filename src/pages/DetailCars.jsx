import React from "react";

// component
import NavbarMain from "../components/NavbarMain";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details";

//helper
import { menuList } from "../helpers/constans";
import { textOne } from "../helpers/constans";
import { contact } from "../helpers/constans";
import { include, exclude, note } from "../helpers/constans";

export default function DetailCars() {
  return (
    <>
      <NavbarMain menu={menuList} logo="Binar" />
      <Showcase
        description={textOne}
        showButton={false}
        showText={false}
        showImg={false}
      />
      <Details include={include} exclude={exclude} info={note} />
      <Footer contactUs={contact} menu={menuList} />
    </>
  );
}
