import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "../components/SingleNewsCard";

const CategoryNews = () => {
  const newsData = useLoaderData();
  const {data} = newsData
  //console.log(data);

  return (
    <div>
      <p className="font-bold text-[#403F3F]">
        Dragon News Home({newsData.data.length})
      </p>
      <div>
        {data.map((singleNews) => (
          <SingleNewsCard singleNews={singleNews} key={singleNews._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
