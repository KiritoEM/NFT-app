import Layout from "../Layout";
import MetaHelper from "@/helper/metaHelper";
import LandingHero from "@/components/landing/hero/LandingHero";
import Trending from "@/components/landing/community/Trending";
import TopCollection from "@/components/landing/top/TopCollection";
import Creation from "@/components/landing/creation/Creation";
import TopSeller from "@/components/landing/TopSeller/TopSeller";

const landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaHelper title="Welcome to NFT-app" />
      <section className="landing-page">
        <LandingHero />
        <Trending />
        <TopCollection />
        <Creation />
        <TopSeller />
      </section>
    </Layout>
  );
};

export default landing;
