import React from "react";
import { styles } from "../styles/style";
 
type Props = {};
 
const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Privacy Policy of Pi Square Technologies Learning Management System
          (LMS)
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Privacy Policy of Pi Square Technologies Learning Management System
            (LMS) Welcome to the Pi Square Technologies Learning Management
            System! By accessing and using our LMS, you agree to the terms
            outlined in this Privacy Policy, which is intended to protect and
            respect your privacy.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            1. Information Collection, Use, and Sharing We, Pi Square
            Technologies, are the sole owners of the information collected on
            this site. We only have access to/collect information that you
            voluntarily give us via registration or other direct contact from
            you. We will not sell or rent this information to anyone. We will
            use your information to respond to you regarding the reason you
            contacted us. We will not share your information with any third
            party outside of our organization, other than as necessary to
            fulfill your request, e.g., to ship an order.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            2. Your Access to and Control Over Information You may opt out of
            any future contacts from us at any time. You can do the following at
            any time by contacting us via the email address or phone number
            provided below: See what data we have about you, if any.
            Change/correct any data we have about you. Have us delete any data
            we have about you. Express any concern you have about our use of
            your data.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            3. Security We take precautions to protect your information. When
            you submit sensitive information via the website, your information
            is protected both online and offline. Wherever we collect sensitive
            information (such as credit card data), that information is
            encrypted and transmitted to us in a secure way.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            4. Cookies We use cookies on this site. A cookie is a piece of data
            stored on a site visitor&quots hard drive to help us improve your
            access to our site and identify repeat visitors. Cookies can also
            enable us to track and target the interests of our users to enhance
            the experience on our site. Usage of a cookie is in no way linked to
            any personally identifiable information on our site.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            5. Links This LMS may contain links to other sites. Please be aware
            that we are not responsible for the content or privacy practices of
            such other sites. We encourage our users to be aware when they leave
            our site and to read the privacy statements of any other site that
            collects personally identifiable information.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            6. Changes to This Privacy Policy We may update this privacy policy
            from time to time. We will notify you of any changes by posting the
            new privacy policy on this page. You are advised to review this
            privacy policy periodically for any changes.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            7. Contact Us If you feel that we are not abiding by this privacy
            policy, or if you have any questions about the policies described
            here, you should contact us immediately via telephone at +91
            8885534888 or via email at contact@pisquaretech.com.
          </p>
          <br />
        </ul>
      </div>
    </div>
  );
};
 
export default Policy;