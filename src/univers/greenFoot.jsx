import React from "react";
import "./greenFoot.css";
export function GreenFoot({ children }) {
  return (
    <div>
      <div className="selectE2">
        {children}
        <div className="go-text-3">免费咨询</div>
      </div>
    </div>
  );
}
