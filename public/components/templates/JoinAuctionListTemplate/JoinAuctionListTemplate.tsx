import { Grid, GridItem } from '@chakra-ui/react'
import { VFC } from 'react'
import {
  JoinAuctionInfo,
  HeaderBar,
  SearchBar,
  JoinAuctionListHeader,
} from 'public'
import { useJoinAuctionList } from './useJoinAuctionList'

const AuctionListTemplate: VFC = () => {
  const auctionInfo = useJoinAuctionList()

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={0}>
      <GridItem colSpan={3} h="20">
        <SearchBar />
      </GridItem>
      <GridItem colSpan={7} h="50">
        <HeaderBar />
      </GridItem>
      <JoinAuctionListHeader />
      <GridItem colSpan={7} bg="gray.50">
        <Grid templateColumns="repeat(7, 1fr)" gap={0} mt="1.0em" mb="3.0em">
          {auctionInfo &&
            auctionInfo.auctions.map((items) =>
              items.isJoin ? (
                <GridItem colSpan={7} h="100" key={items.id} mt="1.0em">
                  <JoinAuctionInfo
                    title={items.title}
                    eventDate={items.eventDate}
                    typeName={items.exhibitCars[0].typeName}
                    url={items.exhibitCars[0].images[0].url}
                    key={items.id}
                  />
                </GridItem>
              ) : (
                <></>
              ),
            )}
        </Grid>
      </GridItem>
      <GridItem colSpan={7} h="40" bg="gray.500" />
    </Grid>
  )
}

export default AuctionListTemplate
