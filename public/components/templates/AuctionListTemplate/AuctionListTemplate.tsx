import { Grid, GridItem } from '@chakra-ui/react'
import { VFC, useEffect, useState } from 'react'
import { AuctionInfo, HeaderBar, SearchBar, AuctionListHeader } from 'public'
import { auctionContentType } from '../../../types/auctionListType'
import { useActionList } from './useAuctionList'

const AuctionListTemplate: VFC = () => {
  const auctionInfo = useActionList()

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={0}>
      <GridItem colSpan={3} h="20">
        <SearchBar />
      </GridItem>
      <GridItem colSpan={7} h="50">
        <HeaderBar />
      </GridItem>
      <AuctionListHeader />
      <GridItem colSpan={7} bg="gray.50">
        <Grid templateColumns="repeat(7, 1fr)" gap={0} mt="1.0em" mb="3.0em">
          {auctionInfo &&
            auctionInfo.auctions.map((items) => (
              <GridItem colSpan={7} h="100" key={items.id} mt="1.0em">
                <AuctionInfo
                  isJoin={items.isJoin}
                  title={items.title}
                  eventDate={items.eventDate}
                  typeName={items.exhibitCars[0].typeName}
                  url={items.exhibitCars[0].images[0].url}
                  id={items.id}
                  key={items.id}
                />
              </GridItem>
            ))}
        </Grid>
      </GridItem>
      <GridItem colSpan={7} h="40" bg="gray.500" />
    </Grid>
  )
}

export default AuctionListTemplate
