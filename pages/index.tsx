import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Techonologies from "../components/technologies";
import TopCover from "../components/topcover";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>facuariasla</title>
        <meta name="description" content="facuariasla portfolio" />
        <meta name="theme-color" content="#2e2e2e"/>
        <link rel="icon" href="/assets/afwhitewbg.png" />
        <meta name="keywords" content="portfolio, react, frontend, framer-motion, sass, web development"/>
        <meta name="language" content="EN"/>
        <meta name="author" content="Facundo Arias, facundolautaroarias@hotmail.com"/>
        {/* <meta name="url" content="http://www.websiteaddrress.com"/> */}
        {/* <meta name="identifier-URL" content="http://www.websiteaddress.com"/> */}

      </Head>

      <div>
        <TopCover/>
        <About/>
        <Techonologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
