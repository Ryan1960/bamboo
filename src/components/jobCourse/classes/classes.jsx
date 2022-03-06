import React from "react";

export default function Classes({ infos }) {
  return (
    <div>
      <div className="qz-body-2">
        {infos.map((info) => (
          <div className="picke1">
            <img src={info.src} className="qz-body-2-img" />
            <p className="qz-body-2-p-1">{info.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
