import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function useTransaction() {
  const [date, setDate] = useState<string>('')
  const [transaction, setTransaction] = useState<number>(0)
  const router = useRouter()

  function getDate(e: string): void {
    setDate(e)
  }

  function getTransaction(e: number): void {
    setTransaction(e)
  }

  async function onPostClick() {
    // const response = await fetch(
    //   `api/auctionList?delivery_method=${transaction}&delivery_time=${date}`,
    //   { method: 'POST' },
    // )

    router.push('/home')
  }

  return [date, transaction, getDate, getTransaction, onPostClick] as const
}
