import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'


const Filters = () => {


	return(

		<form className="filters">
          <h2>Filters</h2>

          <div className="filter-options">
            <fieldset>
              <legend>Colour</legend>
              <ul className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="pink" id="pink"></input> <label htmlFor="pink"><span></span>Pink</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="white" id="white"></input> <label htmlFor="white"><span></span>White</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="grey" id="grey"></input> <label htmlFor="grey"><span></span>Grey/Green</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="red" id="red"></input><label htmlFor="red"><span></span>Red</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="blue" id="blue"></input> <label htmlFor="blue"><span></span>Blue/Purple</label></li>
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
        {/* style="margin-right: 20px;" */}
            <select name="sort" id="sort">
              <option value="price-high">Price, highest to lowest</option>
              <option value="price-low">Price, lowest to highest</option>
              <option value="newest">Newest releases</option>
            </select>
          </fieldset>
        </form>
	)}

export default Filters