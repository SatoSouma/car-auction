import { VFC } from 'react'
import {
  SearchBar,
  Header,
  SearchMarker,
  AuctionExp,
  SearchBodyType,
} from 'public'
import { GridItem, Grid } from '@chakra-ui/react'
import { parseCookies } from 'nookies'

const HomeTemplate: VFC = () => {
  const cookie = parseCookies()
  {
    console.log(cookie.userId)
  }
  return (
    <>
      <Grid templateColumns="repeat(7, 1fr)" gap={0}>
        {}
        <GridItem colSpan={3} h="20">
          <SearchBar />
        </GridItem>
        <GridItem colSpan={7} h="400">
          <Header />
        </GridItem>
        <GridItem
          rowSpan={5}
          colSpan={2}
          marginTop="5em"
          marginBottom="5em"
          h="900"
        >
          <SearchMarker />
        </GridItem>
        <GridItem
          colSpan={5}
          marginTop="5em"
          marginLeft="2em"
          marginRight="2em"
          h="353"
        >
          <AuctionExp />
        </GridItem>
        <GridItem
          colSpan={5}
          marginLeft="2em"
          marginTop="4em"
          marginBottom="5em"
          marginRight="2em"
          h="483"
        >
          <SearchBodyType />
        </GridItem>
        <GridItem colSpan={7} h="40" bg="gray.500" />
      </Grid>
    </>
  )
}

export default HomeTemplate
