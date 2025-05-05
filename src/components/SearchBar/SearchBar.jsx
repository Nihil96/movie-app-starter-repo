import SearchIcon from "../../images/search-icon.svg?react"
import "./SearchBar.scss"
import PropTypes from "prop-types"

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value)
  }

  return (
    <div className="search-container">
      <div className="search">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func,
}

export default SearchBar
