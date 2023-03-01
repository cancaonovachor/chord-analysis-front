import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/common/layouts/layouts";
import styles from "../styles/Home.module.css";
import Form from "./components/form";
import { useState } from "react";

const Home: NextPage = () => {
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState<File>();
  const states = { filename, setFileName, file, setFile };
  return (
    <Layout>
      <Box textAlign={"center"}>
        <Box h="60px" />
        <Box>
          <Heading as="h2" my="10px">
            Chord-Analysis（β版）
          </Heading>
        </Box>
        <Divider borderColor={"gray.300"} />
        <Box h="20px" />
        <Text fontSize="md">
          MusicXMLファイル楽譜から、コード情報を推定し、自動的に書き込みます。
        </Text>
        <Box h="20px" />
        <Form {...states} />
      </Box>
    </Layout>
  );
};

export default Home;
