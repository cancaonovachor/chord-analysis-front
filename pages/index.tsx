import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/common/layouts/layouts";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
};

export default Home;
