import React from "react";
import { Flex, Box, IconButton, Spacer, Button } from "@chakra-ui/react";
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
      <IconButton
        aria-label="back"
        color="black"
        rounded="full"
        icon={<ChevronLeftIcon />}
      />
    </Box>
    <Spacer />
    <Box>
      <Button disabled colorScheme="blue">
        保存済み
      </Button>
    </Box>
  </Flex>
);
