import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { CarPhotosTypes } from 'public/types/auctionDetailType'

const CarPhotos: React.VFC<CarPhotosTypes> = (props: CarPhotosTypes) => {
  return (
    <Box
      boxShadow="lg"
      bg="white"
      rounded="lg"
      border="2px"
      borderColor="gray.300"
      textAlign="center"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={0} mt="5" mb="5">
        <GridItem colSpan={3} textAlign="center">
          {/* メイン */}
          <Image
            src={`/src/img/${props.images[0].url}`}
            width={250}
            height={200}
            alt="Main photo"
          />
        </GridItem>
        <GridItem colSpan={1} textAlign="center">
          {/* 背後 */}
          <Image
            src={`/src/img/${props.images[0].url}`}
            width={120}
            height={100}
            alt="back photo"
          />
        </GridItem>
        <GridItem colSpan={1} textAlign="center">
          {/* 横とか */}
          <Image
            src={`/src/img/${props.images[0].url}`}
            width={120}
            height={100}
            alt="side photo"
          />
        </GridItem>
        <GridItem colSpan={1} textAlign="center">
          {/* 横とか */}
          <Image
            src={`/src/img/${props.images[0].url}`}
            width={120}
            height={100}
            alt="side photo"
          />
        </GridItem>
        <GridItem colSpan={3} textAlign="center">
          <Text fontSize="30" fontWeight="bold">
            車種名
          </Text>
          <Text fontSize="40" fontWeight="bold">
            {props.typeName}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CarPhotos
