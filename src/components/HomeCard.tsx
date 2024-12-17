import React from "react";
import { Link } from "react-router-dom";
import { HomeCardProps } from "../shared/job.interface";

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  link,
  btnName,
  btnColor = "bg-black",
  btnHoverColor = "bg-gray-700",
  cardColor = "bg-gray-100",
}) => {
  return (
    <div className={`${cardColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 py-4">{description}</p>
      <Link
        to={link}
        className={`${btnColor} inline-block text-white rounded-md px-4 py-2 hover:${btnHoverColor}`}
      >
        {btnName}
      </Link>
    </div>
  );
};

export default HomeCard;
