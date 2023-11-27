import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helper/dataHelper";

const LandingHero = (): JSX.Element => {
  const { landingHeroHelper } = dataHelper();
  const buttonArray = [
    { label: "Explore", class: "btn-explore" },
    { label: "Create", class: "btn-create" },
  ];

  const itemArray = [
    { label: "Collections", stat: "423K+" },
    { label: "Artists", stat: "220K+" },
    { label: "Community", stat: "20K+" },
  ];
  return (
    <section className="landing-hero">
      <div className="landing-hero__container">
        <div className="row gx-5">
          <div className="col-6">
            <div className="section-header">
              <div className="title">
                <h1>
                  Discover , collect and Sell <span>extraordinary NFTs</span>
                </h1>
              </div>
              <div className="subtitle mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  laborum nesciunt, quaerat sed omnis error eligendi
                  necessitatibus impedit autem nam quibusdam id perspiciatis
                </p>
              </div>
              <div className="button d-flex">
                {buttonArray.map((item, index) => (
                  <div key={index}>
                    <button className={`btn ${item.class}`}>
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
              <div className="statistics">
                {itemArray.map((item, index) => (
                  <div className="item" key={index}>
                    <h5>{item.stat}</h5>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-cover">
              <div className="row">
                {landingHeroHelper.map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="card">
                      <div className="card__cover">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card__content">
                        <h5>{item.header_title}</h5>
                        <p>{item.subtitle}</p>
                        <div className="card__items d-flex">
                          <div className="text">{item.ETH}</div>
                          <div className="heart">
                            <p>
                              {" "}
                              <FontAwesomeIcon icon={faHeart} /> 255
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
