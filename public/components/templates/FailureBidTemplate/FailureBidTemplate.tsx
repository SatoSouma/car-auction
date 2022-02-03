import { Box, Link, Text } from '@chakra-ui/react'

const FailureBidTemplate: React.VFC = () => {
  return (
    <Box textAlign="center" color="gray.600">
      <Text fontSize="40" fontWeight="bold" mt="50">
        またの機会をお待ちしております。
      </Text>
      <Link
        href="/home"
        fontSize="30"
        color="midBlue.300"
        _active={{ color: 'midBlue.100' }}
      >
        TOPへ戻る
      </Link>
    </Box>
  )
}

export default FailureBidTemplate
