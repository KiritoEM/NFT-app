import CardCreate from "@/components/childrenComponents/CardCreate";
import dataHelper from "@/helper/dataHelper";

const Creation = (): JSX.Element => {
  const { sectionCreate } = dataHelper();
  return (
    <section className="landing-creation">
      <div className="landing-creation__container">
        <div className="app-content">
          <div className="section-header">
            <h3>
              Create and Sell <span>your NTFs</span>
            </h3>
          </div>

          <div className="section-content">
            <div className="row gx-5">
              {sectionCreate.map((item, index) => (
                <CardCreate key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creation;
