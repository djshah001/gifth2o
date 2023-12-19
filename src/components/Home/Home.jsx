import React from "react";
import "./Home.css";
import MainPage from "./MainPage";
import Intro from "./Intro";
import Services from "./Services";
import Partnership from "./Partnership";
import Qoute from "./Qoute";
import Difference from "./Difference";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";

function Home() {
  const differences = [
    {
      name: "Free Water Bottles with a Purpose:",
      disc: "GiftH2O goes beyond traditional marketing. We provide free, premium water bottles for your brand, turning every sip into a statement of corporate responsibility and social impact.",
    },
    {
      name: "Brand Visibility with Heart:",
      disc: "Your company logo on our water bottles not only increases brand visibility but also showcases your commitment to social causes. It's not just marketing; it's a brand statement with heart.",
    },
    {
      name: "Community Engagement:",
      disc: "Join us in creating meaningful connections with communities. Your branded water bottles become ambassadors of goodwill, sparking conversations and building a positive brand image.",
    },
    {
      name: "Tailored Branding Packages:",
      disc: "GiftH2O offers flexible sponsorship packages, allowing you to tailor your branding strategy. Choose the number of bottles, distribution locations, and the style that best aligns with your marketing objectives.",
    },
    {
      name: "Social Media Amplification",
      disc: "Benefit from our active social media presence. We share the story of your brand's generosity, creating a buzz that extends far beyond the initial distribution. It's marketing that makes a lasting impression.",
    },
    {
      name: "Quantifiable Impact:",
      disc: "Track the impact of your sponsorship. From the number of bottles distributed to the communities reached, we provide transparent metrics to showcase the tangible difference your brand is making.",
    },
    {
      name: "Brand Recognition in Every Hand:",
      disc: "With GiftH2O, your brand goes wherever the water bottles go. Whether at events, offices, or public spaces, your logo becomes a constant presence, fostering brand recognition in every hand that holds our bottles.",
    },
    {
      name: "Maximize Your Marketing Budget:",
      disc: "GiftH2O offers a cost-effective way to maximize your marketing budget. Reach a wide audience while contributing to a meaningful cause, creating a win-win situation for your brand.",
    },
  ];
  return (
    <>
      <MainPage />
      <Qoute />
      <Intro
        colorDiv="none"
        topPiece={false}
        bottomPiece={true}
        img="./images/about-image.jpg"
        title="About Us"
        disc1={
          "Welcome to GiftH2O, where we turn the simple act of        providing water into a powerful marketing tool. Join us in our mission to provide free, clean water to those in need, while giving companies the opportunity to make a lasting impact through branded water bottles."
        }
        disc2="Understand the seamless process of getting your brand's logo on our
        premium water bottles. From choosing the bottle style to final
        delivery, we make it easy for you to make a meaningful impact."
        showbtn={true}
      />
      <Partnership
        colorDiv="dark"
        topPiece={false}
        bottomPiece={true}
        img="./images/partnership.webp"
        title="Power of Partnership"
        disc1="At GiftH2O, we believe in the transformative power of water and its
        ability to create positive change. Our mission is simple yet
        profound: to provide free water to those in need while
        revolutionizing the way brands connect with communities."
        disc2="We've redefined the concept of corporate social responsibility by
        offering brands the opportunity to make a meaningful impact. Through
        personalized and event-based marketing, we empower brands to connect
        with their audience while contributing to a cause that truly
        matters."
        showbtn={true}
      />
      <Difference
        colorDiv="pur"
        topPiece={false}
        bottomPiece={true}
        title="How We Make a Difference?"
        disc="We focuses on personalized marketing strategies, tailoring water
        distribution efforts to match the unique identity of each brand.
        Whether it's through events or personalized campaigns, we ensure
        that every drop of water carries the message of positive change."
        differences={differences}
      />
      <JoinUs topPiece={false} bottomPiece={true} />
      <Services topPiece={false} bottomPiece={true} />
      <ContactUs topPiece={false} bottomPiece={false} />
    </>
  );
}

export default Home;
