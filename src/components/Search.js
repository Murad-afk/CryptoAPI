import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h1 className="search-h1">
            Search a currency
        </h1>
        <input onChange={e=> setSearch(e.target.value)} type="text" className='search-input'/>
    </div>
  )
}

export default Search