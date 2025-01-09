import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8  my-20 bg-fixed">
      <SectionTitle subHeading="check it out" heading={"Featured Item"} />
      <div className="md:flex justify-center items-center bg-slate-700 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-10">
          <p>Aug, 20, 2029</p>
          <p className="uppercase"> Where can I get some</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            eligendi veritatis culpa impedit voluptate dolores sapiente
            praesentium dolorum dolor reiciendis sint, molestias debitis beatae
            a quos magnam deserunt reprehenderit nesciunt tempore quibusdam
            autem saepe tempora? Explicabo similique minus velit cupiditate
            atque architecto quo, quisquam officiis, eos accusantium est. Vitae,
            sit!
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
