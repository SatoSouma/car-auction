import { VFC } from 'react'
import { ArrowForwardIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarCheck,
  faLongArrowAltRight,
  faDoorOpen,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import styles from './AuctionExp.module.scss'

const AuctionExp: VFC = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={1}
        borderTop="1px"
        borderBottom="1px"
        color="gray.400"
        boxShadow="base"
      >
        <GridItem
          colSpan={5}
          h="20"
          textAlign="center"
          fontSize="2em"
          fontWeight="bold"
          color="gray.600"
          marginTop="0.5em"
        >
          <Text>オークションの流れ</Text>
        </GridItem>
        <GridItem colSpan={1} margin="0 auto">
          <Box
            rounded="full"
            bg="midBlue.300"
            textAlign="center"
            height="150px"
            width="150px"
          >
            <FontAwesomeIcon
              icon={faCalendarCheck}
              color="white"
              size="6x"
              className={styles.icon}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} margin="0 auto" marginTop="1.5em">
          <Box textAlign="center" height="100px" width="100px">
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              color="#4A5568"
              size="6x"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} margin="0 auto">
          <Box
            rounded="full"
            bg="midBlue.200"
            textAlign="center"
            height="150px"
            width="150px"
          >
            <FontAwesomeIcon
              icon={faDoorOpen}
              color="white"
              size="6x"
              className={styles.icon}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} margin="0 auto" marginTop="1.5em">
          <Box textAlign="center" height="100px" width="100px">
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              color="#4A5568"
              size="6x"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1} margin="0 auto">
          <Box
            rounded="full"
            bg="midBlue.100"
            textAlign="center"
            height="150px"
            width="150px"
          >
            <FontAwesomeIcon
              icon={faPen}
              color="white"
              size="6x"
              className={styles.icon}
            />
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          h="20"
          color="gray.600"
          marginTop="1em"
          textAlign="center"
        >
          <Text fontSize="1em" fontWeight="bold">
            1<br />
            オークション参加予約
          </Text>
        </GridItem>
        <GridItem colSpan={1} h="20" marginTop="1.1em" textAlign="center">
          {' '}
        </GridItem>
        <GridItem
          colSpan={1}
          h="20"
          color="gray.600"
          marginTop="1em"
          textAlign="center"
        >
          <Text fontSize="1em" fontWeight="bold">
            2<br />
            オークションへ参加
          </Text>
        </GridItem>
        <GridItem colSpan={1} h="20" marginTop="1.1em" textAlign="center">
          {' '}
        </GridItem>
        <GridItem
          colSpan={1}
          h="20"
          color="gray.600"
          marginTop="1em"
          textAlign="center"
        >
          <Text fontSize="1.1em" fontWeight="bold">
            3<br />
            購入手続き
          </Text>
        </GridItem>
      </Grid>
    </>
  )
}

export default AuctionExp
