import { VFC } from 'react'
import { Input } from '@chakra-ui/react'

const SearchButton: VFC = () => {
  return (
    <>
      <Input
        size="xs"
        marginTop="2em"
        marginLeft="2em"
        borderColor="midBlue.100"
      />
    </>
  )
}

export default SearchButton
