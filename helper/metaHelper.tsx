import Head from "next/head";
import React from "react";

interface ItitleProps {
  title: string;
}

const MetaHelper: React.FC<ItitleProps> = ({ title }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaHelper;
