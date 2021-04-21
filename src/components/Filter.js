import React from 'react'
import 'css/index.css'

const Filter = ({filters, setFilters}) => {



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
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="Pink" id="pink"></input> <label htmlFor="pink"><span></span>Pink</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="White" id="white"></input> <label htmlFor="White"><span></span>White</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="Grey" id="grey"></input> <label htmlFor="Grey"><span></span>Grey/Green</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="Red" id="red"></input><label htmlFor="Red"><span></span>Red</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="Blue" id="blue"></input> <label htmlFor="Blue"><span></span>Blue/Purple</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="Green" id="blue"></input> <label htmlFor="Green"><span></span>Green</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Season</legend>
              <ul className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="season" value="summer" id="summer"></input> <label htmlFor="summer"><span></span>Summer</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="autumn" id="autumn"></input> <label htmlFor="autumn"><span></span>Autumn</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="winter" id="winter"></input> <label htmlFor="winter"><span></span>Winter</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="spring" id="spring"></input> <label htmlFor="spring"><span></span>Spring</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Number of Blooms/Stalks <br /> (Bulk) </legend>
              <ol className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="2" id="2"></input> <label htmlFor="2"><span></span>2</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="5" id="5"></input> <label htmlFor="5"><span></span>5</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="10" id="10"></input> <label htmlFor="10"><span></span>10</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="12" id="12"></input><label htmlFor="12"><span></span>12</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="16" id="16"></input><label htmlFor="16"><span></span>16</label></li>
              </ol>
            </fieldset>
          </div>
          <fieldset id="sortfield">
            <label htmlFor="sort">Show</label>
        <select name="sort" id="sort" onChange={(event)=>{
          console.log(event.target.value)
              setFilters({
                ...filters,
                
                sortBy: event.target.value
              })
            }}>
          <option value="none" disabled>-- Sort by --</option>
          <option value="lowest">Price, lowest to highest</option>
          <option value="highest">Price, highest to lowest</option>
        </select>
          </fieldset>
        </form>
	)}

export default Filter