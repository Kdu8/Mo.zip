import Mainpage from "../components/mainpage";
import category1 from "./css/category1.module.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

function Category1page() {
  
  return (
    <div className={category1.main}>
      <Mainpage />
    </div>
  );
}
export default Category1page;
