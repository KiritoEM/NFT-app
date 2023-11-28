import SellerCard from "@/components/childrenComponents/SellerCard";
import dataHelper from "@/helper/dataHelper";

const TopSeller = (): JSX.Element => {
  const { sellerInfo } = dataHelper();
  return (
    <section className="landing-topseller">
      <div className="landing-topseller__container">
        <div className="section-header">
          <h3>Top seller</h3>
        </div>
        <div className="section-content">
          <div className="row">
            {sellerInfo.map((item, index) => (
              <div className="col-2" key={index}>
                <SellerCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSeller;
