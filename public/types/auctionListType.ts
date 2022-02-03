export type auctionContentType = {
  id: number
  title: string
  description: string
  eventDate: string
  isJoin: boolean
  exhibitCars: [
    {
      id: number
      typeName: string //車種名
      model: string //型式
      chassisNumber: string //車体番号
      vehicleClassification: number //車両区分
      modelYear: string //年式
      transmission: number //ミッションの種類
      doorNumber: number //ドア枚数
      startPrice: number //開始価格
      images: [
        {
          url: string
        },
      ]
      damageList: {
        frontSpoiler: number
        frontPanel: number
        bonnetForward: number
        bonnetBackward: number
        frontGlass: number
        roofForward: number
        roofBackward: number
        rightGlass: number
        trunk: number
        rightPanel: number
        rightSpoiler: number
        leftFrontBumper: number
        rightFrontBumper: number
        leftFrontFender: number
        rightFrontFender: number
        leftFrontDoor: number
        rightFrontDoor: number
        leftLockerPanel: number
        rightLockerPanel: number
        leftRearDoor: number
        rightRearDoor: number
        leftRearTire: number
        rightRearTire: number
        leftQuarterForward: number
        rightQuarterForward: number
        leftQuarterBackward: number
        rightQuaterBackward: number
        leftRearBumper: number
        rightRearBumper: number
        spareTire: number
      }
    },
  ]
}

export type auctionListType = {
  isJoin: boolean
  title: string
  eventDate: string
  typeName: string
  url: string
  id: number
  key: number
}
