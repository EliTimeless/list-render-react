import React from "react";
import "./App.css";

function Names(props) {
  return (
    <div>
      {" "}
      <em> Everyone from the list is looking for you!</em>
      <div className="names">
        <div>
          {props.nameOne}
          <div>
            <img src={props.imageOne} alt="" />
          </div>
        </div>
        <div>
          {props.nameTwo}
          <div>
            <img src={props.imageTwo} alt="" />
          </div>
        </div>
        <div>
          {props.nameThree}{" "}
          <div>
            <img src={props.imageThree} alt="" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Names;
