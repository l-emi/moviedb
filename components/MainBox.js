import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class MainBox extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    componentWillMount() {
        this.search();
    }
    
    updateSearch() {
        this.search(this.refs.query.value);
    }
    
    search(query = "indiana jones") {
        var url = "//www.omdbapi.com?s=" + query + "&y=&i=&r=json";
        Request.get(url).then((data) => {
            this.setState({
                movies: data.body.Search
            });
        });
    }
    
    render() {
        let movies = _.map(this.state.movies, (movie) => {
            return (
                <div>
                    <li>
                        <a href={"http://www.imdb.com/title/" + movie.imdbID} target="_blank">
                            <div className="title" >
                                <p>{movie.Title}</p>
                            </div>
                            <div className="year">
                                <p>{movie.Year}</p>
                            </div>
                        </a>
                    </li>
                </div>
            );
        })
        return (
            <div id="mainbox">
                <input
                    id="input-text"
                    type="text"
                    placeholder="Search for a movie or show!"
                    ref="query"
                    onChange={(e) => {this.updateSearch();}} />
                
                <div id="results">
                    <ul>{movies}</ul>
                </div>
            </div>
        );
    }
}

export default MainBox;