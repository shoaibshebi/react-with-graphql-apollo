import React from "react";

export default function User(props) {
  function handleClick() {}

  return (
    <div
      className="singlUser"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
