import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <div className="card mx-3" style={{ width: '18rem' }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text">{props.parrafo}</p>
                    <a href="#" className="btn btn-primary">Find Out More</a>
                </div>
            </div>

        </div>
    )
}

export default Cards
