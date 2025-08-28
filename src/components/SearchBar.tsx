

interface SearchBarProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

function SearchBar({ searchText, setSearchText }: SearchBarProps) {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Vilken film letar du efter? " 
                />

        </div>
    );
}

export default SearchBar;