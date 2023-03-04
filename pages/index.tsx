import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/common/layouts/layouts";
import styles from "../styles/Home.module.css";
import FileUploadForm from "../components/common/fileUploadForm";
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
          MusicXMLファイル楽譜に、コード情報を自動で書き込みます。
        </Text>
        <Box h="20px" />
        <FileUploadForm {...states} />
      </Box>
    </Layout>
  );
};

export default Home;
