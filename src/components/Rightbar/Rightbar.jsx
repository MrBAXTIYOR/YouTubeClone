import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import customAxios from "../../service/axios";
import Rigthbarheader from "./Rigthbarheader";
import { useContext } from "../../context/Context";

import "./Rightbar.scss";
import Loader from "../Loader/Loader";

export default function Rightbar() {
  const { setIsLoading, isLoading } = useContext();
  const { vidio, setVidio } = useContext();
  const [bg, setBg] = useState("all");

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await customAxios.get("/trending/", {
        params: {
          lang: "en",
          country: "us",
          section: "Now",
        },
      });
      setVidio(data.videos);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rigthbar_wrapper">
          <Rigthbarheader {...{ bg, setBg }} />
          <div className="cards">{!!vidio?.length && vidio.map((vid) => <Card key={uuidv4()} {...vid} />)}</div>
        </div>
      )}
    </>
  );
}
