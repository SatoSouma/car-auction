import { VFC } from 'react'
import { SearchBox, SearchButton } from 'public'
import { Grid, GridItem } from '@chakra-ui/react'

const SearchBar: VFC = () => {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem colSpan={2}>
          <SearchBox />
        </GridItem>
        <GridItem colSpan={1}>
          <SearchButton />
        </GridItem>
      </Grid>
    </div>
  )
}

export default SearchBar
