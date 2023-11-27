const LandingHero = (): JSX.Element => {
  const buttonArray = [
    { label: "Explore", class: "btn-explore" },
    { label: "Create", class: "btn-create" },
  ];
  return (
    <section className="landing-hero">
      <div className="landing-hero__container">
        <div className="row">
          <div className="col-6">
            <div className="section-introduction">
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
                    <button className={`btn ${item.class}`}>{item.label}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-pictures"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
