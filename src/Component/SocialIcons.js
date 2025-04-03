import React from "react";

function SocialIcons({ iconClass }) {
  return (
    <a href="#" className="roundedBox">
      <i className={`bi ${iconClass}`}></i>
    </a>
  );
}

export default SocialIcons;
