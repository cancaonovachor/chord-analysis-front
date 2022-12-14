import React, { ReactElement } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../header/header";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Flex bg="gray.100" w="100vw" h="100vh">
    <Box>
    <Header />
    </Box>
    <Flex mx="auto">{children}</Flex>
  </Flex>

  // {/* <Footer /> */}
);
