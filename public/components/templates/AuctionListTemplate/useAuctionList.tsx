import { auctionContentType } from 'public/types/auctionListType'
import { useEffect, useState } from 'react'

export function useActionList() {
  const [auctionInfo, setAuctionInfo] = useState<{
    auctions: auctionContentType[]
  }>({
    auctions: [],
  })

  useEffect(() => {
    fetch('api/auctionList')
      .then((response) => {
        response.json().then((data) => {
          setAuctionInfo(data)
        })
      })
      .catch((error) => {
        console.log('失敗しました')
      })
  }, [])

  return auctionInfo
}
