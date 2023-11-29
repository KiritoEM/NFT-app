import { Fragment } from "react";

interface Iaction {
  action: boolean;
}

const Overlay: React.FC<Iaction> = ({ action }): JSX.Element => {
  return <Fragment>{action && <div className="overlay"></div>}</Fragment>;
};

export default Overlay;
