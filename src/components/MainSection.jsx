import { useState, useEffect } from "react";
import axios from "axios";
import AlbumbItem from "./AlbumItem";

const MainSection = () => {
  const [albums, setAlbumbs] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomePageData = async () => {
    try {
      const res = await axios.get("https://saavn.dev/modules?language=hindi,english");
      const { data } = res.data;
      setAlbumbs(data.albumbs || []);
      setTrending(data.trending || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, e.g., set state to an empty array or show an error message.
      setAlbumbs([]);
      setTrending([]);
    }
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return <div>
      {
        albums?.map((album) => <AlbumbItem key={album.id} {...album} />)
      }
  </div>;
};

export default MainSection;
