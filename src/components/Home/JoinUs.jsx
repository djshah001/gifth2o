import React from "react";

const JoinUs = ({ topPiece, bottomPiece }) => {
  const differences = [
    {
      name: "Sustainable Branding:",
      disc: "Showcase your commitment to environmental responsibility through our eco-friendly water bottles, contributing to a positive brand image.",
    },
    {
      name: "Community Engagement:",
      disc: "Connect with communities on a personal level.Your brand becomes a part of local initiatives, fostering a sense of community and social responsibility.",
    },
    {
      name: "Unique Marketing Opportunity:",
      disc: "Gifth2O offers a fresh and unique way to market your brand, creating a memorable impact that traditional advertising may not achieve.",
    },
    {
      name: "Positive Brand Association:",
      disc: "Gifth2O offers a fresh and unique way to market your brand, creating a memorable impact that traditional advertising may not achieve.",
    },
    {
      name: "Targeted Audience Engagement:",
      disc: "Gifth2O's audience appreciates brands that go beyond profit, creating a meaningful connection with your target market.",
    },
    {
      name: "Gift of Water, Gift of Brand Recall:",
      disc: "Every time an individual uses the gifted water bottle, they are reminded of your brand, creating lasting impressions and increased brand recall.",
    },
    {
      name: "Social Media Exposure:",
      disc: "Gifth2O encourages users to share their experiences online, providing your brand with additional exposure through user-generated content and positive testimonials.",
    },
    {
      name: "Boost Employee Morale:",
      disc: "Your team becomes ambassadors for a brand that not only values business success but also contributes to meaningful social initiatives.",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="intro red-div row">
          {bottomPiece && (
            <>
              <div className="piece bottom-piece-1"></div>
              <div className="piece bottom-piece-2"></div>
            </>
          )}
          {topPiece && (
            <>
              <div className="piece top-piece-1"></div>
              <div className="piece top-piece-2"></div>
            </>
          )}
          <div className="text-div">
            <h2
              // variants={variants}
              initial="big"
              whileInView="small"
              className="text-center"
            >
              Join Us - Be a Force for Change
            </h2>
            <p className="text-white text-center">
              Are you ready to transform your brand into a symbol of positive
              change? Gifth2O invites you to join us on a journey that goes
              beyond conventional branding. We are on a mission to redefine the
              way brands connect with communities, leaving a lasting impact on
              both consumers and the environment.
            </p>

            {/* <p className="text-lg-yel">
              Discover the Impact of Branding with Purpose at GiftH2O!
            </p> */}
            <h2 className="text-center">Why Join Gifth2O ?</h2>
            <div className="diff row p-3">
              {differences.map((diff, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="inside p-3 col-lg-6 col-md-12">
                      {/* <h1 className="">{i+1}</h1> */}
                      <h1>
                        {i + 1}.{diff.name}
                      </h1>
                      <p className="text-ccc">{diff.disc}</p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
