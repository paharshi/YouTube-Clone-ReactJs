import React from "react";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const List = ["All", "Gaming", "sports", "Live", "Cooking","Music","Films","Entertainment","Marathi","Hindi","Telugu","Songs"];
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  return (
    <div className={`flex ${!isMenuOpen ? 'ml-[10rem]': 'ml-[12rem]' } z-50 pt-16`}>
      {List.map((e) => {
        let a = Math.random();
        return <Buttons name={e} key={a} />;
      })}
    </div>
  ); 
};

export default ButtonList;
