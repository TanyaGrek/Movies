import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Item from './Item'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            page: '',
            total_pages: '',
            total_results: '',
            url: ''
        };
    }

    componentWillMount() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4074708c4ee343f8c4692b40df55ae8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res => {
                const movies = res.data.results;
                const page = res.data.page;
                const total_pages = res.data.total_pages;
                const total_results = res.data.total_results;
                const url = `https://api.themoviedb.org/3/discover/movie?api_key=4074708c4ee343f8c4692b40df55ae8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;
                this.setState({ movies, page, total_pages, total_results, url });
            });
    }
    handleSearch(e) {
        let search = e.target.value;
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4074708c4ee343f8c4692b40df55ae8d&language=en-US&query=` + search + `&page=1&include_adult=false`)
            .then(res => {
                const movies = res.data.results;
                const page = res.data.page;
                const total_pages = res.data.total_pages;
                const total_results = res.data.total_results;
                const url = `https://api.themoviedb.org/3/search/movie?api_key=4074708c4ee343f8c4692b40df55ae8d&language=en-US&query=` + search + `&include_adult=false&page=`;
                this.setState({ movies, page, total_pages, total_results, url });
            });
    };
    handleClick(e) {
        e.preventDefault();
        let goPage = (e.target.dataset.page);
        axios.get(this.state.url + goPage)
            .then(res => {
                const movies = res.data.results;
                const page = res.data.page;
                const total_pages = res.data.total_pages;
                const total_results = res.data.total_results;
                this.setState({ movies, page, total_pages, total_results });
            });
        window.scrollTo(0,0);
    };

  render() {
    return (
        <div>
            <div className="Movies container pt-5">
                <header className="Movies-header text-center">
                    <h1 className="">Now playing movies</h1>
                </header>
                <form  className="mt-5 mb-3">
                    <div className="form-row justify-content-center">
                        <div className="col-5">
                            <input type="text" className="form-control" placeholder="Search..." onKeyUp={this.handleSearch.bind(this)}/>
                        </div>
                    </div>
                </form>
                <div className="card-deck row">
                    {this.state.movies.map((movie) =>
                        <Item
                            movie={movie}
                            name={movie.original_title}
                            key={movie.id}
                            overview={movie.overview}
                            backdrop_path={movie.backdrop_path}
                            vote_average={movie.vote_average}>
                        </Item>
                    )}
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {(this.state.page > 1)?(<li className="page-item"><a className="page-link" href={"page="+ (this.state.page - 1)} data-page={this.state.page - 1} onClick={this.handleClick.bind(this)}>{this.state.page - 1}</a></li> ):''}
                        <li className="page-item disabled"><a className="page-link" href="" data-page={this.state.page} onClick={this.handleClick.bind(this)}>{this.state.page}</a></li>
                        {(this.state.page >= this.state.total_pages-1)?'':(<li className="page-item"><a className="page-link" href={"page="+ (this.state.page + 1)} data-page={this.state.page + 1} onClick={this.handleClick.bind(this)}>{this.state.page + 1}</a></li>)}
                        {(this.state.page >= this.state.total_pages-2)?'':(<li className="page-item disabled"><a className="page-link" href="">...</a></li>)}
                        {(this.state.page === this.state.total_pages)?'':(<li className="page-item"><a className="page-link" href={"page="+ this.state.total_pages} data-page={this.state.total_pages} onClick={this.handleClick.bind(this)}>{this.state.total_pages}</a></li>)}
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}

export default App;
