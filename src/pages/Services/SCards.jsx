/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SCards = ({ service }) => {

    const { id, name, images,image_main, price, short_description, long_description } = service || {};

    return (
        <div className="mt-[50px]">

            <div className="card shadow-xl text-center bg-[#FFF8C9]">

                <figure><img className="w-full h-[300px]" src={image_main} alt="Shoes" /></figure>

                <div className="card-body h-[300px] text-center">

                    {/* <h2> id : {id}</h2> */}

                    <h2 className="card-title text-center justify-center">{name}</h2>

                    <p>{short_description}</p>

                     <p className="font-bold">Price :  {price}$ to {price*10}$ </p>

                   
                    <Link to={`/serviceDetails/${id}` }>

                        <button className="btn btn-primary w-full bg-[#F4E869] text-black">View Details</button>

                    </Link>


                </div>
            </div>

        </div>
    );
};

export default SCards;