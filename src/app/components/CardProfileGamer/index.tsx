"use client";
import { jwtDecode } from "jwt-decode";

// types

interface JwtPayload {
  sub: string;
  userId: number;
  id: number;
}

export interface Profile {
  department: string;
  profileName: string
}

// types of table UserAccount
export interface UserAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numberRegister: string;
  urlPicture: string;
  roleUser: string;
  profile: Profile;
}


import React, { useState, useEffect } from "react";

export const CardProfileGamer = () => {
  const [user, setUser] = useState<UserAccount | null>(null);

  function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

useEffect(() => {
    async function fetchUser() {
      const token = getCookie("token");
      if (!token) return;

      try {
        // Decodifica o token para pegar o ID
        const decoded = jwtDecode<JwtPayload>(token);
        const userId = decoded.id;

        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Erro na requisição:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchUser();
  }, []);

      function formatProfileName(text: string) {
      if (!text) return "";

      const withSpaces = text.replace(/_/g, " ");
      const lower = withSpaces.toLowerCase();

      const capitalized = lower.replace(/(^|\s|[-])\S/g, (char: string) => char.toUpperCase());

      return capitalized;
    }



  if (!user) {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className="spinner-7 w-14 h-14 shrink-0 animate-spin" viewBox="0 0 512 512">
        <path d="M248.093 177.6c-43.214 0-78.4 35.186-78.4 78.4 0 43.245 35.186 78.4 78.4 78.4 43.246 0 78.4-35.155 78.4-78.4 0-43.214-35.154-78.4-78.4-78.4zm0 125.44c-25.934 0-47.04-21.105-47.04-47.04s21.106-47.04 47.04-47.04 47.04 21.105 47.04 47.04-21.105 47.04-47.04 47.04z" data-original="#000000" />
        <path d="m310.75 191.869-15.68-172.48c-.72-8.091-7.494-14.269-15.617-14.269h-62.72c-8.122 0-14.896 6.178-15.617 14.269l-15.68 172.48c-.408 4.39 1.066 8.718 4.046 11.98a15.627 15.627 0 0 0 11.571 5.111h94.08c4.422 0 8.593-1.85 11.572-5.08a15.667 15.667 0 0 0 4.046-12.011zM218.208 177.6l12.858-141.12h34.057l12.826 141.12h-59.74zm12.701 142.625-47.04-81.473c-2.226-3.795-5.927-6.523-10.223-7.464-4.297-.91-8.812-.031-12.419 2.51l-141.559 99.85c-6.617 4.64-8.593 13.61-4.547 20.634l31.36 54.316a15.76 15.76 0 0 0 13.61 7.84c2.227 0 4.453-.44 6.586-1.443l157.207-72.692a15.876 15.876 0 0 0 8.374-9.502c1.348-4.171.846-8.75-1.349-12.576zM66.488 380.5l-17.029-29.51 115.813-81.692 29.854 51.744-128.638 59.458zm410-46.852-141.527-99.819c-3.607-2.54-8.217-3.45-12.419-2.508a15.573 15.573 0 0 0-10.192 7.463l-47.04 81.474c-2.195 3.826-2.728 8.373-1.38 12.575 1.317 4.202 4.39 7.62 8.373 9.502l157.208 72.661a15.908 15.908 0 0 0 6.586 1.443 15.672 15.672 0 0 0 13.578-7.84l31.36-54.316c4.046-6.993 2.07-15.993-4.547-20.635zm-46.82 46.884L301.06 321.072l29.886-51.713 115.782 81.662-17.06 29.51z" data-original="#000000" />
        <path d="M494.928 211.406c-1.6-8.498-9.722-14.018-18.283-12.544-8.499 1.6-14.112 9.784-12.513 18.283 2.321 12.513 3.481 25.558 3.481 38.855 0 38.322-10.223 76.173-29.572 109.415-4.328 7.495-1.788 17.091 5.707 21.45 2.478 1.443 5.175 2.101 7.872 2.101 5.394 0 10.662-2.79 13.579-7.808 22.077-38.04 33.774-81.317 33.774-125.158 0-15.21-1.348-30.2-4.045-44.594zm-13.924-47.855c-4.077-10.663-9.251-21.388-15.805-32.677-4.39-7.527-14.05-10.067-21.45-5.708-7.496 4.36-10.067 13.924-5.708 21.419 5.707 9.847 10.192 19.035 13.673 28.161 2.383 6.24 8.342 10.067 14.645 10.067 1.882 0 3.763-.345 5.613-1.004 8.091-3.104 12.137-12.167 9.032-20.258zM248.094 5.12c-59.428 0-116.848 21.293-161.693 59.929-6.585 5.645-7.307 15.555-1.662 22.109a15.658 15.658 0 0 0 11.886 5.456c3.637 0 7.275-1.254 10.223-3.794 39.2-33.744 89.345-52.34 141.245-52.34 8.656 0 15.68-7.025 15.68-15.68s-7.024-15.68-15.68-15.68zM73.668 98.667c-6.711-5.52-16.59-4.516-22.077 2.164-7.213 8.812-13.956 18.596-20.573 29.98-4.359 7.495-1.818 17.091 5.645 21.45a15.644 15.644 0 0 0 7.872 2.133c5.425 0 10.662-2.791 13.578-7.809 5.74-9.878 11.541-18.346 17.719-25.84 5.488-6.712 4.516-16.59-2.164-22.078zM248.093 475.52c-10.16 0-20.51-.753-31.673-2.352-8.436-.94-16.496 4.767-17.719 13.328-1.191 8.561 4.767 16.495 13.328 17.718 12.607 1.82 24.43 2.666 36.378 2.666 8.655 0 15.523-7.025 15.523-15.68s-7.181-15.68-15.837-15.68zm-74.448-13.234c-48.577-17.122-89.502-51.305-115.154-96.15-4.328-7.589-13.83-10.16-21.42-5.833-7.525 4.297-10.128 13.893-5.832 21.388 29.416 51.399 76.267 90.536 131.963 110.199 1.756.596 3.512.878 5.237.878 6.46 0 12.513-4.014 14.77-10.443 2.886-8.185-1.41-17.154-9.564-20.039zm260.539-233.13c-1.318-8.53-9.471-14.426-17.876-13.109-8.53 1.317-14.425 9.314-13.108 17.876A145.702 145.702 0 0 1 404.893 256c0 16.15-2.477 31.924-7.37 46.883-2.665 8.248 1.788 17.091 10.036 19.788 1.6.502 3.23.753 4.86.753a15.706 15.706 0 0 0 14.928-10.788c5.896-18.126 8.906-37.193 8.906-56.636 0-8.938-.658-17.907-2.07-26.844zm-14.05-48.42c-2.477-6.429-5.644-12.544-9.25-18.66-4.454-7.463-14.144-9.878-21.482-5.519-7.496 4.422-9.973 14.018-5.551 21.482 2.697 4.579 5.143 9.157 7.024 13.987 2.415 6.209 8.374 10.035 14.646 10.035 1.85 0 3.794-.345 5.613-1.066 8.09-3.105 12.105-12.168 9-20.259zM226.141 84.743c-1.787-8.499-10.098-13.987-18.565-12.199-27.722 5.77-53.939 18-75.86 35.374-6.773 5.394-7.902 15.272-2.508 22.046a15.711 15.711 0 0 0 12.293 5.927c3.387 0 6.836-1.129 9.753-3.387 18.063-14.363 39.764-24.492 62.72-29.227 8.467-1.756 13.892-10.067 12.167-18.534zM118.577 141.85c-6.931-5.206-16.747-3.764-21.952 3.167-4.109 5.488-7.872 11.29-11.29 17.123-4.39 7.463-1.882 17.06 5.582 21.45a15.399 15.399 0 0 0 7.903 2.164c5.394 0 10.63-2.791 13.516-7.746 2.854-4.861 5.99-9.69 9.408-14.206 5.206-6.931 3.763-16.778-3.167-21.952zM248.093 412.8c-5.707 0-11.383-.282-16.777-.847-8.467-1.129-16.339 5.269-17.28 13.893-.94 8.624 5.3 16.37 13.893 17.28 6.491.689 13.328 1.034 20.478 1.034 8.655 0 15.523-7.025 15.523-15.68s-7.181-15.68-15.837-15.68zm-58.611-11.478c-21.263-8.279-40.925-21.858-56.856-39.262-5.864-6.335-15.774-6.806-22.14-.973-6.398 5.833-6.837 15.774-.972 22.172 19.16 20.917 42.869 37.287 68.584 47.29a15.853 15.853 0 0 0 5.707 1.067c6.272 0 12.2-3.795 14.583-10.004 3.136-8.06-.847-17.154-8.906-20.29z" data-original="#000000" />
      </svg>
    );
  }

  return (
    <div className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div
        className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300"
        >
          <img
            src={user?.urlPicture}
            alt={`Avatar de ${user?.firstName}`}
            className="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 object-cover"
          />
      </div>


        <div className="headings *:text-center *:leading-4">
          <p className="text-xl font-serif font-semibold text-[#434955] mb-2">{user.firstName} {user.lastName}</p>
        </div>

      <div className="w-full items-center justify-center flex">
        <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
            </svg>

            <p>{user.firstName} {user.lastName}</p>
          </li>

             <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
              </svg>
            <p>{formatProfileName(user.profile.profileName)}</p>
          </li>

          <li>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clip-rule="evenodd" />
              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
            </svg>
            <p>{formatProfileName(user.profile.department)}</p>
          </li>

           <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>

           <p>{formatProfileName(user.roleUser)}</p>
          </li>
        </ul>
      </div>

      <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
    </div>
  );
};