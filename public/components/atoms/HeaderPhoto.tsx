import { VFC } from 'react'
import Image from 'next/image'

const HeaderPhoto: VFC = () => {
  return (
    <Image src="/src/img/Header.jpeg" alt="car" width={1920} height={500} />
  )
}

export default HeaderPhoto
