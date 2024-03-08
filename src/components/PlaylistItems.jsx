import { useContext, useState } from "react";
import { PlaylistContext } from "../context/playlistContext";
import Reproductor from "./Reproductor";

const PlaylistItems = () => {
  const { playlistItems } = useContext(PlaylistContext);
  const [list, setList] = useState([]);
  const [isplaying, setisplaying] = useState(false);

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
                        <div className="font-semibold text-center">. . .</div>
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

                              <button className="hover:scale-110 text-white transform opacity-0 translate-x-2.5 -translate-y-7 group-hover:opacity-100 transition">
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
                          <div className="text-left text-white">{playlist.title}</div>
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
                            {playlist.duration}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <button className="text-sm text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              viewBox="20 20 384 512"
                            >
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
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
      {/* <Reproductor list={list}/> */}
    </>
  );
};

export default PlaylistItems;
