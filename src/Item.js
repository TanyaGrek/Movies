import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className="col-sm-6 col-12">
            <div className="card">
                <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500_and_h281_bestv2" + (props.backdrop_path)} alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.overview}</p>
                </div>
                <div className="card-footer text-right">
                    <span className="text-muted">Rating: {props.vote_average} ★</span>
                </div>
            </div>
        </div>
        )
};

export default Item;