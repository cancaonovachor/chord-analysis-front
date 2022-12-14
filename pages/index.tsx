import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/common/layouts/layouts";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading as='h4' size='md'>
        Convert Your MusicXML Files
      </Heading>
    </Layout>
  );
};

export default Home;
