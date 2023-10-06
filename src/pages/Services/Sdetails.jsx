import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Sdetails = () => {

    const [findService, setFindService] = useState();

    const { id } = useParams();

    // console.log(id);

    const services = useLoaderData();

    // console.log(services)

    useEffect(() => {
        const rec = services.find(service => service.id == id);

        setFindService(rec);

    }, [id, services])


    console.log("Find Service ", findService);

    const { name, images, price, short_description, long_description } = findService || {};

    return (
        <div>

            Service Details : {id};

            <div className="text-5xl text-center font-bold">
                {name}

            </div>

            <p className="mt-[50px]" >{long_description}</p>







        </div>
    );
};

export default Sdetails;