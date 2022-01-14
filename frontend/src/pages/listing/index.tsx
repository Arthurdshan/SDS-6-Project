import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard";
import Pagination from "../../components/pagination";
import { BASE_URL } from "../../utils/requests";

const Listing = () => {

    const [pageNumber, setPageNumber] = useState(0);
    
    const getData = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/movies`);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;