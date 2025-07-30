import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const CountryDetail = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["countryData"],
    queryFn: () =>
      fetch(`https://restcountries.com/v3.1/name/${id}`).then((res) =>
        res.json()
      ),
  });
  console.log(data);

  return (
    <section className="max-w-7xl mx-auto">
      {isPending && <h2>loading.....</h2>}
      {error && <h2>Error fetching data</h2>}
      <h1>Country Detail Page</h1>
      {/* Additional content for country details will go here */}
    </section>
  );
};

export default CountryDetail;
