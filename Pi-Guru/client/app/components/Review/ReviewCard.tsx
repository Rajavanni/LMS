import React from "react";
import Image from "next/image";
import Ratings from "@/app/utils/Ratings"; // Assuming Ratings component
 
interface Review {
  avatar: string;
  name: string;
  profession: string;
  comment: string;
  // Add more properties if needed
}
 
const ReviewCard: React.FC<{ item: Review }> = ({ item }) => {
  return (
    <div className="review-card flex flex-col bg-white dark:bg-slate-500 dark:bg-opacity-[0.20] border border-[#00000028] dark:border-[#ffffff1d] rounded-lg p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Image
            src={item.avatar}
            alt=""
            width={50}
            height={50}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
 
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.name}
          </h5>
          <h6 className="text-sm text-gray-600 dark:text-gray-400">
            {item.profession}
          </h6>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        {/* Assuming Ratings component renders stars */}
        <Ratings rating={5} />
        {/* Optional: Add date or other details here if needed */}
      </div>
      <p className="mt-2 text-sm text-gray-800 dark:text-gray-200 line-clamp-3">
        {item.comment}
      </p>
    </div>
  );
};
 
export default ReviewCard;