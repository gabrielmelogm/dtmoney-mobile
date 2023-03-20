import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import config from "../../config"
import { db } from "../firebase"

export type TransactionProps = {
  id?: number
  title: string
  type: "deposit" | "withdraw"
  category: string
  amount: number
  createdAt?: string
  userEmail?: string
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionsContextData = {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const Transactions = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<TransactionProps[]>([])

  useEffect(() => {
    getTransactions()
  }, [])

  async function getTransactions() {
    let data: any = []

    const transactionsList = await getDocs(
      query(collection(db, "transactions"),
        where("userEmail", "==", config.USER_EMAIL)
      )
    )
    transactionsList.forEach((response) => {
      const itemId = response.id
      const itemData = response.data()
      itemData.id = itemId
      return data.push(itemData)
    })

    setTransactions(data)
  }

  async function createTransaction(transactionInput: TransactionInput) {
    const createAt = new Date().toISOString()
    await addDoc(collection(db, "transactions"), {
      title: transactionInput.title,
      type: transactionInput.type,
      category: transactionInput.category,
      amount: transactionInput.amount,
      createdAt: `${createAt}`,
      userEmail: config.USER_EMAIL
    })

    await getTransactions()
  }

  return (
    <Transactions.Provider value={{ transactions, createTransaction }}>
      {children}
    </Transactions.Provider>
  )
}

export function useTransactions() {
  const context = useContext(Transactions)

  return context
}