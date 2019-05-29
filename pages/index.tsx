import React from "react";
import Fetch from "isomorphic-unfetch";
import { Layout } from "../components/layout";
import { Prices } from "../components/Prices";

interface StatelessPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Index: StatelessPage<{ bpi: any }> = ({ bpi }) => {
  console.log("bpi", bpi.bpi);
  return (
    <Layout active="home">
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current bitcoin rate</p>
        <Prices bpi={bpi.bpi} />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return {
    bpi: data
  };
};

export default Index;
