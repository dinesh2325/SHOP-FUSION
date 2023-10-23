import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const CreateCatogory = () => {
  return (
    <Layout title={"Dashboard - Create-Products"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>CreateProduct</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCatogory;
