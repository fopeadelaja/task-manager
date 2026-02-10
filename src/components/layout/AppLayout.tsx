import { Box, Flex } from "@chakra-ui/react";
import { BoardHeader } from "./BoardHeader";
import SideBar from "./SideBar";
import EmptyBoard from "../board/EmptyBoard";
import Board from "../board/Board";

const AppLayout = () => {
  return (
    <Flex h="100vh" bg="pageBg">
      {/* Sidebar on the left, fixed width */}
      <Box as="aside" w="300px">
        <SideBar />
      </Box>

      {/* Right side: column with header on top, main content below */}
      <Flex direction="column" flex="1">
        {/* Header extends from sidebar end to page end */}
        <Box as="header" w="100%">
          <BoardHeader />
        </Box>

        {/* Main content area below header, centered */}
        <Flex as="main" flex="1" align="center" justify="center">
          {/* <EmptyBoard /> */}
          <Board />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppLayout;
