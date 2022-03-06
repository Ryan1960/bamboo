import React from "react";
import "./messagesHome.css";
export function MessagesHome({ children }) {
  return (
    <div>
      <ul className="img-right-text">
        {children.map((child) => (
          <li className="li-text">
            <span className="img-right-text-color">{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
