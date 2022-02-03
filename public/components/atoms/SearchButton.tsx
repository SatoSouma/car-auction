import { VFC } from 'react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchButton: VFC = () => {
  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        bg="midBlue.100"
        color="white"
        _hover={{ bg: 'midBlue.100' }}
        _active={{ bg: 'midBlue.100' }}
        size="xs"
        marginTop="2em"
        marginLeft="2em"
      />
    </>
  )
}

export default SearchButton
