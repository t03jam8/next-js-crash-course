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
      <div className="container">{props.children}</div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: rows;
            max-width: 960px;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
};
