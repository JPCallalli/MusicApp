import { useEffect, useState, useRef } from "react";
import { servicioDeezer } from "../services/servicioDeezer";
import { useContext } from "react";
import { PlaylistContext } from "../context/playlistContext";
import AlbumSlider from "./AlbumSlider";
import Reproductor from "./Reproductor";

export default function Card() {
  const [tracks, setTracks] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [search, setSearch] = useState("drexler");
  const [cancion, setCancion] = useState({
    id: 1062775862,
    readable: true,
    title: "The Moon Represents My Heart",
    title_short: "The Moon Represents My Heart",
    title_version: "",
    link: "https://www.deezer.com/track/1062775862",
    duration: 147,
    rank: 111029,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      "https://cdns-preview-d.dzcdn.net/stream/c-de6a1b5c7d1c003d8263d65784fdc234-3.mp3",
    md5_image: "26e0eb9f63a5d347136c129a836908d9",
    artist: {
      id: 5238090,
      name: "Drexler",
      link: "https://www.deezer.com/artist/5238090",
      picture: "https://api.deezer.com/artist/5238090/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/bab5d13647c9cf0bf85fc1a1c855f1aa/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/bab5d13647c9cf0bf85fc1a1c855f1aa/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/bab5d13647c9cf0bf85fc1a1c855f1aa/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/bab5d13647c9cf0bf85fc1a1c855f1aa/1000x1000-000000-80-0-0.jpg",
      tracklist: "https://api.deezer.com/artist/5238090/top?limit=50",
      type: "artist",
    },
    album: {
      id: 169628632,
      title: "The Moon Represents My Heart",
      cover: "https://api.deezer.com/album/169628632/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/26e0eb9f63a5d347136c129a836908d9/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/26e0eb9f63a5d347136c129a836908d9/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/26e0eb9f63a5d347136c129a836908d9/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/26e0eb9f63a5d347136c129a836908d9/1000x1000-000000-80-0-0.jpg",
      md5_image: "26e0eb9f63a5d347136c129a836908d9",
      tracklist: "https://api.deezer.com/album/169628632/tracks",
      type: "album",
    },
    type: "track",
  });
  const [isplaying, setisplaying] = useState(false);

  const audio = useRef();
  
  useEffect(() => {
    if (isplaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isplaying]);

  const handlePlay = (track)=>{
    setCancion(track);
    if (isplaying) {
      setisplaying(false);
    } else {
      setisplaying(true);
    }
  }

  const onPlaying = () =>{
    const duracion = audio.current.duration;
    const currentTime = audio.current.currentTime;
    console.log(duracion , currentTime);
  }

  const RealizarBusqueda = () => {
    setSearch(busqueda);
    setBusqueda("");
  };

  useEffect(() => {
    servicioDeezer(`${import.meta.env.VITE_ENDPOINT_BASE}`, `${search}`)
      .then((res) => {
        setTracks(res);
        console.log(res);
      })
      .catch((err) => {
        console.log("Error al obtener los datos");
      });
  }, [search]);

  const { addPlaylistItem } = useContext(PlaylistContext);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-4 mb-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar Artista, Álbum, Canción..."
            required=""
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => RealizarBusqueda()}
          >
            Buscar
          </button>
        </div>
      </div>
      {/* Slider de Albums */}
      <div className=" h-80 flex justify-around">
        <div className="mx-20">
          <AlbumSlider />
        </div>
        <aside className="w-full border-sky-100 mx-10 relative flex justify-around">
          <div className="flex items-center justify-center bg-gray-900 absolute">
            {/* Card */}
            <a
              className="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group"
              href=""
            >
              {/* Image Cover */}
              <img
                src="https://picsum.photos/250/250"
                className="w-full rounded shadow"
              />
              {/* Title */}
              <h3 className="text-gray-200 font-bold mt-5"> Top 50 - Global</h3>
              {/* Description */}
              <p className="text-gray-400 font-light mt-2 text-xs">
                {" "}
                Your daily update of the most played track from around the
                world...
              </p>
            </a>
          </div>
        </aside>
      </div>
      {/* Cards de Música */}
      <div className=" container grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 justify-items-center justify-center gap-3 mt-10 mx-10">
        {tracks.map((track) => (
          <div className="bg-gray-900 shadow-lg rounded p-3" key={track.id}>
            <div className="group relative">
              <img
                className="md:w-72 block rounded"
                src={track.album.cover_medium}
                alt="Album Foto"
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  onClick={() => addPlaylistItem({ ...track })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>

                <button
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  onClick={() => handlePlay(track)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                </button>

                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className=" w-24 truncate text-white text-lg">
                {track.title}
              </h3>
              <p className="w-24 truncate text-gray-400">{track.artist.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Previous Button */}
        <button
          href="#"
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        {/* Next Button */}
        <button
          href="#"
          className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
      {/* Reproductor */}
      <audio src={cancion.preview} ref={audio} onTimeUpdate={onPlaying} />
      <Reproductor 
      cancion={cancion}
      isplaying={isplaying}
      setisplaying={setisplaying}
      />
    </>
  );
}
