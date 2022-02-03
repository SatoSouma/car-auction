import { ChevronDownIcon } from '@chakra-ui/icons'
import { CarDetailType } from 'public/types/auctionDetailType'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

const CarDetail: React.VFC<CarDetailType> = (props: CarDetailType) => {
  return (
    <Box
      boxShadow="lg"
      bg="white"
      rounded="lg"
      border="2px"
      borderColor="gray.300"
      textAlign="center"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        mr="10"
        ml="10"
        textAlign="center"
        fontSize="20"
        fontWeight="bold"
        mt="5"
        mb="5"
      >
        <Text color="gray.600">型式</Text>
        <Text>{props.model}</Text>
        <Text>車体番号</Text>
        <Text>{props.chassisNumber}</Text>
        <Text>車両区分</Text>
        <Text>{props.vehicleClassification}</Text>
        <Text>年式</Text>
        <Text>{props.modelYear}</Text>
        <Text>ミッションの種類</Text>
        <Text>{props.transmission}</Text>
        <Text>ドア枚数</Text>
        <Text>{props.doorNumber}</Text>
        <GridItem colSpan={2} mt="1">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bor
              derRadius="1"
              bg="white"
              fontSize="20"
              fontWeight="bold"
              _hover={{ bg: 'white', borderColor: 'white' }}
              _active={{ bg: 'white', color: 'black' }}
            >
              キズの場所
            </MenuButton>
            <MenuList>
              {props.damageList.frontSpoiler === 1 ? (
                <MenuItem>F_スポイラー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.frontPanel === 1 ? (
                <MenuItem>F_パネル</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.bonnetForward === 1 ? (
                <MenuItem>ボンネット前方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.bonnetBackward === 1 ? (
                <MenuItem>ボンネット後方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.frontGlass === 1 ? (
                <MenuItem>F_ガラス</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.roofForward === 1 ? (
                <MenuItem>ルーフ前方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.roofBackward === 1 ? (
                <MenuItem>ループ後方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightGlass === 1 ? (
                <MenuItem>Rガラス</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.trunk === 1 ? (
                <MenuItem>トランク</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightPanel === 1 ? (
                <MenuItem>Rパネル</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightSpoiler === 1 ? (
                <MenuItem>R_スポイラー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftFrontBumper === 1 ? (
                <MenuItem>左F_バンパー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightFrontBumper === 1 ? (
                <MenuItem>右F_バンパー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftFrontFender === 1 ? (
                <MenuItem>左F_フェンダー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightFrontFender === 1 ? (
                <MenuItem>右F_フェンダー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftFrontDoor === 1 ? (
                <MenuItem>左F_ドア</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightFrontDoor === 1 ? (
                <MenuItem>右F_ドア</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftLockerPanel === 1 ? (
                <MenuItem>左ロッカーパネル</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightLockerPanel === 1 ? (
                <MenuItem>右ロッカーパネル</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftRearDoor === 1 ? (
                <MenuItem>左Rドア</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightRearDoor === 1 ? (
                <MenuItem>右Rドア</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftRearTire === 1 ? (
                <MenuItem>左Rタイヤ</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightRearTire === 1 ? (
                <MenuItem>右Rタイヤ</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftQuarterForward === 1 ? (
                <MenuItem>左クオーター前方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightQuarterForward === 1 ? (
                <MenuItem>右クオーター前方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftQuarterBackward === 1 ? (
                <MenuItem>左クオーター後方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightQuaterBackward === 1 ? (
                <MenuItem>右クオーター後方</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.leftRearBumper === 1 ? (
                <MenuItem>左Rバンパー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.rightRearBumper === 1 ? (
                <MenuItem>右Rバンパー</MenuItem>
              ) : (
                <></>
              )}
              {props.damageList.spareTire === 1 ? (
                <MenuItem>スペアタイヤ</MenuItem>
              ) : (
                <></>
              )}
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem colSpan={2} mt="1">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="1"
              fontSize="20"
              fontWeight="bold"
              bg="white"
              _hover={{ bg: 'white', borderColor: 'white' }}
              _active={{ bg: 'white', color: 'black' }}
            >
              セールスポイント
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CarDetail
