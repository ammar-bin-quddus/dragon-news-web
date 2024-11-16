import React from "react";
import Header from "../components/Header";
import RightNav from "../components/RightNav";
import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const NewsDetails = () => {
  const detailsData = useLoaderData();
  const detailsArray = detailsData.data[0];
  //console.log(detailsArray)

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <p className="font-bold text-[#403F3F] mb-4">Dragon News</p>
          {/* details card */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={detailsArray?.image_url}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title font-extrabold text-[#403F3F]">{detailsArray?.title}</h2>
              <p>{detailsArray?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${detailsArray.category_id}`} className="btn btn-error text-white"><IoArrowBack /> All News In This Category</Link>
              </div>
            </div>
          </div>
          {/* details card end */}
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
