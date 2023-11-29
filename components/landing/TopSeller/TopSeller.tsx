import SellerCard from "@/components/childrenComponents/SellerCard";
import dataHelper from "@/helper/dataHelper";
import Fade from "react-reveal/Fade";

const TopSeller = (): JSX.Element => {
  const { sellerInfo } = dataHelper();
  return (
    <section className="landing-topseller">
      <Fade bottom cascade>
        <div className="landing-topseller__container">
          <div className="section-header">
            <h3>Top seller</h3>
          </div>
          <div className="section-content">
            <div className="row gx-5 gx-md-2 gy-4 gy-lg-2">
              {sellerInfo.map((item, index) => (
                <div className="col-5 col-md-3 col-lg-2" key={index}>
                  <SellerCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default TopSeller;
