import dataHelper from "@/helper/dataHelper";
import React from "react";

const FooterSecondary = (): JSX.Element => {
  const { logo, footerData } = dataHelper();

  return (
    <section className="footer-secondary">
      <div className="row gx-5 gy-5 gy-lg-2">
        <div className="col-md-6 col-lg-4">
          <div className="section-appInfo">
            <div className="logo">
              <img src={logo.img} alt="" />
              <h5>{logo.logo_title}</h5>
            </div>
            <div className="text">
              <p>
                the leading NFT Marketplace on EthereumHome to the next
                generation of digital creators.Discover the best NFT
                collections.
              </p>
            </div>
            <div className="icons">
              {footerData.icons.map((item, index) => (
                <div key={index}>
                  <img src={item.src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="section-marketPlace">
            <h4>Marketplace</h4>
            <div className="items">
              {footerData.marketPlace.map((item, index) => (
                <p>{item.label}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="section-links">
            <h4>Links</h4>
            <div className="items">
              {footerData.marketPlace.map((item, index) => (
                <p>{item.label}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSecondary;
