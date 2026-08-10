import { useState } from "react";
import SearchTransaction from "./SearchTransaction";
import TransactionList from "./TransactionList";
import DeleteModal from "../Common/DeleteModal";
import './RecentTransaction.css'

export default function RecentTransaction({ transactions , onDelete, onEdit}) {
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [viewAll, setViewAll] = useState(false);

    // searching,sorting and filtering expense
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("Newest");

    let filteredTransactions = [...transactions];
    //transaction search
    filteredTransactions = filteredTransactions.filter((t) =>   
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    );
    //search by category
    if(category !== ""){
        filteredTransactions = filteredTransactions.filter((t) => t.category === category);
    }
    //sort by oldest or newest
    filteredTransactions.sort((a,b) => sort ==="Newest" ? b.id - a.id : a.id - b.id);

    //View All
    const Limit = 4;
    const visibleTransaction = viewAll ? filteredTransactions : filteredTransactions.slice(0, Limit);
    const allTransactions = transactions;

    return(
        <div className="m-4 recent-transactions border border-secondary rounded-4 p-4">
            <div className="recent-header"  style={{display:"flex", justifyContent:"space-between"}}>
                <h3>Recent Transaction</h3>
                {true  && (
                    <div className="text-center">
                        <button  className="btn text-white btn-sm bg-primary"
                        onClick={() => setViewAll(!viewAll)}>
                            View All
                        </button>
                    </div>
                )}
            </div>
            <DeleteModal deleteTarget={deleteTarget} onDelete={(id) => {
                    onDelete(id);          // delete from ExpenseHomePage
                    setDeleteTarget(null); // close modal
                }}
                onCancel={() => setDeleteTarget(null)}
            /> 

            <div className="recent-body">
                <SearchTransaction search={search} setSearch={setSearch} category={category} 
                setCategory={setCategory} sort={sort} setSort={setSort}/>

                {allTransactions.length === 0 ? (
                        <p className=" text-primary text-center py-4 fs-2">
                            <i className="bi bi-arrow-down-up"></i>&nbsp;
                            Make your first transaction!
                        </p>
                    ): filteredTransactions.length === 0 ? (
                        <p className=" text-primary text-center py-2 fs-4">
                        {search  && category 
                            ? "No transactions match your search and selected category"
                            : search 
                            ? "No transactions found for your search"
                            : category 
                            ? "No transactions found in the selected category"
                            : "No transaction found"
                        }
                        </p>
                    ) :
                <TransactionList transactions={visibleTransaction} 
                onEdit={onEdit} onDelete={setDeleteTarget}/>
                }
                
            </div>
            
        </div>
    )
}