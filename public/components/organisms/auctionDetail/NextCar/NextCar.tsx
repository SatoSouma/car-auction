import { Box, Grid } from '@chakra-ui/react'
import { NextCarType } from 'public/types/auctionDetailType'

const NextCar: React.VFC<NextCarType> = (props: NextCarType) => {
  return (
    <Box h="305">
      <Grid templateColumns="repeat(6, 1fr)" mt="10" mb="10"></Grid>
    </Box>
  )
}

export default NextCar
