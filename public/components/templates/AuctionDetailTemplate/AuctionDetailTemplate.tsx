import { useRouter } from 'next/router'
import { VFC } from 'react'
import { useAuctionDetail } from './useAuctionDetail'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { SearchBar, HeaderBar, CarDetail, CarPhotos, BidScreen } from 'public'
import moment from 'moment'

const AuctionDetailTemplate: VFC = () => {
  const [auctionDetail, carNum, setCarNum] = useAuctionDetail()

  const nowDate: string = moment().format() //現在時刻
  const endTime: string = moment(auctionDetail?.eventDate)
    .add(
      auctionDetail !== undefined ? 3 * auctionDetail?.exhibitCars.length : 0,
      'm',
    )
    .format() //終了日時
  const eventDate: string = moment(auctionDetail?.eventDate).format() //開催日時

  return (
    <Box color="gray.700">
      {console.log(auctionDetail?.exhibitCars.length)}
      <Grid templateColumns="repeat(7, 1fr)" gap={0}>
        <GridItem colSpan={3} h="20">
          <SearchBar />
        </GridItem>
        <GridItem colSpan={7} h="50">
          <HeaderBar />
        </GridItem>
        <GridItem colSpan={7}>
          <Grid templateColumns="repeat(7, 1fr)" gap={0}>
            {auctionDetail !== undefined ? (
              <>
                <GridItem colSpan={7} textAlign="center" h="150" pt="5">
                  <Heading mt="3">{auctionDetail?.title}</Heading>
                  {nowDate >= eventDate && nowDate <= endTime ? (
                    <Text fontSize="20">開催中</Text>
                  ) : nowDate >= endTime ? (
                    <Text fontSize="20">このオークションは終了しました</Text>
                  ) : (
                    <Text fontSize="20">まだ開催してません</Text>
                  )}
                </GridItem>
                <GridItem
                  colSpan={3}
                  textAlign="center"
                  marginLeft="2em"
                  marginRight="2em"
                  marginBottom="2em"
                >
                  <CarPhotos
                    typeName={auctionDetail.exhibitCars[carNum].typeName}
                    images={auctionDetail.exhibitCars[carNum].images}
                  />
                </GridItem>
                <GridItem
                  colSpan={4}
                  rowSpan={2}
                  textAlign="center"
                  marginRight="2em"
                >
                  <BidScreen
                    eventDate={eventDate}
                    endTime={endTime}
                    nowDate={nowDate}
                    key={nowDate.toString()}
                    isJoin={
                      auctionDetail?.isJoin !== undefined
                        ? auctionDetail?.isJoin
                        : true
                    }
                    carNum={carNum}
                    setCarNum={setCarNum}
                  />
                </GridItem>
                <GridItem
                  colSpan={3}
                  textAlign="center"
                  marginLeft="2em"
                  marginRight="2em"
                  marginBottom="5em"
                >
                  <CarDetail
                    id={auctionDetail.exhibitCars[carNum].id}
                    model={auctionDetail.exhibitCars[carNum].model}
                    chassisNumber={
                      auctionDetail.exhibitCars[carNum].chassisNumber
                    }
                    vehicleClassification={
                      auctionDetail.exhibitCars[carNum].vehicleClassification
                    }
                    modelYear={auctionDetail.exhibitCars[carNum].modelYear}
                    transmission={
                      auctionDetail.exhibitCars[carNum].transmission
                    }
                    doorNumber={auctionDetail.exhibitCars[carNum].doorNumber}
                    startPrice={auctionDetail.exhibitCars[carNum].startPrice}
                    damageList={auctionDetail.exhibitCars[carNum].damageList}
                  />
                </GridItem>

                <GridItem colSpan={7} h="40" bg="gray.500" />
              </>
            ) : (
              <></>
            )}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default AuctionDetailTemplate
