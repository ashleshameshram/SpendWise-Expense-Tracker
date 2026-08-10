import React from 'react'

export default function SearchTransaction({search,setSearch,category,setCategory,sort,setSort}){
    return (
        <>
            <div className="row search-transaction-row">
                <div className="col search-col">
                    <input className='rounded-2 form-control text-truncate' id='search-Trans' 
                    placeholder="Search Transaction" value={search} 
                    onChange={(e) => setSearch(e.target.value)}>
                    </input>
                </div>

                <div className="col filter-col">
                    <div className="select-icon-wrapper">
                        <i className="bi bi-funnel select-overlay-icon"></i>
                        <select className="form-control filter-select text-truncate" value={category} 
                        onChange={(e) => setCategory(e.target.value)}>
                            <option disabled value="">Filter by Category</option>
                            <option value="">All Categories</option>
                            <option value="Food">Food</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Bills">Bills</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Salary">Salary</option>
                            <option value="Transport">Transport</option>
                        </select>
                    </div>
                </div>

                <div className="col sort-col">
                    <div className="select-icon-wrapper">
                        <i className="bi bi-arrow-down-up select-overlay-icon"></i>
                        <select className="form-control sort-select text-truncate" value={sort} 
                        onChange={(e) => setSort(e.target.value)} >
                            <option disabled value="">Sort by: Newest</option>
                            <option value="Oldest">Sort by: Older</option>
                            <option value="Newest">Sort by: Newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}