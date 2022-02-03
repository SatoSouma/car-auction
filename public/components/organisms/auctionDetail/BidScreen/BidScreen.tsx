import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import { BidScreenType } from 'public/types/auctionDetailType'
import { useBidScreen } from './useBidScreen'

const BidScreen: React.VFC<BidScreenType> = (props: BidScreenType) => {
  const [remainingTime, bid, setBid, isJoin, onChengeJoin] = useBidScreen(props)

  return (
    <Box
      boxShadow="lg"
      bg="white"
      rounded="lg"
      border="2px"
      borderColor="gray.300"
      textAlign="center"
      h="500"
    >
      {/* {console.log(bid)} */}
      {props.nowDate >= props.eventDate && props.nowDate <= props.endTime ? (
        <Grid templateColumns="repeat(6, 1fr)" gap={1} mt="10" mb="10">
          <GridItem colSpan={6}>
            <Heading>現在価格</Heading>
            <Text fontSize="40" fontWeight="bold" color="yellow.400">
              $現在価格
            </Text>
          </GridItem>
          <GridItem colSpan={5} ml="120">
            <NumberInput
              mb="5"
              min={15}
              defaultValue={15}
              onChange={(e) => setBid(Number(e))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper children="+" />
                <NumberDecrementStepper children="-" />
              </NumberInputStepper>
            </NumberInput>
          </GridItem>
          <GridItem colSpan={1} mr="120" mt="2">
            <Text fontWeight="bold">万</Text>
          </GridItem>
          <GridItem colSpan={6} mr="120" ml="120">
            <Button
              boxShadow="md"
              bg="midBlue.300"
              color="white"
              size="lg"
              width="200px"
              _active={{
                bg: 'midBlue.200',
                color: 'white',
                boxShadow: 'inner',
              }}
              _hover={{ bg: 'midBlue.300', color: 'white' }}
            >
              入札
            </Button>
          </GridItem>

          <GridItem colSpan={6}>
            <Text fontSize="40" fontWeight="bold">
              残り時間
            </Text>
            <Text fontSize="50" fontWeight="bold">
              {remainingTime}
            </Text>
          </GridItem>
        </Grid>
      ) : props.nowDate >= props.endTime ? (
        <Text fontSize="40" fontWeight="bold" color="gray.600" mt="50" mb="10">
          オークション終了済み
        </Text>
      ) : (
        <Grid
          templateColumns="repeat(6, 1fr)"
          textAlign="center"
          gap={1}
          mt="10"
          mb="10"
        >
          <GridItem colSpan={6}>
            <Heading>開始価格</Heading>
            <Text fontSize="40" fontWeight="bold" color="yellow.400">
              $開始価格
            </Text>
          </GridItem>
          <GridItem colSpan={6}>
            {isJoin ? (
              <Button
                boxShadow="md"
                bg="gray.400"
                color="white"
                size="lg"
                width="200px"
                _active={{
                  bg: 'midBlue.200',
                  color: 'white',
                  boxShadow: 'inner',
                }}
                _hover={{ bg: 'gray.400', color: 'white' }}
                onClick={() => onChengeJoin()}
              >
                参加予約取消し
              </Button>
            ) : (
              <Button
                boxShadow="md"
                bg="midBlue.300"
                color="white"
                size="lg"
                width="200px"
                _active={{
                  bg: 'midBlue.200',
                  color: 'white',
                  boxShadow: 'inner',
                }}
                _hover={{ bg: 'midBlue.300', color: 'white' }}
                onClick={() => onChengeJoin()}
              >
                参加予約
              </Button>
            )}
          </GridItem>
          <GridItem colSpan={6}>
            <Text fontSize="40" fontWeight="bold">
              開催日
            </Text>
            <Text fontSize="50" fontWeight="bold">
              $開催日
            </Text>
          </GridItem>
        </Grid>
      )}
    </Box>
  )
}

export default BidScreen
