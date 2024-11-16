import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNewsCard = ({ singleNews }) => {
  const { title, _id, author, rating, total_view, details, thumbnail_url } =
    singleNews;

  return (
    <div className="border border-gray-300 mt-4 rounded-lg shadow-lg max-w-full mx-auto mb-6">
      {/* Header */}
      <div className="bg-[#F3F3F3] p-4 rounded-md flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="space-x-3 text-2xl">
          <button className="text-gray-400 hover:text-gray-600">
            <CiBookmark />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <FaShareAlt />
          </button>
        </div>
      </div>
      <div className="px-4 pb-4">
        {/* Title */}
        <h2 className="font-bold text-lg mb-2">{title}</h2>

        {/* Image */}
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-96 object-cover rounded-lg mb-3"
        />

        {/* Details */}
        <p className="text-gray-600 text-sm mb-3">
          {details.slice(0, 150)}...
          <Link to={`/news/${_id}`} className="text-blue-500"> Read More</Link>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-orange-500">
            {[...Array(Math.round(rating.number))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600 text-sm">{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
