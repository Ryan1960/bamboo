import { Grid } from "@material-ui/core";
import React from "react";
import bao from "../../img/ds1.png";
import xz from "../../img/ds2.png";
import siqi from "../../img/ds3.png";
import herny from "../../img/ds4.png";
import shen from "../../img/ds5.png";
import jing from "../../img/ds6.png";
import david from "../../img/ds7.png";
import zhang from "../../img/ds8.png";
import perry from "../../img/ds9.png";
import xiao from "../../img/ds10.png";
import wei from "../../img/ds11.png";
import ting from "../../img/ds12.png";
import Lee from "../../img/ds13.png";

import TitleCards from "./titleCard/titleCards";

const pictures = [
  bao,
  xz,
  siqi,
  herny,
  shen,
  jing,
  david,
  zhang,
  perry,
  xiao,
  wei,
  ting,
  Lee,
];

export default function MentorResources() {
  return (
    <div className="body">
      <TitleCards title=" 咨询 " srcArray={[bao, xz, siqi]} />
      <TitleCards title=" 金融 " srcArray={[herny, shen, jing]} />
      <TitleCards title=" 金融 " srcArray={[david]} />
      <TitleCards title=" 数据科学 " srcArray={[zhang, perry, xiao]} />
      <TitleCards title="  产品经理 & 交互设计" srcArray={[wei, ting, Lee]} />
    </div>
  );
}
