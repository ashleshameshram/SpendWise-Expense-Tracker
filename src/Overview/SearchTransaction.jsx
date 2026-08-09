import React from 'react'

export default function SearchTransaction({search,setSearch,category,setCategory,sort,setSort}){
    return (
        <>
            <div className="row">
                <div className="col">
                    <input className='rounded-2 text-truncate form-control' id='search-Trans' 
                    placeholder="Search Transaction" value={search} 
                    onChange={(e) => setSearch(e.target.value)}>
                    </input>
                </div>

                <div className="col">
                    <select className="form-control" value={category} 
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

                <div className="col">
                    <select className="form-control" value={sort} 
                    onChange={(e) => setSort(e.target.value)} >
                        <option disabled value="">Sort by: Newest</option>
                        <option value="Oldest">Sort by: Older</option>
                        <option value="Newest">Sort by: Newest</option>
                    </select>
                </div>
            </div>
        </>
    )
}