import Layout from "../Layout";
import MetaHelper from "@/helper/metaHelper";
import LandingHero from "@/components/landing/hero/LandingHero";

const landing = () => {
  return (
    <Layout>
      <MetaHelper title="Bienvenue sur NFT-app" />
      <section className="landing-page">
        <LandingHero />
      </section>
    </Layout>
  );
};

export default landing;
