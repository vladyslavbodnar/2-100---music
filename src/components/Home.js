import { useState, useEffect } from "react"
import SongList from "./SongList"


function Home({songs, playSong}) {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        createGreeting();
    }, [])

    const createGreeting = () => {
        const date = new Date();
        const hour = date.getHours();
        if(hour >= 0 && hour < 6) {
            setGreeting("Good night")
        }
        if(hour >= 6 && hour < 12) {
            setGreeting("Good Morning")
        }
        if(hour >= 12 && hour < 18) {
            setGreeting("Good Afternoon")
        }
        if(hour >= 18) {
            setGreeting("Good evening")
        }
    }

    return (
        <div className="home">
            <h2 className="home__greetings">
                {greeting}
            </h2>
            <SongList songs={songs} playSong={playSong} />
        </div>
    )
}

export default Home
