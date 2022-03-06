import React from "react";

export function CompaniesSent({ srcs }) {
  return (
    <div>
      <div className="pics">
        {srcs.map((src) => (
          <div className="hp-head">
            <img src={src} className="hp-head-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
