import React from 'react'
import {useGlobalContext} from "../../context/VariableContext"
import "./SearchBar.css"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar:React.FC=()=> {
    const {searchedText,setSearchedText } = useGlobalContext()
  return (
    <div> <div className='searchBarContainer' >
        <AiOutlineSearch />
        <input className="searchBarStyle" type="text" value={searchedText} placeholder="Kurs suchen" onChange={(e)=>setSearchedText(e.target.value)}/></div></div>
  )
}
export default SearchBar;