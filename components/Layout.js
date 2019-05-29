import Head from "next/head";
import { Navbar } from "./Navbar";

export const Layout = props => {
  return (
    <div>
      <Head>
        <title>BitzPrize</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/flatly/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};
