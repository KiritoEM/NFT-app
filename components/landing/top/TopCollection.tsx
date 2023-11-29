import dataHelper from "@/helper/dataHelper";
import SwiperWithoutSwip from "@/components/childrenComponents/SwiperWithoutSwip";
import Flip from "react-reveal/Flip";

interface IbuttonNavigation {
  value: string;
  active?: string;
}

const TopCollection = (): JSX.Element => {
  const { TopCollection } = dataHelper();

  const buttonNavigation: IbuttonNavigation[] = [
    { value: "Art", active: "active" },
    { value: "Comestibles" },
    { value: "Metaverse" },
    { value: "Virtual Words" },
    { value: "Sports" },
  ];

  return (
    <section className="landing-top">
      <div className="landing-top__container">
        <Flip bottom>
          <div className="section-header">
            <h3>
              Top <span>Collection</span>
            </h3>

            <div className="navigation">
              {buttonNavigation.map((item, index) => (
                <div key={index}>
                  <button className="btn" id={item.active}>
                    {item.value}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Flip>

        <Flip bottom>
          <div className="section-content">
            <div className="row gx-4 gy-4">
              {TopCollection.map((item, index) => (
                <div className="col-md-6 col-lg-3">
                  <SwiperWithoutSwip {...item} />
                </div>
              ))}
            </div>

            <div className="btn-more">
              <button className="btn">See more</button>
            </div>
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default TopCollection;
