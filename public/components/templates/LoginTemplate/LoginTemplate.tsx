import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useLogin } from './useLogin'

const LoginTemplate: React.VFC = () => {
  const [
    onChengePass,
    onChengeUserId,
    authentication,
    handleClick,
    userId,
    pass,
    show,
  ] = useLogin()
  return (
    <Box h="800">
      {console.log(pass)}
      {console.log(userId)}
      <Box mt="10" mb="5" textAlign="center">
        <Image src="/src/img/teamlogo.png" height="100" width="100" />
      </Box>
      <Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          h="330"
          border="2px"
          borderColor="gray.200"
          boxShadow="lg"
          bg="white"
          mr="500"
          ml="500"
          borderRadius={10}
          color="gray.600"
        >
          <GridItem colSpan={2} mt="5" textAlign="center">
            <Text fontSize="20" fontWeight="bold">
              ログインID
            </Text>
          </GridItem>
          <GridItem colSpan={2} mr="100" ml="100">
            <Input
              placeholder="Enter loginId"
              onChange={(e) => onChengeUserId(e.target.value)}
            ></Input>
          </GridItem>
          <GridItem colSpan={2} textAlign="center">
            <Text fontSize="20" fontWeight="bold">
              パスワード
            </Text>
          </GridItem>
          <GridItem colSpan={2} mr="100" ml="100">
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(e) => onChengePass(e.target.value)}
              ></Input>
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2} mb="5" mt="2" textAlign="center">
            <Button
              bg="midBlue.100"
              color="white"
              onClick={() => authentication()}
            >
              ログイン
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginTemplate
