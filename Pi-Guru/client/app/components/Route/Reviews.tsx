import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";
type Props = {};
 
export const reviews = [
  {
    name: "Srinivas Raju",
    avatar:
      "data:image/jpeg;base64,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",
    profession: "Chief Executive Officer | PI Square Technologies",
    comment:
      "At Tech Innovations Inc., we prioritize continuous learning and development for our team. Discovering Pi-Guru has significantly enhanced our training programs.",
  },
  {
    name: "Dasharatha M",
    avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    profession: "Head - iSET Academy | Pi Square Technologies",
    comment:
      "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch. ",
  },
 
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "computer systems engineering student | Zimbabwe",
    comment:
      "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch.",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:
      "I had the pleasure of exploring Pi-Guru, a website that provides an extensive range of courses on various tech-related topics.",
  },
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full stack web developer | Algeria",
    comment:
      "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details.",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full stack web developer | Canada",
    comment:
      "Join Pi-Guru! Pi-Guru focuses on practical applications rather than just teaching the theory behind programming languages or frameworks.",
  },
];
 
const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
  <div className="w-full 800px:flex items-center">
    <div className="800px:w-[50%] w-full">
      <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
      />
    </div>
    <div className="800px:w-[50%] w-full mb-10">  <h3 className={`${styles.title} 800px:!text-[40px]`}>
        Our Students Are Our Strength <br />
        See What They Say About Us
      </h3>
      <br />
      <p className={styles.label}>
        Our users rave about their experiences, highlighting the exceptional quality and impact of our offerings. From industry-leading CEOs to enthusiastic beginners, our community appreciates the depth and practicality of our courses.
      </p>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0">
    {reviews &&
      reviews.map((i, index) => (
        <ReviewCard item={i} key={index}>
          {/* Add flexbox styles to ReviewCard for precise content alignment */}
        </ReviewCard>
      ))}
  </div>
</div>
 
  );
};
 
export default Reviews;