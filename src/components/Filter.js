import React from 'react'
import 'css/index.css'

const Filter = ({filters, setFilters}) => {  

  const HandleColours = (event) => {
    setFilters({
      ...filters,
      colour: event.target.value
    })
  }

	return(

		<form className="filters">
          <h2>Filters</h2>
          <div className="filter-options">
          <fieldset>
            <legend>Search</legend>
          <input type="search" value={filters.query} onChange={(event)=>{
              setFilters({
                ...filters,
                query: event.target.value
              })
            }} />
        </fieldset>
            <fieldset>
              <legend>Colour</legend>
              <ul className="filter-list">
                <li><input type="radio" className="checkboxLotus" name="colour" value="all" id="all" onChange={HandleColours} checked={(filters.colour === `all`) ? true : false}></input><label htmlFor="all"><span></span>All Colours</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="Pink" id="pink" onChange={HandleColours}></input> <label htmlFor="pink"><span></span>Pink</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="White" id="white" onChange={HandleColours}></input> <label htmlFor="white"><span></span>White</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="Green" id="green" onChange={HandleColours}></input> <label htmlFor="green"><span></span>Grey/Green</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="Red" id="red" onChange={HandleColours}></input><label htmlFor="red"><span></span>Red</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="Blue" id="blue" onChange={HandleColours}></input> <label htmlFor="blue"><span></span>Blue/Purple</label></li>
                <li><input type="radio" className="checkboxLotus" name="colour" value="Yellow" id="yellow" onChange={HandleColours}></input> <label htmlFor="yellow"><span></span>Yellow/Orange</label></li>
              </ul>
            </fieldset>
          </div>
          <fieldset id="sortfield">
            <label htmlFor="sort">Show</label>
          <select name="sort" id="sort" defaultValue={filters.sortBy} onChange={(event)=>{
          console.log(event.target.value)
              setFilters({
                ...filters,
                
                sortBy: event.target.value
              })
            }}>
          <option value="none">-- Sort by --</option>
          <option value="lowest">Price, lowest to highest</option>
          <option value="highest">Price, highest to lowest</option>
        </select>
          </fieldset>
        </form>
	)}

export default Filter