import React from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
function Cards() {
  return (
    <div className="dashboard__cards">
      <div className="dashboard__card blue">
        <div className="dashboard__icon">
          <MoreHorizRoundedIcon />
        </div>
        <div className="card__header">
          <span>Total Income</span>
        </div>
        <div className="card__body">
          <span>₱ 522,000</span>
        </div>
      </div>
      <div className="dashboard__card green">
        <div className="dashboard__icon">
          <MoreHorizRoundedIcon />
        </div>
        <div className="card__header">
          <span>Total Orders</span>
        </div>
        <div className="card__body">
          <span>4</span>
        </div>
      </div>
      <div className="dashboard__card orange">
        <div className="dashboard__icon">
          <MoreHorizRoundedIcon />
        </div>
        <div className="card__header">
          <span>Product Sold</span>
        </div>
        <div className="card__body">
          <span>20</span>
        </div>
      </div>
      <div className="dashboard__card red">
        <div className="dashboard__icon">
          <MoreHorizRoundedIcon />
        </div>
        <div className="card__header">
          <span>Customer</span>
        </div>
        <div className="card__body">
          <span>25</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
