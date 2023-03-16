import { createContext, ReactNode, useContext, useEffect, useState } from "react"

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

  function getTransactions() {
    const data: TransactionProps[] = [
      {
        id: 1,
        amount: 12000,
        category: "Vendas",
        title: "Desenvolvimento de site",
        type: "deposit",
        createdAt: new Date().toISOString(),
        userEmail: "melogoncalvesbiel@gmail.com"
      },
      {
        id: 2,
        amount: 59,
        category: "Alimentação",
        title: "Hamburgueria Pizzy",
        type: "withdraw",
        createdAt: new Date().toISOString(),
        userEmail: "melogoncalvesbiel@gmail.com"
      },
      {
        id: 3,
        amount: 1200,
        category: "Casa",
        title: "Aluguel do apartamento",
        type: "withdraw",
        createdAt: new Date().toISOString(),
        userEmail: "melogoncalvesbiel@gmail.com"
      },
    ]
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