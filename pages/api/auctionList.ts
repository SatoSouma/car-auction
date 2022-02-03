import type { NextApiRequest, NextApiResponse } from 'next'
import type { auctionContentType } from '../../public/types/auctionListType'
const auctionList: auctionContentType[] = [
  {
    id: 0,
    title: '毎日新聞',
    description: 'string',
    eventDate: '2022-01-20T12:05:31.054Z',
    isJoin: false,
    exhibitCars: [
      {
        id: 1,
        typeName: 'プーさん',
        model: 'string',
        chassisNumber: 'string',
        vehicleClassification: 1,
        modelYear: '2022',
        transmission: 0,
        doorNumber: 0,
        startPrice: 0,
        images: [
          {
            url: '02_l.jpg',
          },
        ],
        damageList: {
          frontSpoiler: 0,
          frontPanel: 1,
          bonnetForward: 0,
          bonnetBackward: 0,
          frontGlass: 0,
          roofForward: 1,
          roofBackward: 0,
          rightGlass: 0,
          trunk: 0,
          rightPanel: 0,
          rightSpoiler: 0,
          leftFrontBumper: 0,
          rightFrontBumper: 0,
          leftFrontFender: 0,
          rightFrontFender: 0,
          leftFrontDoor: 0,
          rightFrontDoor: 0,
          leftLockerPanel: 1,
          rightLockerPanel: 0,
          leftRearDoor: 0,
          rightRearDoor: 1,
          leftRearTire: 0,
          rightRearTire: 0,
          leftQuarterForward: 0,
          rightQuarterForward: 1,
          leftQuarterBackward: 0,
          rightQuaterBackward: 0,
          leftRearBumper: 1,
          rightRearBumper: 0,
          spareTire: 0,
        },
      },
    ],
  },
  {
    id: 1,
    title: 'string',
    description: 'string',
    eventDate: '2022-01-20T12:05:31.054Z',
    isJoin: true,
    exhibitCars: [
      {
        id: 1,
        typeName: 'プーさん',
        model: 'string',
        chassisNumber: 'string',
        vehicleClassification: 1,
        modelYear: '2022',
        transmission: 0,
        doorNumber: 0,
        startPrice: 0,
        images: [
          {
            url: '02_l.jpg',
          },
        ],
        damageList: {
          frontSpoiler: 0,
          frontPanel: 0,
          bonnetForward: 0,
          bonnetBackward: 0,
          frontGlass: 0,
          roofForward: 1,
          roofBackward: 0,
          rightGlass: 1,
          trunk: 0,
          rightPanel: 0,
          rightSpoiler: 0,
          leftFrontBumper: 0,
          rightFrontBumper: 0,
          leftFrontFender: 0,
          rightFrontFender: 0,
          leftFrontDoor: 0,
          rightFrontDoor: 0,
          leftLockerPanel: 1,
          rightLockerPanel: 0,
          leftRearDoor: 0,
          rightRearDoor: 0,
          leftRearTire: 0,
          rightRearTire: 1,
          leftQuarterForward: 1,
          rightQuarterForward: 1,
          leftQuarterBackward: 0,
          rightQuaterBackward: 0,
          leftRearBumper: 0,
          rightRearBumper: 0,
          spareTire: 0,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'string',
    description: 'string',
    eventDate: '2022-01-20T12:05:31.054Z',
    isJoin: true,
    exhibitCars: [
      {
        id: 2,
        typeName: 'プーさん',
        model: 'string',
        chassisNumber: 'string',
        vehicleClassification: 1,
        modelYear: '2022',
        transmission: 0,
        doorNumber: 0,
        startPrice: 0,
        images: [
          {
            url: '02_l.jpg',
          },
        ],
        damageList: {
          frontSpoiler: 0,
          frontPanel: 0,
          bonnetForward: 0,
          bonnetBackward: 0,
          frontGlass: 0,
          roofForward: 0,
          roofBackward: 0,
          rightGlass: 0,
          trunk: 0,
          rightPanel: 0,
          rightSpoiler: 0,
          leftFrontBumper: 0,
          rightFrontBumper: 0,
          leftFrontFender: 1,
          rightFrontFender: 1,
          leftFrontDoor: 1,
          rightFrontDoor: 0,
          leftLockerPanel: 0,
          rightLockerPanel: 0,
          leftRearDoor: 0,
          rightRearDoor: 0,
          leftRearTire: 0,
          rightRearTire: 0,
          leftQuarterForward: 0,
          rightQuarterForward: 0,
          leftQuarterBackward: 0,
          rightQuaterBackward: 0,
          leftRearBumper: 0,
          rightRearBumper: 0,
          spareTire: 1,
        },
      },
    ],
  },
  {
    id: 3,
    title: 'string',
    description: 'string',
    eventDate: '2022-01-20T12:05:31.054Z',
    isJoin: false,
    exhibitCars: [
      {
        id: 3,
        typeName: 'プーさん',
        model: 'string',
        chassisNumber: 'string',
        vehicleClassification: 1,
        modelYear: '2022',
        transmission: 0,
        doorNumber: 0,
        startPrice: 0,
        images: [
          {
            url: '02_l.jpg',
          },
        ],
        damageList: {
          frontSpoiler: 0,
          frontPanel: 0,
          bonnetForward: 0,
          bonnetBackward: 0,
          frontGlass: 0,
          roofForward: 0,
          roofBackward: 0,
          rightGlass: 0,
          trunk: 0,
          rightPanel: 0,
          rightSpoiler: 0,
          leftFrontBumper: 0,
          rightFrontBumper: 0,
          leftFrontFender: 0,
          rightFrontFender: 0,
          leftFrontDoor: 0,
          rightFrontDoor: 0,
          leftLockerPanel: 0,
          rightLockerPanel: 0,
          leftRearDoor: 0,
          rightRearDoor: 0,
          leftRearTire: 0,
          rightRearTire: 0,
          leftQuarterForward: 0,
          rightQuarterForward: 0,
          leftQuarterBackward: 0,
          rightQuaterBackward: 0,
          leftRearBumper: 0,
          rightRearBumper: 1,
          spareTire: 0,
        },
      },
    ],
  },
  {
    id: 4,
    title: 'string',
    description: 'string',
    eventDate: '2022-01-20T12:05:31.054Z',
    isJoin: true,
    exhibitCars: [
      {
        id: 4,
        typeName: 'プーさん',
        model: 'string',
        chassisNumber: 'string',
        vehicleClassification: 1,
        modelYear: '2022',
        transmission: 0,
        doorNumber: 0,
        startPrice: 0,
        images: [
          {
            url: '02_l.jpg',
          },
        ],
        damageList: {
          frontSpoiler: 0,
          frontPanel: 0,
          bonnetForward: 0,
          bonnetBackward: 0,
          frontGlass: 1,
          roofForward: 0,
          roofBackward: 0,
          rightGlass: 0,
          trunk: 0,
          rightPanel: 0,
          rightSpoiler: 0,
          leftFrontBumper: 0,
          rightFrontBumper: 0,
          leftFrontFender: 0,
          rightFrontFender: 1,
          leftFrontDoor: 0,
          rightFrontDoor: 0,
          leftLockerPanel: 0,
          rightLockerPanel: 0,
          leftRearDoor: 1,
          rightRearDoor: 1,
          leftRearTire: 0,
          rightRearTire: 0,
          leftQuarterForward: 0,
          rightQuarterForward: 0,
          leftQuarterBackward: 0,
          rightQuaterBackward: 0,
          leftRearBumper: 0,
          rightRearBumper: 1,
          spareTire: 0,
        },
      },
    ],
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<auctionContentType>,
) {
  const auctionInfo = {
    auctions: auctionList,
  }
  res.end(JSON.stringify(auctionInfo))
}