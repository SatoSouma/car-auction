import { Text, Link, Box } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  bodyUrl: string
  bodyName: string
}

const BodyTypeLogo: React.VFC<Props> = (props: Props) => {
  return (
    <Box textAlign="center">
      <Link href="./" _focus={{ boxShadow: 'none' }}>
        <Image
          key={props.bodyUrl}
          src={'/src/img/carTypeIcon/' + props.bodyUrl + '.png'}
          width={100}
          height={50}
          alt="logo"
        />
        <Text textAlign="center" color="gray.700">
          {props.bodyName}
        </Text>
      </Link>
    </Box>
  )
}

export default BodyTypeLogo
