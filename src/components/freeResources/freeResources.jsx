import React from "react";
import "./freeResources.css";
import img12 from "../../img/img-12.png";
import img13 from "../../img/img-13.png";
import img14 from "../../img/img-14.png";
import img15 from "../../img/img-15.png";
import img16 from "../../img/img-16.png";
import deco4 from "../../img/deco4.png";
import deco5 from "../../img/deco5.png";
import { GreenFoot } from "../../univers/greenFoot";
export default function FreeResources() {
  return (
    <div>
      <div className="title-1">竹子会客厅</div>
      <div className="title-text-1">
        <p>
          纽约竹子会客厅作为纽约竹子的精品系列活动，我们会定期邀请不同领域的嘉
          宾，通过与竹子老师访谈的形式，向大家展示最直接最有用的求职干货，内容
          涉及财务，咨询，金融，数据，计算机，市场等各种领域，请大家多多关注纽
          约竹子公众号，及时获取每期纽约竹子会客厅的信息。
        </p>
      </div>
      <div className="caw">
        <div className="oneG">
          <img className="oneP" src={img12} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">拥抱危机，突破自我，成就事业</p>

          <p className="img-text-1-text-1">
            数据 ｜ 金融 ｜产品经理 ｜ 职业转型
          </p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <img className="oneP" src={img13} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            数据 - 金融 - 产品，沃尔玛经理的
          </p>
          <p className="img-text-1-text-title"> 职业转型与人生目标</p>
          <p className="img-text-1-text-1">
            数据 ｜ 金融 ｜产品经理 ｜ 职业转型
          </p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/7xLUm152V_0URhR84hy6Ow">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=6BMsFZ4MQUg">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <img className="oneP" src={img14} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            从德勤咨询到亚马逊的客户方案经理
          </p>
          <p className="img-text-1-text-title"> 职业转型和新年计划</p>
          <p className="img-text-1-text-1">咨询 ｜ 科技 ｜MBA | 时间管理</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/N5DY8Jxc3-qk0cY5rPg0_A">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=YTUCSekohvM">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <img className="oneP" src={img15} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">2020年精华回顾：</p>
          <p className="img-text-1-text-title">感谢有你，一路相伴！</p>
          <p className="img-text-1-text-1">2020会客厅精华概括</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/UFB_aaMsydr7dESH-z-tFQ">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=9Mk08qEumUw">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="caw">
        <div className="oneG">
          <img className="oneP" src={img16} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">亚马逊数据科学家的职场秘籍</p>

          <p className="img-text-1-text-1">科技 ｜ 职业转型 ｜数据</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/Fp7B9E8EJLzOCYo2c-nXCA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=-d7Gjomg_2o">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <GreenFoot>
        <div className="go-text-2">准备好在职场上更进一步了吗</div>
      </GreenFoot>
    </div>
  );
}
