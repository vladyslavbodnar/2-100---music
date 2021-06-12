import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Player from "./components/Player";

function App() {
    const [songs, setSongs] = useState([
        {
            id: 1,
            title: "Deep Thoughts",
            author: "NEFFEX",
            source: "./assets/music/neffex-deep-thoughts.mp3",
            image: "./assets/images/neffex-deep-thoughts.jpg",
        },
        {
            id: 2,
            title: "Grateful",
            author: "NEFFEX",
            source: "./assets/music/neffex-grateful.mp3",
            image: "./assets/images/neffex-grateful.jpg",
        },
        {
            id: 3,
            title: "Greatest",
            author: "NEFFEX",
            source: "./assets/music/neffex-greatest.mp3",
            image: "./assets/images/neffex-greatest.jpg",
        },
        {
            id: 4,
            title: "Trapped in a Nightmare",
            author: "NEFFEX",
            source: "./assets/music/neffex-trapped-in-a-nightmare.mp3",
            image: "./assets/images/neffex-trapped-in-a-nightmare.jpg",
        },
        {
            id: 5,
            title: "What's up",
            author: "NEFFEX",
            source: "./assets/music/neffex-whats-up.mp3",
            image: "./assets/images/neffex-whats-up.jpg",
        },
        {
            id: 6,
            title: "Lost Not Found",
            author: "NEFFEX",
            source: "./assets/music/neffex-lost-not-found.mp3",
            image: "./assets/images/neffex-lost-not-found.jpg",
        },
        {
            id: 7,
            title: "Broken Dreams",
            author: "NEFFEX",
            source: "./assets/music/neffex-broken-dreams.mp3",
            image: "./assets/images/neffex-broken-dreams.jpg",
            favorite: false,
        },
        {
            id: 8,
            title: "Mirror",
            author: "NEFFEX",
            source: "./assets/music/neffex-mirror.mp3",
            image: "./assets/images/neffex-mirror.jpg",
            favorite: false,
        },
        {
            id: 9,
            title: "Numb",
            author: "NEFFEX",
            source: "./assets/music/neffex-numb.mp3",
            image: "./assets/images/neffex-numb.jpg",
            favorite: false,
        },
        {
            id: 10,
            title: "Lose My Mind",
            author: "NEFFEX",
            source: "./assets/music/neffex-lose-my-mind.mp3",
            image: "./assets/images/neffex-lose-my-mind.jpg",
            favorite: false,
        }
    ]);

    const [currentSong, setCurrentSong] = useState();

    const prevSong = () => {
      const currentSongIndex = songs.findIndex(song => song === currentSong);
      if (currentSongIndex === 0) {
        return setCurrentSong(songs[songs.length - 1])
      }
      setCurrentSong(songs[currentSongIndex - 1]);
    }

    const nextSong = () => {
      const currentSongIndex = songs.findIndex(song => song === currentSong);
      if (currentSongIndex === songs.length - 1) {
        return setCurrentSong(songs[0]);
      }
      setCurrentSong(songs[currentSongIndex + 1]);
    }

    const playSong = (id) => {
      const song = songs.find(song => song.id === id);
      if(song === currentSong) {
        
      }
      setCurrentSong(song);
    }

    const [searchSongs, setSearchSongs] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const handleSearchSong = (e) => {
      const searchSong = e.target.value.toLowerCase();

      setSearchInputValue(searchSong)

      let result = songs.filter(song => `${song.title} ${song.author}`.toLowerCase().includes(searchSong));
      
      setSearchSongs(result);

    }


    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Home songs={songs} playSong={playSong} />
                    </Route>
                    <Route path="/search">
                        <Search songs={searchSongs} onChange={handleSearchSong} inputValue={searchInputValue} playSong={playSong} />
                    </Route>
                </Switch>
                {currentSong && <Player currentSong={currentSong} prevSong={prevSong} nextSong={nextSong} />}
                <NavBar />
            </div>
        </Router>
    );
}

export default App;
