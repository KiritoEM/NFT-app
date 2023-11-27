import MetaHelper from "@/helper/metaHelper";
import LoginBody from "@/components/LoginBody";

const loginPage = (): JSX.Element => {
  return (
    <section className="login-page">
      {/* ===============Meta title page=============== */}
      <MetaHelper title="Connectez-vous avec votra compte google" />

      {/* ===============login body=============== */}
      <main>
        <LoginBody />
      </main>
    </section>
  );
};

export default loginPage;
