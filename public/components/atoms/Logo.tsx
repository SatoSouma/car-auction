import { VFC } from 'react'
import { Text, Link, Box } from '@chakra-ui/react'
import Image from 'next/image'
// import Link from 'next/link'

type Props = {
  marker: string
}

const Logo: VFC<Props> = (props: Props) => {
  return (
    <Box>
      <Link href="./" _focus={{ boxShadow: 'none' }}>
        <Image
          key={props.marker}
          src={'/src/img/makerIcon/' + props.marker + '.png'}
          width={80}
          height={70}
          alt="logo"
        />
      </Link>
    </Box>
  )
}

export default Logo
