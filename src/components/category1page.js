
import category1 from "./css/category1.module.css";
import main from "./css/main.module.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Mainheader from "./mainheader";
import Postbox from "./postbox";

function Category1page() {
  
  return (
    <div className={category1.main}>
      <Mainheader />
      <Postbox />
    </div>
  );
}
export default Category1page;
