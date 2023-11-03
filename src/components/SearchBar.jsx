const SearchBar = ({handleChange}) => {

    return (
        <>
        <span>Search: </span><input onChange={handleChange}></input>
        </>
    )
}

export default SearchBar