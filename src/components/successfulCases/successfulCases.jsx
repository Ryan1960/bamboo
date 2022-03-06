import React from "react";
import "./successfulCases.css";
import img7 from "../../img/img-7.png";
import img8 from "../../img/img-8.png";
import img9 from "../../img/img-9.png";
import img10 from "../../img/img-10.png";
import img11 from "../../img/img-11.png";
import { GreenFoot } from "../../univers/greenFoot";

export default function SuccessfulCases() {
  return (
    <div>
      <div className="title-1">竹笋上岸故事</div>
      <div className="title-text-1">
        <p>
          从事求职咨询这些年， 竹子见证了太多竹笋们在竹子的指导后，通过自己的努
          力，成功拿下各大公司的offer, 实现了他们的目标和梦想。
        </p>
      </div>
      <div className="caw">
        <div className="oneG">
          <a href="https://mp.weixin.qq.com/s/Tfmv8pbZ9jjA2s1gE_9acg">
            <img className="oneP" src={img7} width="400px" />
          </a>
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            从三次校招失败到收获美国德勤offter
          </p>
          <p className="img-text-1-text-title"> 努力从来都是幸运的另一个名</p>
          <p className="img-text-1-text-1">德勤 ｜ 会计</p>
          <hr className="img-text-1-text-2" />
          <p className="img-text-1-text-1">
            非顶尖美本｜非顶尖GPA｜0 internship
          </p>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <a href="https://mp.weixin.qq.com/s/By0HCvPkkgUclmq7n-3ylw">
            <img className="oneP" src={img8} width="400px" />
          </a>
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            一个月上岸，进入纽约知名大银行好
          </p>
          <p className="img-text-1-text-title"> 像也没有那么难？！</p>
          <p className="img-text-1-text-1">德勤 ｜ 金融</p>
          <hr className="img-text-1-text-2" />
          <p className="img-text-1-text-1">姓名 ｜ 学校 ｜领域</p>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <a href="https://mp.weixin.qq.com/s/Q3ePZa8VNmV-5bdMZfJ79Q">
            <img className="oneP" src={img9} width="400px" />
          </a>
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            斩获GT风险咨询Offer，不仅需要实
          </p>
          <p className="img-text-1-text-title"> 力，更需要实力</p>
          <p className="img-text-1-text-1">德勤 ｜ 会计</p>
          <hr className="img-text-1-text-2" />
          <p className="img-text-1-text-1">姓名 ｜ 学校 ｜领域</p>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <a href="https://mp.weixin.qq.com/s/3wHL7ausH_sQbtXaIBEc7Q">
            <img className="oneP" src={img10} width="400px" />
          </a>
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            成功圆梦华尔街 -- 小竹笋的VC风头
          </p>
          <p className="img-text-1-text-title"> 之路</p>
          <p className="img-text-1-text-1">德勤 ｜ 会计</p>
          <hr className="img-text-1-text-2" />
          <p className="img-text-1-text-1">姓名 ｜ 学校 ｜领域</p>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <a href="https://mp.weixin.qq.com/s/sBNzdzX1DaH2PXLCiBCmIQ">
            <img className="oneP" src={img11} width="400px" />
          </a>
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">小竹笋的奥美之路</p>
          <p className="img-text-1-text-title"> 努力从来都是幸运的另一个名</p>
          <p className="img-text-1-text-1">德勤 ｜ 会计</p>
          <hr className="img-text-1-text-2" />
          <p className="img-text-1-text-1">姓名 ｜ 学校 ｜领域</p>
        </div>
      </div>
      <GreenFoot>
        <div className="go-text-2">准备好在职场上更进一步了吗</div>
      </GreenFoot>
    </div>
  );
}
