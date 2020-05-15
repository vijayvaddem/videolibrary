import React from "react";

//Responsibility : Render empty or full heart
//Input: Liked: boolean
//Output: onClick

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
