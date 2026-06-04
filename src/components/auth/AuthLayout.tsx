import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import ColorModeSwitch from "../layout/ColorModeSwitch";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const AuthLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to}>
    <Text
      as="span"
      color="primary"
      fontWeight="bold"
      _hover={{ textDecoration: "underline" }}
    >
      {children}
    </Text>
  </Link>
);

const AuthLayout = ({ title, subtitle, children, footer }: AuthLayoutProps) => {
  return (
    <Flex
      minH="100vh"
      bg="pageBg"
      align="center"
      justify="center"
      px={6}
      py={10}
      position="relative"
    >
      <Box
        position="absolute"
        top={6}
        right={6}
        bg="cardBg"
        px={4}
        py={2}
        borderRadius="md"
      >
        <ColorModeSwitch />
      </Box>

      <Box
        bg="cardBg"
        w="100%"
        maxW="440px"
        p={{ base: 8, md: 10 }}
        borderRadius="lg"
        boxShadow="0 4px 24px rgba(0, 1, 18, 0.08)"
      >
        <VStack align="stretch" gap={8}>
          <HStack justify="center" gap={3}>
            <Image src={logo} alt="" />
            <Heading size="xl" color="textMain">
              kanban
            </Heading>
          </HStack>

          <VStack gap={2} textAlign="center">
            <Heading size="lg" color="textMain">
              {title}
            </Heading>
            <Text fontSize="sm" color="textSubtle">
              {subtitle}
            </Text>
          </VStack>

          {children}

          {footer && (
            <Text fontSize="sm" color="textSubtle" textAlign="center">
              {footer}
            </Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
};

export default AuthLayout;
