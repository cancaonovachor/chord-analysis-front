import React from "react";
import NextLink from "next/link";
import {
  Flex,
  Box,
  IconButton,
  Spacer,
  Button,
  Heading,
  Container,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
  // 追加 カラーモードを切り替える
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={"gray.300"} px={4}>
      <Container maxW="container.lg">
        <Flex as="header" py="4" alignItems="center">
          <NextLink href="https://cancaonovachor.com" passHref>
            <Heading as="h1" fontSize="2xl" cursor="pointer" color={"gray.600"}>
              CancaoNova
            </Heading>
          </NextLink>
          <Box w="50px" />
          {/* <NextLink href="https://cancaonovachor.com" passHref>
            <Text fontSize="sm" cursor="pointer" color={"gray.600"}>
              使用方法
            </Text>
          </NextLink> */}
          <Text fontSize="sm" color={"gray.600"}>
            使用方法（作成中）
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
