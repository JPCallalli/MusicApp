import { useContext } from "react";
import { PlaylistContext } from "../context/playlistContext";
import Reproductor from "./Reproductor";

const PlaylistItems = () => {
  const { playlistItems } = useContext(PlaylistContext);

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
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {playlistItems.map((playlist) => (
                      <tr key={playlist.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={playlist.album.cover_medium}
                                width="40"
                                height="40"
                                alt="Imagen álbum"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{playlist.title}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {playlist.artist.name}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {playlist.album.title}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-center">
                            {playlist.duration}
                          </div>
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
      <Reproductor />
    </>
  );
};

export default PlaylistItems;
