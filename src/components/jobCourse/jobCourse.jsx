import React from "react";
import deco1 from "../../img/deco1.png";
import deco2 from "../../img/deco2.png";
import deco3 from "../../img/deco3.png";
import Avatar06 from "../../img/Avatar06.png";
import Avatar04 from "../../img/Avatar04.png";
import Avatar03 from "../../img/Avatar03.png";
import Avatar07 from "../../img/Avatar07.png";
import zixun from "../../img/zixun.png";
import ba from "../../img/ba.png";
import investorBank from "../../img/investorBank.png";
import finance from "../../img/finance.png";
import pr from "../../img/pr.png";
import mkt from "../../img/mkt.png";
import it from "../../img/it.png";
import quant from "../../img/quant.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";
import icon5 from "../../img/icon5.png";
import icon6 from "../../img/icon6.png";
import icon7 from "../../img/icon7.png";
import icon8 from "../../img/icon8.png";
import icon9 from "../../img/icon9.png";
import icon10 from "../../img/icon10.png";
import icon11 from "../../img/icon11.png";
import icon12 from "../../img/icon12.png";
import icon13 from "../../img/icon13.png";
import icon14 from "../../img/icon14.png";
import icon15 from "../../img/icon15.png";
import icon16 from "../../img/icon16.png";
import icon17 from "../../img/icon17.png";
import zi1 from "../../img/zi1.png";
import zi2 from "../../img/zi2.png";
import zi3 from "../../img/zi3.png";
import zi4 from "../../img/zi4.png";
import zi5 from "../../img/zi5.png";
import zi6 from "../../img/zi6.png";
import zi7 from "../../img/zi7.png";
import zi8 from "../../img/zi8.png";
import zi9 from "../../img/zi9.png";
import zi10 from "../../img/zi10.png";
import zi11 from "../../img/zi11.png";
import zi12 from "../../img/zi12.png";
import zi13 from "../../img/zi13.png";
import zi14 from "../../img/zi14.png";
import zi15 from "../../img/zi15.png";
import zi16 from "../../img/zi16.png";
import zi17 from "../../img/zi17.png";
import deco18 from "../../img/deco3.png";

import "./jobCourse.css";
import { Grid } from "@material-ui/core";
import { GreenFoot } from "../../univers/greenFoot";
import Classes from "./classes/classes";
import { OurService } from "./ourService/ourService";

export default function JobCourse() {
  return (
    <div className="job">
      <div className="pig">
        <div className="qz-head">求职课程</div>
        <img src={deco2} className="qz-head-img2" alt="" />
        <div className="qz-head2">培训过程由竹子老师亲自跟踪回访，无小助手</div>
        <div className="qz-head3">参与，全程竹子亲自服务指导</div>
        <img src={deco1} className="qz-head-img1" />
        <div className="qz-text-3">
          <span className="qz-text-3-text">跟我联系</span>
        </div>
        <img src={deco3} className="qz-head-img3" />
      </div>
      <div className="ship">
        <div className="qz-body-t">适合人群</div>
        <div className="qz-body-1">
          <div className="pictou1">
            <img src={Avatar06} className="qz-body-img1" />
            <p className="qz-body-p">本科在读，正在找实习或者</p>
            <p className="qz-body-p-1">全职工作</p>
          </div>
          <div className="pictou2">
            <img src={Avatar04} className="qz-body-img2" />
            <p className="qz-body-p2">硕士在读，正在找实习或者</p>
            <p className="qz-body-p2-1">全职工作</p>
          </div>
          <div className="pictou3">
            <img src={Avatar03} className="qz-body-img3" />
            <p className="qz-body-p3">初入职场的young</p>
            <p className="qz-body-p3-1">professional,遇到职场瓶</p>
            <p className="qz-body-p3-2">颈，想要跳槽或转行</p>
          </div>
          <div className="pictou4">
            <img src={Avatar07} className="qz-body-img4" />
            <p className="qz-body-p4">职场小白，需要提高交流能</p>
            <p className="qz-body-p4-1">力，商业谈判技巧等职场必</p>
            <p className="qz-body-p4-2">备软技能</p>
          </div>
        </div>
      </div>
      <div className="ClassCategory">
        <div className="qz-body-t">课程类别</div>
        <Classes
          infos={[
            { src: zixun, title: "咨询" },
            { src: ba, title: "商业分析" },
            { src: investorBank, title: "投行" },
            { src: finance, title: "金融" },
            { src: pr, title: "销售&公关" },
            { src: mkt, title: "数字市场" },
            { src: it, title: "科技" },
            { src: quant, title: "量化" },
          ]}
        />
      </div>
      <div className="ourService">
        <div
          className="selectD"
          style={{ width: "100%", height: "100%", background: " #f7f9fb" }}
        >
          <h1 className="hp-head3">我们的服务有</h1>
          <OurService
            services={[
              { source1: icon1, zi: zi1 },
              { source1: icon2, zi: zi2 },
              { source1: icon3, zi: zi3 },
              { source1: icon4, zi: zi4 },
              { source1: icon5, zi: zi5 },
              { source1: icon6, zi: zi6 },
              { source1: icon7, zi: zi7 },
              { source1: icon8, zi: zi8 },
              { source1: icon9, zi: zi9 },
              { source1: icon10, zi: zi10 },
              { source1: icon11, zi: zi11 },
              { source1: icon12, zi: zi12 },
              { source1: icon13, zi: zi13 },
              { source1: icon14, zi: zi14 },
              { source1: icon15, zi: zi15 },
              { source1: icon16, zi: zi16 },
              { source1: icon17, zi: zi17 },
            ]}
          />
          <div className="dadian">
            <img className="dadianP" src={deco18} />
            注：学员将在竹子老师指导下，挑选相关课程
          </div>
        </div>
      </div>
      <GreenFoot>
        <div className="go-text-1">让我们开始吧！</div>
        <div className="go-text-2">让我来帮助你实现你的职场目标</div>
      </GreenFoot>
    </div>
  );
}
