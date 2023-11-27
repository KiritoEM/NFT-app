const LoginBody = () : JSX.Element => {
  return (
    <div className="login-page__container">
      <div className="img-head">
        <img src="/img_head.png" alt="" />
      </div>
      <div className="title">
        <h4>
          Se connecter à <span>NFT-app</span>
        </h4>
      </div>

      <div className="google-button text-center mt-5">
        <form action="">
          <button className="btn" type="submit">
            <img src="/icons8-google.png" alt="" className="mx-2" /> Se
            connecter avec Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginBody;
