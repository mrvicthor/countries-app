import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import Header from "./header";
const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["countryData"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/independent?status=true").then(
        (res) => res.json()
      ),
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  console.log({ data });
  return (
    <>
      <Header />
      <section className="px-4 mt-8">
        <section className="max-w-7xl mx-auto flex justify-between items-center">
          <div className=" w-xl shadow-md flex gap-2 items-center py-3 px-4 bg-white rounded-md">
            <FaSearch />
            <input
              className="outline-none flex-1"
              placeholder="Search for a country..."
            />
          </div>
          <button className="w-48 shadow-md py-3 px-4">
            Filter by Region <MdKeyboardArrowUp />
          </button>
        </section>
      </section>
    </>
  );
};

export default Home;
