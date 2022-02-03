import { VFC } from 'react'
import { Logo } from '../../../../index'
import { Grid, GridItem } from '@chakra-ui/react'
import { constants } from 'zlib'

const markers: string[] = [
  'honda',
  'toyota',
  'mitsubishi',
  'mitsubishi_fuso',
  'nissan',
  'suzuki',
  'subaru',
  'daihatsu',
  'hino',
  'isuzu',
  'mitsuoka',
  'mazda',
  'nissan_diesel',
]

const SearchMarker: VFC = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={1}
        borderTop="1px"
        borderBottom="1px"
        marginLeft="2em"
        borderColor="gray.400"
        h="900"
        boxShadow="base"
      >
        {markers.map((marker: string) => (
          <GridItem colSpan={1} key={marker} marginTop="2em" textAlign="center">
            <Logo marker={marker} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default SearchMarker
