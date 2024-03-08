import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { PlaylistContext } from "../context/playlistContext";

const Reproductor = ({ cancion, isplaying, setisplaying, audio }) => {
  const { playlistItems, addPlaylistItem } = useContext(PlaylistContext);

  const barraRef = useRef();

  const SaltarBarra = (e) => {
    let barra = barraRef.current.clientWidth;
    const saltobarra = e.nativeEvent.offsetX;

    const saltoProgreso = (saltobarra / barra) * 100;
    audio.current.currentTime = (saltoProgreso / 100) * cancion.duracion;
  };


  return (
    <footer className="h-full rounded-lg shadow m-4 bg-gray-800 sticky bottom-0 flex justify-around">
      <div className="bg-gray-800 rounded-tl-xl sm:rounded-t-xl p-4 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
          <img
            src={cancion.album.cover_medium}
            alt="Imagen track"
            className="flex-none w-16 h-16 rounded-lg bg-gray-100"
          />
          <div className="min-w-0 flex-auto space-y-0.5">
            <h2 className="text-black dark:text-white text-sn font-semibold truncate">
              {cancion.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
              {cancion.artist.name}
            </p>
            <p className="text-lime-600 dark:text-lime-400 text-xs font-semibold">
              {cancion.explicit_lyrics ? "Explicit" : "No Explicit"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-sm">
        <div className="text-black bg-gray-800 dark:text-white lg:rounded-b-xl py-4 px-1 sm:px-3 flex justify-between">
          <button type="button" className="mx-auto" onClick={() => addPlaylistItem({ ...cancion })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
          <button type="button" className="block mx-auto">
            <svg width={17} height={18}>
              <path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
            </svg>
          </button>
          <button type="button" className="mx-auto">
            <svg width={34} height={39} fill="none">
              <path
                d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                fill="currentColor"
              />
              <path
                d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="mx-auto"
            onClick={() => setisplaying(!isplaying)}
          >
            {isplaying ? (
              <svg width={50} height={50} fill="none">
                <circle
                  className="text-gray-300 dark:text-gray-500"
                  cx={25}
                  cy={25}
                  r={24}
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M18 16h4v18h-4V16zM28 16h4v18h-4z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            )}
          </button>
          <button type="button" className="mx-auto">
            <svg width={34} height={39} fill="none">
              <path
                d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                fill="currentColor"
              />
              <path
                d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
            </svg>
          </button>
          <button type="button" className="block mx-auto">
            <svg width={17} height={18} viewBox="0 0 17 18" fill="none">
              <path d="M17 0H15V18H17V0Z" fill="currentColor" />
              <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400"
          >
            1.0x
          </button>
        </div>
        <div className="space-y-2">
          <div
            className="bg-gray-200 dark:bg-black rounded-full overflow-hidden cursor-pointer"
            onClick={SaltarBarra}
            ref={barraRef}
          >
            <div
              className="progress-bar bg-lime-500 h-1.5"
              style={{ width: `${cancion.progreso + "%"}` }}
            />
          </div>
          <div className="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
            <div>{parseFloat(cancion.currentTime).toFixed(2)}</div>
            <div>{parseFloat(cancion.duracion).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Reproductor;
