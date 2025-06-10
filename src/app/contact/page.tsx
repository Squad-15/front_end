'use client'
import Footer from '../components/footer'
export default function ContactPage() {
  return (
    <div className="text-left">
      <div className="flex min-h-screen items-center justify-start bg-white font-poppins">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="flex-1 text-4xl font-medium">Contate-nos</h1>
          <p className="mt-3">
            Envie um e-mail para help@Jnunes.com ou envie-nos uma mensagem aqui:
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-10"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600">
                  Seu Nome
                </label>
              </div>

              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600">
                  Seu Email
                </label>
              </div>

              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600">
                  Digite uma mensagem:
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:bg-red-600 transition-colors duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
