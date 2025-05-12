import React from 'react'
import logo from '/public/assets/img/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-12 lg:px-8 lg:pt-25">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-12 w-auto" src={logo.src} alt="Logo" />
            <p className="text-sm leading-6 text-gray-600">
              Construíndo um futuro com excelência
            </p>
            <div className="flex space-x-6">
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.43.403a4.919 4.919 0 0 1 1.675 1.088 4.919 4.919 0 0 1 1.088 1.675c.163.46.347 1.26.403 2.43.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.97-.403 2.43a4.902 4.902 0 0 1-1.088 1.675 4.918 4.918 0 0 1-1.675 1.088c-.46.163-1.26.347-2.43.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.24-2.43-.403a4.919 4.919 0 0 1-1.675-1.088 4.919 4.919 0 0 1-1.088-1.675c-.163-.46-.347-1.26-.403-2.43-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.17.24-1.97.403-2.43a4.919 4.919 0 0 1 1.088-1.675 4.919 4.919 0 0 1 1.675-1.088c.46-.163 1.26-.347 2.43-.403 1.265-.058 1.645-.07 4.849-.07zm0 1.838c-3.154 0-3.508.012-4.743.069-1.016.047-1.566.215-1.93.36-.486.189-.832.416-1.198.782a3.919 3.919 0 0 0-.782 1.198c-.145.364-.313.914-.36 1.93-.057 1.235-.069 1.589-.069 4.743s.012 3.508.069 4.743c.047 1.016.215 1.566.36 1.93.189.486.416.832.782 1.198.366.366.712.593 1.198.782.364.145.914.313 1.93.36 1.235.057 1.589.069 4.743.069s3.508-.012 4.743-.069c1.016-.047 1.566-.215 1.93-.36a3.919 3.919 0 0 0 1.198-.782 3.919 3.919 0 0 0 .782-1.198c.145-.364.313-.914.36-1.93.057-1.235.069-1.589.069-4.743s-.012-3.508-.069-4.743c-.047-1.016-.215-1.566-.36-1.93a3.919 3.919 0 0 0-.782-1.198 3.919 3.919 0 0 0-1.198-.782c-.364-.145-.914-.313-1.93-.36-1.235-.057-1.589-.069-4.743-.069zm0 3.838a5.999 5.999 0 1 1 0 12 5.999 5.999 0 0 1 0-12zm0 9.838a3.84 3.84 0 1 0 0-7.679 3.84 3.84 0 0 0 0 7.679zm6.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">WhatsApp</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M16.005 2.002a13.97 13.97 0 0 0-11.99 21.28l-2.007 6.087 6.25-1.958a13.97 13.97 0 1 0 7.747-25.41Zm0 25.464a11.5 11.5 0 0 1-5.888-1.604l-.422-.248-3.717 1.164 1.197-3.636-.274-.44a11.49 11.49 0 1 1 9.104 4.764Zm6.304-8.605c-.34-.17-2.01-.993-2.32-1.106-.31-.113-.54-.17-.77.17s-.88 1.106-1.08 1.335c-.2.227-.4.256-.74.085-.34-.17-1.43-.527-2.72-1.683-1.004-.898-1.68-2.007-1.88-2.35-.2-.34-.02-.523.15-.693.155-.154.34-.397.51-.596.17-.2.23-.34.34-.567.113-.227.057-.426-.03-.597-.086-.17-.77-1.857-1.05-2.547-.275-.662-.55-.57-.77-.58l-.654-.012c-.23 0-.596.085-.907.426s-1.19 1.16-1.19 2.83c0 1.67 1.217 3.28 1.385 3.508.17.227 2.4 3.652 5.82 5.12.813.35 1.447.558 1.94.714.815.26 1.56.223 2.15.135.657-.098 2.01-.82 2.3-1.61.284-.79.284-1.465.2-1.61-.085-.14-.31-.227-.65-.396Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Links úteis
                </h3>
                <ul className="mt-6 space-y-4">
                  {['Sobre nós', 'Eventos', 'Blog', 'FAQ'].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Menu Principal
                </h3>
                <ul className="mt-6 space-y-4">
                  {['Home', 'Depoimentos', 'Nossa missão', 'Política'].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            {/* Company and Legal */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Nosso Contato
                </h3>
                <ul className="mt-6 space-y-4">
                  {['example@email.com', '+55 958 248 966', 'Redes Sociais'].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
