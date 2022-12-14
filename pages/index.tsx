import { Box, Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/common/layouts/layouts";
import styles from "../styles/Home.module.css";
import Form from "./components/form";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Heading as='h4' size='md' my="10px">
          Convert Your MusicXML Files
        </Heading>
      </Box>
      <Box>
        <Form />
      </Box>
    </Layout>
  );
};

export default Home;
