import { collection, getDocs } from "firebase/firestore"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
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

    const transactionsList = await getDocs(collection(db, "transactions"))
    transactionsList.forEach((response) => {
      const itemId = response.id
      const itemData = response.data()
      itemData.id = itemId
      if (itemData.userEmail === "melogoncalvesbiel@gmail.com") return data.push(itemData)
    })

    setTransactions(data)
  }

  async function createTransaction(transactionInput: TransactionInput) {
      const data: TransactionProps = {
        id: 4,
        amount: transactionInput.amount,
        category: transactionInput.category,
        title: transactionInput.title,
        type: transactionInput.type,
        userEmail: transactionInput.userEmail,
        createdAt: new Date().toISOString()
      }

      setTransactions([...transactions, data])
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