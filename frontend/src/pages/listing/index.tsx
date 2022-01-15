import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard";
import Pagination from "../../components/pagination";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

const Listing = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`);
            const data = response.data as MoviePage;
            setPage(data);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, [pageNumber]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {
                        page.content.map(movie =>
                        (
                            <div key={movie.id} className="col-sm-6  col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                        )}
                </div>
            </div>
        </>
    );

}
export default Listing;