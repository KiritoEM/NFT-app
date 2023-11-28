import dataHelper from "@/helper/dataHelper";
import SwiperWithoutSwip from "@/components/childrenComponents/SwiperWithoutSwip";

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
    { value: "Music" },
  ];

  return (
    <section className="landing-top">
      <div className="landing-top__container">
        <div className="section-header">
          <h2>
            Top <span>Collection</span>
          </h2>

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

        <div className="section-content">
          <div className="row gx-4 gy-4">
            {TopCollection.map((item, index) => (
              <div className="col-3">
                <SwiperWithoutSwip {...item} />
              </div>
            ))}
          </div>

          <div className="btn-more">
            <button className="btn">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
