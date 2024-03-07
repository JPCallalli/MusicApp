import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const UserAvatar = () => {

  const [open, setOpen] = useState(false);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="px-3 relative">
      <button
        className="flex text-sm bg-gray-800 rounded-full hover:ring-1"
        onClick={()=>setOpen(!open)}
      >
        <i className="fa-solid fa-circle-user text-4xl rounded-full"></i>
      </button>
      {open && 
            <div
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-12 right-4"
            >
                <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Cuenta
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                    Perfíl
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                    Configuración
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={cerrarSesion}
                    >
                    Cerrar Sesión
                    </a>
                </li>
                </ul>
            </div>
        }
    </div>
  );
};

export default UserAvatar;
