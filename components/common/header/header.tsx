import React from "react";
import NextLink from "next/link";
import { Flex, Box, IconButton, Spacer, Button, Heading, Container, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { ChevronLeftIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
    // 追加 カラーモードを切り替える
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        /* 変更　ライトモードでgray.100,ダークモードでgray.900とする。 */
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <NextLink href="/" passHref>
                        {/* 変更 ライトモードでgray.600、ダークモードでwhiteとする */}
                        <Heading as='h1' fontSize="2xl" cursor="pointer" color={useColorModeValue('gray.600', 'white')}>
                            Chord-Analysis
                        </Heading>
                    </NextLink>
                    {/* 追加 切り替えアイコン */}
                    <Button size='lg' onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
}
