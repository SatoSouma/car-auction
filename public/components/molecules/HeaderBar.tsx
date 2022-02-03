import { VFC } from 'react'
import { Box, Link, IconButton, Grid, GridItem } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

const HeaderBar: VFC = () => {
  return (
    <Box bg="midBlue.100" color="white" textAlign="center" h="50">
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={1}
        marginLeft="2em"
        marginRight="2em"
      >
        <GridItem colSpan={1} marginTop="0.6em">
          <Link
            href="/home"
            _active={{
              bg: 'midBlue.100',
              borderColor: 'midblue.100',
              outline: 'none',
            }}
          >
            HOME
          </Link>
        </GridItem>
        <GridItem colSpan={1} marginTop="0.6em">
          <Link href="/auctionList">オークション一覧</Link>
        </GridItem>
        <GridItem colSpan={1} marginTop="0.6em">
          <Link href="/joinAuctionList">参加オークション一覧</Link>
        </GridItem>
        <GridItem colSpan={1} marginTop="0.6em">
          <Link href="/myPage">マイページ</Link>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default HeaderBar
