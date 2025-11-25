import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayContext";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  const { albumsData, songsData } = useContext(PlayerContext);

  return albumsData ? (
    <>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={album.imageUrl} alt="" className="w-48 rounded" />
      </div>
    </>
  ) : null;
};

export default DisplayAlbum;
