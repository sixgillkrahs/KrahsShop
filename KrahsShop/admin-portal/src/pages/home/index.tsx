import React from "react";
import { useTranslate } from "../../utils";

const Home = () => {
  const translate = useTranslate();
  return <div>{translate("menu.home")}</div>;
};

export default Home;
