import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="intro pur-div row">
          {/* <div className="left-piece"></div>
          <div className="right-piece"></div> */}
          <div className="text-div">
            <h2>Get in Touch</h2>
            <p className="text-ccc">
              At Gifth2O, we value communication as much as sustainability.
              Whether you have questions, feedback, or you're eager to join our
              movement, we're here to connect with you. Reach out through the
              channels below, and let's make waves together!
            </p>
            <div className="row">
              <div className="contact-info col-md-6">
                <div className="d-grid align-items-center">
                  <i class="fa-brands fa-whatsapp"></i>
                  <div className="contact">
                    <h4>chat on WhatsApp</h4>
                    <a>9166581457</a>
                  </div>
                </div>
              </div>
              <div className="contact-info col-md-6">
                <div className="d-grid align-items-center">
                  <i class="fa-regular fa-envelope"></i>
                  <div className="contact">
                    <h4>Email Us</h4>
                    <a>9166581457</a>
                  </div>
                </div>
              </div>
              <div className="contact-info col-md-6">
                <div className="d-grid align-items-center">
                  <i class="fa-solid fa-phone"></i>
                  <div className="contact">
                    <h4>Give a call</h4>
                    <a>9166581457</a>
                  </div>
                </div>
              </div>
              <div className="contact-info col-md-6">
                <div className="d-grid align-items-center">
                  <i class="fa-brands fa-whatsapp"></i>
                  <div className="contact">
                    <h4>chat on WhatsApp</h4>
                    <a>9166581457</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
