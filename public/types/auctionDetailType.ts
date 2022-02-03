import moment from 'moment'
import { SetStateAction } from 'react'

export type auctionDetailType = {
  id: number //オークションid
  title: string //オークション名
  isJoin: boolean //参加状態s
  eventDate: string //開催日時
  description: string //オークション説明文
  salesId: number //出品id
  salesPoint: [
    {
      1: string
      2: string
      3: string
      4: string
      5: string
    },
  ]
  exhibitCars: {
    id: number //車両id
    typeName: string
    model: string
    chassisNumber: string
    vehicleClassification: number
    modelYear: string
    transmission: number
    doorNumber: number
    startPrice: number
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
  }[]
}

export type auctionColumnType = {
  id: number //オークションid
  title: string //オークション名
  isJoin: boolean //参加状態
  eventDate: string //開催日時
  description: string //オークション説明文
  sales: [
    {
      id: number //出品id
    },
  ]
  exhibitCars: {
    id: number //車両id
    typeName: string
    model: string
    chassisNumber: string
    vehicleClassification: number
    modelYear: string
    transmission: number
    doorNumber: number
    startPrice: number
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
  }[]
}

export type BidScreenType = {
  eventDate: string
  endTime: string
  nowDate: string
  key: string
  isJoin: boolean
  carNum: number
  setCarNum: any
}

export type CarPhotosTypes = {
  typeName: string
  images: [{ url: string }]
}

export type CarDetailType = {
  id: number
  model: string
  chassisNumber: string
  vehicleClassification: number
  modelYear: string
  transmission: number
  doorNumber: number
  startPrice: number
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
}

export type NextCarType = {
  url: string
  typeName: string
}
