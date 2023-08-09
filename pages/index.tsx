import type { NextPage } from "next";
import Head from "next/head";
import { useLayoutEffect } from "react";
import Calendar from "../components/Calendar";
import Date from "../components/Date";
import Text from "../components/Text";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const lang = (router.query.lang || "pl") as "pl" | "en";

  useLayoutEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.style.opacity = "1";
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <style>
          {`body {
            opacity: 0;
          }`}
        </style>
        <title>💒 💍 💮</title>
        <meta
          name="description"
          property="og:description"
          content="Save the date kochani!"
        />
        <link rel="icon" href="./images/favicon.ico" />
        <meta property="og:title" content="💒 💍 💮" />
        <meta property="og:image" content="./images/og.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        <div className="row">
          <div className="col">
            <Date lang={lang} />
          </div>
          <div className="col">
            <Text lang={lang} />
            <Calendar lang={lang} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
