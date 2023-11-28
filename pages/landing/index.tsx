import Layout from "../Layout";
import MetaHelper from "@/helper/metaHelper";
import LandingHero from "@/components/landing/hero/LandingHero";
import Trending from "@/components/landing/community/Trending";
import TopCollection from "@/components/landing/top/TopCollection";
import Creation from "@/components/landing/creation/Creation";
import TopSeller from "@/components/landing/TopSeller/TopSeller";
import LandingFooter from "@/components/landing/footer/LandingFooter";

const landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaHelper title="Welcome to NFT-app" />
      <section className="landing-page">
        <main id="landing-body">
          <LandingHero />
          <Trending />
          <TopCollection />
          <Creation />
          <TopSeller />
        </main>
        <footer id="landing-footer">
          <LandingFooter />
        </footer>
      </section>
    </Layout>
  );
};

export default landing;
