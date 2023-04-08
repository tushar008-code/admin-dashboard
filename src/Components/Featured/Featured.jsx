import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
function Featured() {
  return (
    <>
      <div className="featured-box">
        <h3>
          Total Revenue{" "}
          <span>
            <BsThreeDotsVertical />
          </span>
        </h3>
        <div className="progress">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          <h5>Total sales made today</h5>
          <h6>$420</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            officiis praesentium maxime
          </p>
          <ul>
            <li>
              Target{" "}
              <span className="negetive">
                <FaAngleDown />
                $12.4k
              </span>
            </li>
            <li>
              Last Week
              <span className="positive">
                <FaAngleUp />
                $5.0k
              </span>
            </li>
            <li>
              Last Month
              <span className="negetive">
                <FaAngleDown /> $15.k
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Featured;
