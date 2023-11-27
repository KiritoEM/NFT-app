interface Iaction {
  action: () => void;
}

const LoginBody: React.FC<Iaction> = ({ action }): JSX.Element => {
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
        <button className="btn" onClick={action}>
          <img src="/icons8-google.png" alt="" className="mx-2" /> Se connecter
          avec Google
        </button>
      </div>
    </div>
  );
};

export default LoginBody;
