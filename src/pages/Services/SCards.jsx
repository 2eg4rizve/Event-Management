/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SCards = ({ service }) => {

    const { id, name, images, price, short_description, long_description } = service || {};

    return (
        <div>

            <div className="card   bg-base-100 shadow-xl">

                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}

                <div className="card-body">

                    <h2> id : {id}</h2>

                    <h2 className="card-title">{name}</h2>

                    <h2 className="card-title">Price : {price} $</h2>
                    <p>{short_description}</p>

                    {/*  <Link to = {`/viewrecipes/${id}`} > */}
                    <Link to={`/serviceDetails/${id}`}>

                        <button className="btn btn-primary">View Details</button>

                    </Link>


                </div>
            </div>

        </div>
    );
};

export default SCards;