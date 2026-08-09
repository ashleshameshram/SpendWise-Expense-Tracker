import React from 'react'
import TransactionItem from "./TransactionItem";

export default function TransactionList({transactions, onDelete, onEdit}) {
    return(
        <>
            {transactions.map((transaction) => (
                <TransactionItem key={transaction.id}
                transaction={transaction} onDelete={onDelete} onEdit={onEdit}/>
            ))}     
        </>
    );
}