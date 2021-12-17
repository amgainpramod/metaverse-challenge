import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    // overflow-y-scroll overflow-hidden --->>> add this to below class name
    <div className="bg-blue-500 bg-gradient-to-r from-pink-600 h-screen overflow-hidden ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>
    </div>
  );
}
