import Head from "next/head";
import Image from "next/image";
import About from "../components/data/About";
import Bgimage from "../components/data/Bg-image";
import Recent from "../components/data/Recent";
import Register from "../components/data/Register";

export default function Home() {
  return (
    <div id="home" className="">
      <Head>
        <title>Learn Quickly</title>
        <meta name="description" content="learn anything in tech from us" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Bgimage />
      <About />
      <Register />
      <Recent />
    </div>
  );
}
