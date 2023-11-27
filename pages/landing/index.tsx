import Layout from "../Layout";
import MetaHelper from "@/helper/metaHelper";

const landing = () => {
  return (
    <Layout>
        <MetaHelper title="Bienvenue sur NFT-app"/>
      <section className="landing-page"></section>
    </Layout>
  );
};

export default landing;
