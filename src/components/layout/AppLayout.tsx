import { Box, Flex } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";
import { LuEye } from "react-icons/lu";
import { BoardHeader } from "./BoardHeader";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Flex h="100vh" bg="pageBg" position="relative">
      {/* Sidebar on the left, fixed width */}
      {isSidebarOpen && (
        <Box as="aside" w="300px" flexShrink={0}>
          <SideBar onClose={() => setIsSidebarOpen(false)} />
        </Box>
      )}

      {/* Show Sidebar Floating Button */}
      {!isSidebarOpen && (
        <Flex
          as="button"
          onClick={() => setIsSidebarOpen(true)}
          position="absolute"
          bottom={8}
          left={0}
          bg="primary"
          color="white"
          w="56px"
          h="48px"
          borderRightRadius="full"
          align="center"
          justify="center"
          cursor="pointer"
          _hover={{ bg: "primaryHover" }}
          transition="background 0.2s"
          zIndex={10}
        >
          <LuEye size={20} />
        </Flex>
      )}

      {/* Right side: column with header on top, main content below */}
      <Flex direction="column" flex="1">
        {/* Header extends from sidebar end to page end */}
        <Box as="header" w="100%">
          <BoardHeader />
        </Box>

        {/* Main content area below header, centered */}
        <Flex as="main" flex="1">
          {children || <Outlet />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppLayout;
