import { Box, Grid, GridItem, Text, Link, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { VFC } from 'react'
import { auctionListType } from '../../types/auctionListType'

const AuctionInfo: VFC<auctionListType> = (props: auctionListType) => {
  const router = useRouter()
  function clickLink(): void {
    router.push({
      pathname: '/auctionDetail', //URL
      query: { auctionId: props.id }, //検索クエリ
    })
  }

  return (
    <Box textAlign="center">
      {console.log(props.id)}
      <Grid
        templateColumns="repeat(5, 1fr)"
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
          {props.isJoin ? (
            <Text color="blue.300" fontWeight="bold">
              参加予約済
            </Text>
          ) : (
            <Text color="gray.600">参加予約無</Text>
          )}
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

export default AuctionInfo
