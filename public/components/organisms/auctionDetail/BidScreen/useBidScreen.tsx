import { BidScreenType } from 'public/types/auctionDetailType'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'

export function useBidScreen(props: BidScreenType) {
  const [remainingTime, setRemainingTime] = useState<string>('')
  const [isJoin, setIsJoin] = useState<boolean>(true)
  const [bid, setBid] = useState<number>(0)
  const [msg, setMsg] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    function countdownTimer(): void {
      const now = new Date()
      const endTime = new Date(props.endTime)
      const eventDate = new Date(props.eventDate)
      let difference = endTime.getTime() - now.getTime()

      if (difference >= 0) {
        const hour = Math.floor(difference / (1000 * 60 * 60))
        difference -= hour * (1000 * 60 * 60)
        const minutes = Math.floor(difference / (1000 * 60))
        difference -= minutes * (1000 * 60)
        const second = Math.floor(difference / 1000)
        let remeining = ''
        remeining += hour + ':'
        remeining += minutes + ':'
        remeining += +second
        setRemainingTime(remeining)
        console.log('sasas' + minutes)
        if (minutes % 3 === 0) {
          props.setCarNum(Math.floor(minutes / 3))
        }
        setTimeout(() => countdownTimer(), 1000)
      } else {
        router.replace('/home')
      }
    }
    if (props.nowDate >= props.eventDate && props.nowDate <= props.endTime) {
      countdownTimer()
    }

    setIsJoin(props.isJoin)
  }, [])

  function onChengeJoin(): void {
    isJoin ? setIsJoin(false) : setIsJoin(true)
    // API連携したら参加予約情報を送信
    // fetch(`api/?id=${auctionId}`)
    //   .then((response) => {
    //     response.json().then((data) => {
    //       setAuctionDetail(data)
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('失敗しました')
    //   })
  }

  return [remainingTime, bid, setBid, isJoin, onChengeJoin] as const
}
