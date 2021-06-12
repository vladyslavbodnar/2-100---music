import analyze from 'rgbaster'



function SongList({songs, playSong}) {
    return (
        <div className="song-list">
            {songs ? (
                songs.map(song => (
                        <div className="song" key={song.id} onClick={() => playSong(song.id)}>
                            <img src={song.image} alt={song.title} className="song__image" />
                            <p className="song__title">{song.title}</p>
                            <p className="song__author">{song.author}</p>
                        </div>
                    ))
            ) : <p>No songs</p>}
        </div>
    )
}

export default SongList
