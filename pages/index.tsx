import MetaHelper from "@/helper/metaHelper";
import LoginBody from "@/components/login/LoginBody";
import { useAuth } from "@/hooks/useAuth";

const loginPage = (): JSX.Element => {
  //import function for google signup with firebase
  const { setGooglePopup } = useAuth();

  return (
    <section className="login-page">
      {/* ===============Meta title page=============== */}
      <MetaHelper title="Connectez-vous avec votra compte google" />

      {/* ===============login body=============== */}
      <main>
        <LoginBody action={()=>{setGooglePopup()}} />
      </main>
    </section>
  );
};

export default loginPage;
