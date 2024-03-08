import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const navigate = useNavigate();

  const ERRORS = {
      // mensajeErrorFirebase: "mensaje que quiero mostrar"
      "auth/user-not-found": "El usuario no existe",
      "auth/wrong-password": "La contraseña es incorrecta",
      "auth/invalid-email": "El correo es invalido",
      "auth/missing-password": "La contraseña esta vacia",
      "auth/invalid-credential": "credenciales inválidas, verifique sus datos",
      "auth/network-request-failed": "Error de red, verifique su conexion a internet"
  }

  const notify = (msg) => toast(msg)

    const startLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            console.log(userCredential);
        } catch (error) {
            console.log("ERROR",error.code);
            notify(ERRORS[error.code]);
            throw error
        }
    };

    const handleLogin = async () => {
      await toast.promise(startLogin(), {
          pending: "Validando datos...",
          success: "Login Exitoso! 👍",
          error: "Error al Validar, pruebe de nuevo 🤯"
      });

      setTimeout(() => {
          navigate('/')
      },2000)
      
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2"
          >
            <path
              d="M16.0601 0.587295L8.86476 2.13795C8.60683 2.19295 8.37555 2.3347 8.20947 2.53956C8.04339 2.74441 7.95254 3.00001 7.95207 3.26373V15.6468C7.42708 15.4645 6.87516 15.3717 6.3194 15.3724C3.80633 15.3724 1.76898 17.2177 1.76898 19.4941C1.76898 21.7704 3.80633 23.6158 6.31947 23.6158C8.04656 23.6158 9.77399 22.677 10.492 21.0764C11.116 19.6854 10.8698 18.0132 10.8698 16.5213V6.62223L20.779 4.32072C20.7449 1.87246 18.4654 0.0689939 16.0601 0.587361L16.0601 0.587295Z"
              fill="#FACD66"
            />
            <path
              d="M16.0565 11.998V25.2556C16.0563 25.2872 16.0488 25.3184 16.0345 25.3466C16.0202 25.3748 15.9996 25.3993 15.9742 25.4182C15.9488 25.437 15.9194 25.4497 15.8882 25.4552C15.8571 25.4607 15.8251 25.4589 15.7948 25.4499C15.349 25.3225 14.8875 25.2581 14.4238 25.2585C11.9107 25.2585 9.87341 27.1039 9.87341 29.3802C9.87341 31.6566 11.9107 33.502 14.4238 33.502C16.1509 33.502 17.8784 32.5632 18.5964 30.9626C19.2204 29.5716 18.9743 27.8993 18.9743 26.4075V15.6245C18.9744 15.5481 19.0004 15.474 19.048 15.4143C19.0957 15.3545 19.1621 15.3127 19.2366 15.2956L28.8834 13.055C28.9331 13.0433 28.9848 13.043 29.0346 13.0541C29.0844 13.0651 29.1311 13.0873 29.1712 13.1189C29.2112 13.1506 29.2436 13.1908 29.266 13.2367C29.2883 13.2826 29.3 13.3329 29.3002 13.384V24.2421C29.3 24.2737 29.2925 24.3048 29.2782 24.3331C29.2639 24.3613 29.2433 24.3858 29.2179 24.4046C29.1925 24.4235 29.1631 24.4362 29.1319 24.4417C29.1008 24.4472 29.0688 24.4454 29.0385 24.4364C28.5926 24.309 28.1312 24.2446 27.6675 24.245C25.1544 24.245 23.1171 26.0904 23.1171 28.3667C23.1171 30.6431 25.1544 32.4884 27.6674 32.4884C29.1883 32.4884 30.7005 31.7011 31.5534 30.413C32.3799 29.1648 32.2183 27.8537 32.2179 26.4434C32.2171 23.9282 32.2171 21.413 32.2179 18.8979V8.84266C32.2174 8.69091 32.1829 8.54119 32.1171 8.40447C32.0512 8.26776 31.9556 8.14751 31.8372 8.05253C31.7189 7.95755 31.5808 7.89026 31.433 7.85557C31.2853 7.82089 31.1317 7.81969 30.9834 7.85208L16.9692 10.8722C16.7113 10.9272 16.48 11.069 16.3139 11.2738C16.1478 11.4787 16.057 11.7343 16.0565 11.998Z"
              fill="#A4C7C6"
            />
            <path
              d="M27.3081 13.384C27.3079 13.3329 27.2962 13.2826 27.2739 13.2367C27.2515 13.1908 27.2191 13.1506 27.1791 13.1189C27.139 13.0873 27.0923 13.0651 27.0425 13.0541C26.9927 13.043 26.941 13.0433 26.8913 13.055L17.2445 15.2956C17.17 15.3127 17.1036 15.3545 17.0559 15.4143C17.0083 15.474 16.9823 15.5481 16.9822 15.6245V26.4075C16.9822 27.8993 17.2283 29.5716 16.6043 30.9626C16.0241 32.256 14.7847 33.1169 13.419 33.3998C13.7497 33.4676 14.0864 33.5018 14.4239 33.502C16.151 33.502 17.8785 32.5632 18.5965 30.9626C19.2205 29.5716 18.9744 27.8993 18.9744 26.4075V15.6245C18.9745 15.5481 19.0005 15.474 19.0481 15.4143C19.0958 15.3545 19.1622 15.3127 19.2367 15.2956L27.3081 13.4209V13.384ZM14.0623 25.2727C13.8491 25.2878 13.6371 25.3165 13.4276 25.3588C13.5546 25.3847 13.6799 25.4147 13.8027 25.4499C13.8316 25.4584 13.862 25.4604 13.8917 25.4557C13.9214 25.451 13.9497 25.4398 13.9745 25.4228C13.9994 25.4058 14.0201 25.3836 14.0353 25.3576C14.0505 25.3316 14.0597 25.3026 14.0623 25.2726V25.2727ZM32.218 26.4434C32.2172 23.9282 32.2172 21.413 32.218 18.8979V8.84266C32.2175 8.69091 32.183 8.54119 32.1172 8.40447C32.0513 8.26776 31.9557 8.14751 31.8373 8.05253C31.719 7.95755 31.5809 7.89026 31.4331 7.85557C31.2854 7.82089 31.1318 7.81969 30.9835 7.85208L29.8857 8.08868C29.9927 8.18298 30.0784 8.29901 30.137 8.42902C30.1956 8.55902 30.2259 8.70004 30.2258 8.84266V26.4434C30.2262 27.8536 30.3878 29.1648 29.5613 30.413C28.8792 31.4207 27.8345 32.1263 26.6449 32.3826C26.9813 32.4528 27.324 32.4883 27.6676 32.4884C29.1883 32.4884 30.7006 31.7011 31.5535 30.413C32.38 29.1648 32.2184 27.8537 32.218 26.4434ZM27.306 24.2591C27.0928 24.2742 26.8808 24.303 26.6712 24.3453C26.7983 24.3712 26.9236 24.4012 27.0464 24.4364C27.0752 24.4449 27.1056 24.4469 27.1353 24.4422C27.165 24.4375 27.1933 24.4263 27.2182 24.4093C27.243 24.3923 27.2638 24.3701 27.279 24.3441C27.2942 24.3181 27.3034 24.2891 27.306 24.2591Z"
              fill="#9CBCBB"
            />
          </svg>
          Music App
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline text-white text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
                onClick={handleLogin}
              >
                Log in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Aún no tienes una Cuenta?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Get started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
