import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import { useTransaction } from './useTransactionTemplate'

const TransactionTemplate: React.VFC = () => {
  const [
    date,
    transaction,
    getDate,
    getTransaction,
    onPostClick,
  ] = useTransaction()

  return (
    <Box h="800" textAlign="center" bg="gray.50">
      <Box pt="10">
        <Grid
          templateColumns="repeat(2, 1fr)"
          h="330"
          border="2px"
          borderColor="gray.200"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          mr="500"
          ml="500"
          pt="5"
          borderRadius={10}
          color="gray.600"
        >
          <GridItem colSpan={2} mt="5">
            <Text fontSize="20" fontWeight="bold">
              納品方法
            </Text>
          </GridItem>
          <GridItem colSpan={2} mr="100" ml="100">
            <Select
              placeholder="選択"
              onChange={(e) => getTransaction(Number(e.target.value))}
            >
              <option value="0">直接取りに行く</option>
              <option value="1">輸送</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="20" fontWeight="bold">
              納品日時
            </Text>
          </GridItem>
          <GridItem colSpan={2} mr="100" ml="100">
            <Input
              type="date"
              id="date"
              onChange={(e) => getDate(e.target.value as string)}
            ></Input>
          </GridItem>
          <GridItem colSpan={2} mt="2" mb="10">
            <Button
              bg="midBlue.100"
              color="white"
              onClick={() => onPostClick()}
            >
              送信
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default TransactionTemplate
