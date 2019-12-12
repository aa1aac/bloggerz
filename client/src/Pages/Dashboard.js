import React from "react";

import AddBtn from "../components/layout/AddBtn";
import AddBlogModal from "../components/layout/AddBlogModal";
import EditBlogModal from "../components/layout/EditBlogModal";

export const Dashboard = () => {
  return (
    <div className="container">
      <h5 className="center-align green-text text-accent-3">Dashboard</h5>
      <AddBtn />
      <AddBlogModal />
      <EditBlogModal />
    </div>
  );
};

export default Dashboard;
