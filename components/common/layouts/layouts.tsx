import React, { ReactElement } from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import { Header } from "../header/header";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <Flex bg="gray.100" h="100vh">
    <Container maxW="container.lg">
      {children}
      </Container>
    </Flex>
    
  </>
  // {/* <Footer /> */}
);
