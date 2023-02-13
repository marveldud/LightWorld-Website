import React from "react";
import ChildCateg from "./ChildCateg";
import CategData from "./CategData";

const ParentCateg = () => {
  return (
    <>
      <div className="my-5 cate-heading">
        <h1 className="text-center">TOP CATEGORY</h1>
      </div>
      <div className="container-fluid mb-5 flex card-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CategData.map((val, index) => {
                return (
                  <ChildCateg
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentCateg;
