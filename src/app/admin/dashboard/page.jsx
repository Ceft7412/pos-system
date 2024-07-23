import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Cards from "@/components/Cards";
export default function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard">
        <div className="dashboard__flex">
          <h1 className="dashboard__title">Dashboard</h1>
          <div className="dashboard-layout__item">
            <Cards />
            <div className="dashboard__products">
              <div className="dashboard-product__item left">
                <div className="product-item__header">
                  <span>Recent Orders</span>
                </div>
                <div className="product-item__body">
                  <div className="item-body__th">
                    <span className="body-th__tc">Order ID</span>
                    <span className="body-th__tc">Product</span>
                    <span className="body-th__tc">Quantity</span>
                    <span className="body-th__tc">Employee</span>
                    <span className="body-th__tc">Date</span>
                  </div>
                  <div className="item-body__tb">
                    <span className="body-tb__tc">4105103</span>
                    <span className="body-tb__tc">Intel</span>
                    <span className="body-tb__tc">5</span>
                    <span className="body-tb__tc">Cedrick Caceres</span>
                    <span className="body-tb__tc">2024-05-23 07:23:02</span>
                  </div>
                  <div className="item-body__tb">
                    <span className="body-tb__tc">4105103</span>
                    <span className="body-tb__tc">Intel</span>
                    <span className="body-tb__tc">5</span>
                    <span className="body-tb__tc">Cedrick Caceres</span>
                    <span className="body-tb__tc">2024-05-23 07:23:02</span>
                  </div>
                  <div className="item-body__tb">
                    <span className="body-tb__tc">4105103</span>
                    <span className="body-tb__tc">Intel</span>
                    <span className="body-tb__tc">5</span>
                    <span className="body-tb__tc">Cedrick Caceres</span>
                    <span className="body-tb__tc">2024-05-23 07:23:02</span>
                  </div>
                  <div className="item-body__tb">
                    <span className="body-tb__tc">4105103</span>
                    <span className="body-tb__tc">Intel</span>
                    <span className="body-tb__tc">5</span>
                    <span className="body-tb__tc">Cedrick Caceres</span>
                    <span className="body-tb__tc">2024-05-23 07:23:02</span>
                  </div>
                  <div className="item-body__tb">
                    <span className="body-tb__tc">4105103</span>
                    <span className="body-tb__tc">Intel</span>
                    <span className="body-tb__tc">5</span>
                    <span className="body-tb__tc">Cedrick Caceres</span>
                    <span className="body-tb__tc">2024-05-23 07:23:02</span>
                  </div>
                </div>
              </div>
              <div className="dashboard-product__item right"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
