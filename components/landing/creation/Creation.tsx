import CardCreate from "@/components/childrenComponents/CardCreate";
import dataHelper from "@/helper/dataHelper";
import Fade from "react-reveal/Fade";

const Creation = (): JSX.Element => {
  const { sectionCreate } = dataHelper();
  return (
    <section className="landing-creation">
      <div className="landing-creation__container">
        <Fade bottom cascade>
          <div className="app-content">
            <div className="section-header">
              <h3>
                Create and Sell <span>your NTFs</span>
              </h3>
            </div>

            <div className="section-content">
              <div className="row gx-5 gy-5 gy-md-2">
                {sectionCreate.map((item, index) => (
                  <CardCreate key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Creation;
