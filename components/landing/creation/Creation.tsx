import CardCreate from "@/components/childrenComponents/CardCreate";

const Creation = (): JSX.Element => {
  return (
    <section className="landing-creation">
      <div className="landing-creation__container">
        <div className="app-content">
          <div className="section-header">
            <h3>Create and Sell <span>your NTFs</span></h3>
          </div>

          <div className="section-content">
            <div className="row gx-5">
                <CardCreate />
                <CardCreate />
                <CardCreate />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creation;
