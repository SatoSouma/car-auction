import { VFC } from 'react'
import { BodyTypeLogo } from 'public'
import { Grid, GridItem, Text } from '@chakra-ui/react'

const SearchBodyType: VFC = () => {
  interface bodyTypes {
    bodyType: string
    bodyName: string
  }

  const bodyInfo: bodyTypes[] = [
    {
      bodyType: 'kei',
      bodyName: '軽自動車',
    },
    { bodyType: 'keitora', bodyName: '軽トラック' },
    { bodyType: 'kupe', bodyName: 'クーペ' },
    { bodyType: 'hiblit', bodyName: 'ハイブリット車' },
    { bodyType: 'kurokan', bodyName: 'クロカン' },
    { bodyType: 'stationwagon', bodyName: 'ステーションワゴン' },
    { bodyType: 'sedan', bodyName: 'セダン' },
    { bodyType: 'suv', bodyName: 'SUV' },
    { bodyType: 'rimzin', bodyName: 'リムジン' },
    { bodyType: 'opencar', bodyName: 'オープンカー' },
    { bodyType: 'onebox', bodyName: 'ワンボックス' },
    { bodyType: 'miniban', bodyName: 'ミニバン' },
    { bodyType: 'pickup', bodyName: 'ピックアップ' },
  ]

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={1}
      borderTop="1px"
      borderBottom="1px"
      color="gray.400"
      boxShadow="base"
      h="483"
    >
      <GridItem colSpan={5} h="12" textAlign="center" marginTop="1.2em">
        <Text color="gray.600" fontSize="1.5em" fontWeight="bold">
          ボディタイプで検索
        </Text>
      </GridItem>
      {bodyInfo.map((items) => (
        <GridItem key={items.bodyName} colSpan={1} marginBottom="1em">
          <BodyTypeLogo bodyUrl={items.bodyType} bodyName={items.bodyName} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default SearchBodyType
