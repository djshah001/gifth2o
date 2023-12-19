import React from "react";
import Intro from "../Home/Intro";
import Difference from "../Home/Difference";

const Personalized = () => {
  const differences = [
    {
      name: "Tailored Branding",
      disc: "Your brand is distinctive, and so should be its representation. We offer personalized branding solutions that align seamlessly with your values. From logo placement to color schemes, every detail is customized to resonate with your identity and captivate your audience.",
    },
    {
      name: "Targeted Outreach",
      disc: "Gifth2O goes beyond generic messaging. Our personalized marketing strategy allows you to connect with a targeted audience that values sustainability and social responsibility. Your message reaches those who share your brand's vision, ensuring maximum impact and resonance.",
    },
    {
      name: "Exclusive Collaborations",
      disc: "Elevate your brand with exclusive collaborations and limited edition releases. Gifth2O provides a platform for your brand to engage in unique partnerships, creating a buzz that is personalized to your audience's tastes and preferences.",
    },
    {
      name: "Create Lasting Impressions",
      disc: "Gifth2O is not just a marketing platform; it's a canvas for your brand to create lasting impressions. Personalized marketing isn't just about promotion; it's about telling a story, creating emotions, and leaving an indelible mark in the hearts of your audience.",
    },
  ];
  return (
    <>
      <Intro
        colorDiv="pur"
        topPiece={true}
        bottomPiece={true}
        img="./images/personalized.jpg"
        title="Gifth2O – Personalized Marketing, Personalized Impact."
        discColor="text-ccc"
        disc1={
          "GIFT H2O offers a unique approach to personalized marketing, allowing brands to make a positive gesture by gifting water to their customers. This not only promotes goodwill but also establishes a memorable and health-conscious association between the brand and its audience."
        }
        disc2=" Working across diverse sectors, GIFT H2O tailors water gifting campaigns to suit the specific branding needs of sponsors. Whether it's a fitness-focused brand or a corporate entity, the ability to choose the audience ensures that the message resonates effectively."
        showbtn={false}
      />
      <Difference
        colorDiv="red"
        topPiece={false}
        bottomPiece={false}
        title="Unlock Your Brand's Unique Impact with Gifth2O"
        disc="At Gifth2O, we understand that your brand is more than just a logo – it's a story, a mission, and a connection waiting to be forged. Our personalized marketing approach goes beyond the conventional to create a bespoke experience for your brand, making every drop count in your unique narrative."
        differences={differences}
      />
    </>
  );
};

export default Personalized;
