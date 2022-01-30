import React from "react";
import "./Button.css";

export default function Button({
  name,
  callback,
  icon,
  className,
  disabled,
  onMouseOver,
}) {
  return (
    <>
      <button
        className={className}
        onClick={callback}
        disabled={!!disabled}
        onMouseOver={onMouseOver}
      >
        {" "}
        {name} <span>{icon}</span>
      </button>
    </>
  );
}
