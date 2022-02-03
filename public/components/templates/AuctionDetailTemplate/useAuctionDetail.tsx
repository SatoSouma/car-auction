import { auctionColumnType } from 'public/types/auctionDetailType'
import { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'

export function useAuctionDetail() {
  const [auctionDetail, setAuctionDetail] = useState<auctionColumnType>()
  const [carNum, setCarNum] = useState<number>(0)
  const router = useRouter()
  const auctionId = router.query.auctionId
  useEffect(() => {
    if (typeof auctionId === 'string') {
      fetch(`api/auctionDetail?id=${auctionId}`)
        .then((response) => {
          response.json().then((data) => {
            setAuctionDetail(data)
          })
        })
        .catch((error) => {
          console.log('失敗しました')
        })
    }
  }, [router, auctionId])

  return [auctionDetail, carNum, setCarNum] as const
}
