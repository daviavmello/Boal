import { server } from "../config";
import { useState, useEffect } from "react";

const useSoccerData = () => {
  const [soccerData, setSoccerData] = useState([]);

  useEffect(() => {
    async function fetchSoccerData() {
      try {
        const res = await fetch(`${server}/api/hello`);
        const data = await res.json();
        setSoccerData(data);
      } catch (e) {
        error = e.toString();
      }
    }
    fetchSoccerData();
  }, []);
  return [soccerData];
};

export default useSoccerData;
