import React from "react";
// this the simple way to pass props to each components
// eslint-disable-next-line react/prop-types

function Test({ pass, username }) {
  return (
    <div>
      {username} , {pass}
    </div>
  );
}

export default Test;
