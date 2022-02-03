import { Box, Grid, GridItem, Text, Link, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { VFC } from 'react'
import { joinAuctionListType } from '../../types/joinAuctionListType'

const JoinAuctionInfo: VFC<joinAuctionListType> = (
  props: joinAuctionListType,
) => {
  const router = useRouter()
  function clickLink(): void {
    router.push({
      pathname: '/auctionDetail', //URL
      query: { auctionId: props.key }, //検索クエリ
    })
  }

  return (
    <Box textAlign="center">
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={0}
        marginLeft="2em"
        marginRight="2em"
        boxShadow="base"
        h="100"
        bg="white"
      >
        <GridItem colSpan={1} marginTop="2.2em">
          <Button
            h="6"
            as="a"
            borderBottom="1px"
            borderColor="gray.300"
            borderRadius="1"
            bg="white"
            _hover={{ bg: 'white', borderColor: 'gray.600' }}
            _active={{ bg: 'white', color: 'black' }}
            onClick={() => clickLink()}
          >
            {props.title}
          </Button>
        </GridItem>
        <GridItem colSpan={1} marginTop="2.2em">
          <Text>{props.eventDate}</Text>
        </GridItem>
        <GridItem colSpan={1} marginTop="2.2em">
          <Text>{props.typeName}</Text>
        </GridItem>
        <GridItem colSpan={1} marginTop="0.2em">
          <Image
            width={150}
            height={94}
            alt="car"
            src={`/src/img/${props.url}`}
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default JoinAuctionInfo
