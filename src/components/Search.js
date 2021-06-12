import SongList from "./SongList";

function Search({songs, onChange, inputValue, playSong}) {

    return (
        <div className="search">
            <input type="text" onChange={(e) => onChange(e)} value={inputValue} className="search__input"/>
            {songs && <SongList songs={songs} playSong={playSong} />}
            {!songs.length && inputValue && <p>Not found</p>}
        </div>
    )
}

export default Search
