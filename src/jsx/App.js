import '../css/App.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import rockBandsData from '../data/mockup';
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <main>
                <Header/>
                <Banner
                    title={'Your 2023 Wrapped'}
                    description={'Unwrap your listening highlights.'}
                    button={'Check it out'}
                />
                <div className="grid">
                    {rockBandsData.map((band, index) => (
                        <Card id={index}
                              cover={band.coverUrl}
                              song={band.songName}
                              artist={band.artist}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
