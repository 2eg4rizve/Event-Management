
import { useEffect, useState } from "react";
import SCards from "./SCards";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch("servicesdata.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    // console.log(services)

    return (
        <div className="mt-[50px]">
            {/* <p> Services page : {services.length}</p> */}

            <h1 className="text-5xl font-bold text-center">Services</h1>

            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7">

                {
                    services.map(service => <SCards key={service.id} service={service}></SCards>)


                }







            </div>

        </div>
    );
};

export default Services;