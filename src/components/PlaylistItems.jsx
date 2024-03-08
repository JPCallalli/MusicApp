import { useContext, useState, useRef, useEffect } from "react";
import { PlaylistContext } from "../context/playlistContext";
import Reproductor from "./Reproductor";

const PlaylistItems = () => {
  const { playlistItems, setPlaylistItems } = useContext(PlaylistContext);
  const [isplaying, setisplaying] = useState(false);
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
    currentTime: 10,
    duracion: 100,
    progreso: 25,
  });


  const audio = useRef();

  useEffect(() => {
    if (isplaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isplaying]);

  const handlePlay = (playlist) => {
    setCancion(playlist);
    setisplaying(false);
    if (isplaying) {
      setisplaying(false);
    } else {
      setisplaying(true);
    }
  };

  const eliminarPlaylistItem = id => {
    const confirmacion = confirm('Desea eliminar de Favoritos?')
    if(confirmacion){
      const ListaActualizada = playlistItems.filter(playlistItem => playlistItem.id !== id);
    setPlaylistItems(ListaActualizada);
    }
  }


  const onPlaying = () => {
    const duracion = audio.current.duration;
    const currentTime = audio.current.currentTime;
    setCancion({
      ...cancion,
      duracion: duracion,
      currentTime: currentTime,
      progreso: (currentTime / duracion) * 100,
    });
  };

  return (
    <>
      <section className="antialiased bg-gray-900 text-gray-600 px-4">
        <div className="flex flex-col justify-center h-full">
          {/* <!-- Table --> */}

          <div className="w-full mx-auto bg-gray-900 shadow-lg rounded-sm">
            <header className="px-5 py-4">
              <h2 className="font-semibold text-gray-100">Favoritos</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold text-gray-100 bg-gray-900 border-b">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left"></div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Título</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Artista</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Álbum</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Duración
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {playlistItems.map((playlist) => (
                      <tr key={playlist.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="group w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={playlist.album.cover_medium}
                                width="40"
                                height="40"
                                alt="Imagen álbum"
                              />

                              <button
                                className="hover:scale-110 text-white transform opacity-0 translate-x-2.5 -translate-y-7 group-hover:opacity-100 transition"
                                onClick={() => handlePlay(playlist)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-play-circle-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left text-white">
                            {playlist.title}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left text-white">
                            {playlist.artist.name}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {playlist.album.title}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-sm text-center text-white">
                            {(parseFloat(playlist.duration) / 60).toFixed(2)}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <button 
                          className="text-sm text-center"
                          onClick={() => eliminarPlaylistItem(playlist.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              width="17.5"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="#ff0000"
                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reproductor */}
      <audio src={cancion.preview} ref={audio} onTimeUpdate={onPlaying} />
      <Reproductor
        cancion={cancion}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audio={audio}
      />
    </>
  );
};

export default PlaylistItems;
