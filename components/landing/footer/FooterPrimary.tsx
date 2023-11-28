const FooterPrimary = (): JSX.Element => {
  return (
    <section className="footer-primary">
      <div className="title">
        <h3>GetMore Updates</h3>
      </div>

      <div className="subtitle mt-4">
        <p>
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks{" "}
        </p>
      </div>

      <div className="input mt-4">
        <div className="emailInput">
          <input
            type="text"
            name=""
            id="sent-email"
            placeholder="Your email ..."
          />
        </div>
        <div className="btn-send">
          <button className="btn">Send</button>
        </div>
      </div>
    </section>
  );
};

export default FooterPrimary;
