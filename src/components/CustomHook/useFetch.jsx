import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true)
    setData(null)
    setErr(null)

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
            setData(res.data)
            setLoading(false)
        } catch (err) {
            setErr(err)
            setLoading(false)
        }
    };

    fetchData()

  }, [endpoint])

  return { data, loading, err }
};

export default useFetch;
