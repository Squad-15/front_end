'use client';

import React from 'react';

const ContatoSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 pt-0 md:pt-20">Tem Dúvidas? Estamos Aqui para Ajudar!</h2>
          <p className="text-gray-600">
            Entre em contato conosco em caso de dúvida, nossa equipe estará pronta para te atender e te orientar da melhor maneira possível.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-10 rounded-2xl">
          <form className="flex flex-col gap-4">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="João Pereira"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="joao.pereira@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Número
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 650 213 7379"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte para nós do que você precisa..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-neutral-900 text-white font-semibold py-3 rounded-full hover:bg-neutral-800 transition-all"
            >
              Enviar ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
