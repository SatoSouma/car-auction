import { Box, Grid, GridItem, Text } from '@chakra-ui/react'

const AuctionListHeader: React.VFC = () => {
  return (
    <GridItem colSpan={7} h="55" color="gray.500">
      <Box border="1px" borderColor="gray.300" h="55">
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={1}
          textAlign="center"
          marginLeft="2em"
          marginRight="2em"
          pt="0.8em"
          fontWeight="bold"
          color="gray.600"
        >
          <Text>オークション名</Text>
          <Text>開催日時</Text>
          <Text>参加状態</Text>
          <Text>車種名</Text>
          <Text>車両画像</Text>
        </Grid>
      </Box>
    </GridItem>
  )
}

export default AuctionListHeader
