import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
function WidgetCard({ type }) {
  let data;
  const amount = 200;
  const diff = 10;
  switch (type) {
    case "user":
      data = {
        title: "User",
        isMoney: false,
        link: "see all users",
        icon: <FaUser className="user" />,
      };
      break;
    case "order":
      data = {
        title: "Order",
        isMoney: false,
        link: "see all orders",
        icon: <BsFillCartFill className="order" />,
      };
      break;
    case "earning":
      data = {
        title: "Earning",
        isMoney: false,
        link: "see all earnings",
        icon: <SiFuturelearn className="earn" />,
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: false,
        link: "see all balances",
        icon: <MdOutlineAccountBalanceWallet className="bal" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget-Card">
      <h3>
        {data.title}
        <span className="positive">
          <FaAngleUp />
          {diff}%
        </span>
      </h3>
      <h4>
        {data.isMoney && $}
        {amount}
      </h4>
      <ul>
        <li>
          <a href="">{data.link}</a>
        </li>
        <li>{data.icon}</li>
      </ul>
    </div>
  );
}

export default WidgetCard;
