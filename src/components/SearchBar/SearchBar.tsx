import React from 'react'
import {useGlobalContext} from "../../context/VariableContext"
export default function SearchBar() {
    const {searchedText,setSearchedText } = useGlobalContext()
  return (
    <div> <input type="text" value={searchedText} onChange={(e)=>setSearchedText(e.target.value)}/></div>
  )
}
