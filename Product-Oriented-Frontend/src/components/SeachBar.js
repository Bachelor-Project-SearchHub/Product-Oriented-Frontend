import Button from "./Button"

const SearchBar = ({ onClick, setSearchTerm }) => {
    return (
        <div>
            <input type="text" 
            placeholder="Seach..."
            onChange={(event) => {setSearchTerm(event.target.value)}}
            />
            <Button text={'Søg'} color={'salmon'} onClick={onClick}/>
        </div>
    )
}

export default SearchBar

