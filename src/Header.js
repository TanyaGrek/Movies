import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import PopularTV from './PopularTV';

const history = createBrowserHistory();

const Header = () => {
    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/movies" className="nav-link">Now Playing Movies</Link></li>
                                <li className="nav-item"><Link to="/popular-tv" className="nav-link">Popular TV</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route exact path="/movies" component={App} />
                <Route path="/popular-tv" component={PopularTV} />
            </div>

        </Router>
    )
};

export default Header;