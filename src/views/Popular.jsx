
import { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Bars } from "react-loader-spinner";



const Popular = () => {

  const [error, setError] = useState("");
  const [loaderQuery, setLoaderQuery] = useState(false);
  const [query, setQuery] = useState("");
  const [dataQuery, setDataQuery] = useState([]);
  const [dataError, setDataError] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
  };



  useEffect(() => {
    async function findData() {
      try {
        setLoaderQuery(true);
        setDataError("");
        const res = await fetch(
          `https://restcountries.com/v3.1/currency/${query}`
        );
        if (!res.ok) throw new error("Currency can't be found !!!");
        const data = await res.json();
        setDataQuery(data);
        setDataError("");
        console.log(data);
      } catch (err) {
        setDataError(err.message);
      } finally {
        setLoaderQuery(false);
      }
    }
    if (query.length < 3) {
      setDataQuery([]);
      setDataError("");
      return
    }
    findData();
  }, [query]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5 ">
        <div className="input-group input w-75 ">
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            value={query}
            placeholder="search . . ."
          />
        </div>
      </div>

      {loaderQuery && <h5 style={{ color: "rgb(48, 48, 221)",paddingLeft: "10rem", paddingTop: "1.234rem"}}>LOADING RESULT ...</h5>}
      {!dataError && !loaderQuery && <Note note={dataQuery} />}
      {dataError && 
        <div
          style={{
            margin: "auto",
            alignItems: "center",
            paddingLeft: "10rem",
            paddingTop: "1.234rem",
          }}
        >
          <p style={{ color: "brown" }}>No result found</p>
        </div>
      }

    </div>
  );
};


export default Popular;