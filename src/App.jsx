import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [username, setUsername] = useState('');
    let [loaded, setLoaded] = useState(false);
    const buttonHandler = () => {
        setLoaded(loaded = !loaded)
    }

    useEffect(() => {
        setTimeout(() => {
            if (!loaded) {
                setLoaded(loaded = !loaded)
            }
        }, 3000);
    }, [loaded])

    if (!loaded) {
        return <>
            <h1>Website loading...</h1>
            <button onClick={e => buttonHandler()}>Load This Page</button>
        </>;

    }

    return (
        <>
            <h1>Something simple!</h1>
            <div>
                <Greeter phrase='Hello there' name='Eric' />
                <Greeter phrase='Heya' name='Abby' />
                <Greeter phrase='Sup' name='Daniel' />
            </div>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <p>
                You are logging in as: {username}
            </p>
        </>
    );
}

export default App;