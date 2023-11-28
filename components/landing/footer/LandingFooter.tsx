import FooterPrimary from "./FooterPrimary";
import FooterSecondary from "./FooterSecondary";

const LandingFooter = (): JSX.Element => {
  return (
    <section className="landing-footer">
      <div className="landing-footer__container">
        <FooterPrimary />
        <div className="line-separation"></div>
        <FooterSecondary />
      </div>
    </section>
  );
};

export default LandingFooter;
