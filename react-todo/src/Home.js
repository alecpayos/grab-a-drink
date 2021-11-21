import { useEffect } from 'react';
import { todos } from './eventHandlers';
import './Home.css'

const Home = () => {
    let emptyListCheck = todos.length === 0 ? true : false;
    let test = window.localStorage;
    console.log(todos);
    return (
        <div className="overview">
            {emptyListCheck && <h2 className="free">Yaaay! Looks like you're free today!</h2>}
            {todos.map(item => (
                <div className="item-container">
                    <h3>{item.title}</h3>
                    <h2>{item}</h2>
                </div>
            ))}
        </div>
    );
}

export default Home;