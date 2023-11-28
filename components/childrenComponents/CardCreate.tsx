interface IcardProps {
  img: string;
  title: string;
  subtitle: string;
}

const CardCreate: React.FC<IcardProps> = ({
  img,
  title,
  subtitle,
}): JSX.Element => {
  return (
    <div className="col-4">
      <article className="card-create">
        <div className="card-create__img">
          <img src={img} alt="" />
        </div>
        <div className="card-create__title">
          <h5>{title}</h5>
        </div>

        <div className="card-create__subtitle">
          <p>{subtitle}</p>
        </div>
      </article>
    </div>
  );
};

export default CardCreate;
