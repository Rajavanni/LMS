import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Pi-Guru</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          About Pi Square Technologies Learning Management System Welcome to Pi
          Square Technologies Learning Management System (LMS), your next step
          towards mastering technology and programming skills in an innovative
          and supportive online environment. At Pi Square Technologies, we
          understand that the world of technology is rapidly evolving and the
          demand for skilled programmers and IT professionals is greater than
          ever. This is why our LMS is dedicated to providing not just
          education, but a pathway to enhance career prospects and personal
          growth in the IT industry.
          <br />
          <br />
          Our Mission Our mission is to make high-quality tech education
          accessible to everyone, everywhere. We believe in removing barriers
          that learners face—not just in terms of cost, but also in accessing
          cutting-edge curriculum and expert guidance.
          <br />
          <br />
          Our Founder Founded by a visionary leader passionate about education
          and technology, Pi Square Technologies was established to foster a
          learning environment that empowers students. With years of industry
          experience, our founder has shaped the LMS to cater to both beginners
          and those looking to advance their skills.
          <br />
          <br />
          What We Offer Our platform hosts a wide range of courses covering
          everything from basic programming languages to advanced software
          development techniques. Each course is designed with the learner in
          mind, structured to provide both theoretical knowledge and practical
          experience.
          <br />
          <br />
          Community and Support More than just a learning platform, Pi Square
          Technologies is a community. When you join us, you&aposre not just
          signing up for courses—you&aposre becoming part of a supportive
          network of professionals and peers who are here to guide and inspire
          you. Our interactive forums and live support ensure that you never
          feel alone on your educational journey.
          <br />
          <br />
          Affordable Learning We are committed to keeping our courses affordable
          because we believe financial constraints should not prevent anyone
          from learning and growing. Invest in your future with us, where
          education meets affordability.
          <br />
          <br />
          Ready to Advance Your Career? Join Pi Square Technologies LMS today
          and be part of a community that is enthusiastic about technology and
          committed to your success. Let&aposs navigate the future of tech
          together, one lesson at a time.
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
