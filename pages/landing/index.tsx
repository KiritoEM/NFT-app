import Layout from "../Layout";
import MetaHelper from "@/helper/metaHelper";
import LandingHero from "@/components/landing/hero/LandingHero";
import Trending from "@/components/landing/community/Trending";

const landing = () => {
  return (
    <Layout>
      <MetaHelper title="Bienvenue sur NFT-app" />
      <section className="landing-page">
        <LandingHero />
        <Trending />
      </section>
    </Layout>
  );
};

export default landing;
