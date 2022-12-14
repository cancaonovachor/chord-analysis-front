import React from "react";
import { Flex, Box, IconButton, Spacer, Button, Heading, Container } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => (
  <Flex
    as="header"
    position="fixed"
    top={0}
    width="full"
    shadow="sm"
    py={4}
    px={8}
  >
    <Box>
      <Heading as='h3' size='lg'>
        Chord-Analysis
      </Heading>
    </Box>
    <Spacer />
    <Box>
      <Button disabled colorScheme="blue">
        保存済み
      </Button>
    </Box>
  </Flex>
);
