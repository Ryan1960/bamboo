import React from "react";
import "./words.css";
export function Words({ children }) {
  return (
    <div>
      <ul className="img-right-text">
        {children.map((child) => (
          <li className="li-word">
            <span className="img-right-text-color">{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
