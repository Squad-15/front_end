interface ModalEditUserProps {
  closeModal: () => void;
}

import React, { useState } from 'react';

export const ModalEditUser = ({ closeModal }: ModalEditUserProps) => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    matricula: '009181',
    organization: 'Estep Bilişim',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className="font-inter mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl relative">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-5 items-start">
          <h2 className="mb-5 text-4xl font-bold text-blue-900">Editar Usuário</h2>
          <div className="text-center">
            <div>
              <img
                src="https://i.pravatar.cc/300"
                alt="Profile Picture"
                className="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
              />
              <input type="file" name="profile" id="upload_profile" hidden required />
              <label htmlFor="upload_profile" className="inline-flex items-center">
                <svg
                  data-slot="icon"
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  ></path>
                </svg>
              </label>
            </div>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">
              Atualizar Foto de Perfil
            </button>
          </div>
        </div>

        <form className="space-y-4">
        <div className="flex space-x-4">
            <div className="w-1/2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={userData.firstName}
                onChange={handleInputChange}
                />
            </div>

            <div className="w-1/2">
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                <input
                type="text"
                id="surname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={userData.lastName}
                onChange={handleInputChange}
                />
            </div>
            </div>

          <div>
            <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">Matrícula</label>
            <input
              type="text"
              id="matricula"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={userData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className='flex space-x-4'>
          <div className='w-1/2'>
            <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">Cargo</label>
            <select
                    id="cargo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={userData.location}
                    onChange={handleInputChange}
                >
                    <option value="cidade1">Cidade 1</option>
                    <option value="cidade2">Cidade 2</option>
                    <option value="cidade3">Cidade 3</option>
            </select>
          </div>

          <div className='w-1/2'>
            <label htmlFor="departament" className="block text-sm font-medium text-gray-700">Departamento</label>
            <select
                    id="departament"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={userData.location}
                    onChange={handleInputChange}
                >
                    <option value="cidade1">Cidade 1</option>
                    <option value="cidade2">Cidade 2</option>
                    <option value="cidade3">Cidade 3</option>
            </select>
          </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>

         
            <div>
                <label className="block text-sm font-medium text-gray-700">Data de Admissão</label>
                <input 
                    type="date" 
                    name="dataAdmissao" 
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" 
                />
            </div>

            <div className='flex space-x-4'>
                <div className='w-1/2'>
                <label htmlFor="typeVinculo" className="block text-sm font-medium text-gray-700">Tipo de vínculo</label>
                <select
                        id="typeVinculo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={userData.typeVinculo}
                        onChange={handleInputChange}
                    >
                        <option value="clt">Clt</option>
                        <option value="pj">Pj</option>
                        <option value="temporario">Temporário</option>
                        <option value="estagio">Estágio</option>
                </select>
                </div>
                <div className='w-1/2'>
                <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">Nível de Permissão</label>
                <select
                        id="roleUser"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={userData.roleUser}
                        onChange={handleInputChange}
                    >
                        <option value="admin">Administrador</option>
                        <option value="colaborador">Colaborador</option>
                        <option value="gestor">Gestor</option>
                </select>
                </div>
            </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localização</label>
            <select
                    id="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={userData.location}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Selecione uma localização</option>
                    <option value="cidade1">Cidade 1</option>
                    <option value="cidade2">Cidade 2</option>
                    <option value="cidade3">Cidade 3</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={closeModal}
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

    //   <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
    //     <div className="flex items-center">
    //       <h3 className="text-blue-600 text-xl font-semibold flex-1">Editar Usuário</h3>
    //       <svg
    //         onClick={closeModal}
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-3.5 h-3.5 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
    //         viewBox="0 0 320.591 320.591"
    //       >
    //         <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
    //         <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
    //       </svg>
    //     </div>
  
    //     <form className="space-y-6 mt-8">
    //       <div>
    //         <label className="text-slate-900 text-sm mb-2 block">Nome</label>
    //         <input
    //           type="text"
    //           placeholder="Digite o nome"
    //           className="px-4 py-3 bg-gray-100 w-full text-slate-900 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
    //         />
    //       </div>
  
    //       <div>
    //         <label className="text-slate-900 text-sm mb-2 block">Sobrenome</label>
    //         <input
    //           type="text"
    //           placeholder="Digite o sobrenome"
    //           className="px-4 py-3 bg-gray-100 w-full text-slate-900 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
    //         />
    //       </div>
  
    //       <div>
    //         <label className="text-slate-900 text-sm mb-2 block">Email</label>
    //         <input
    //           type="email"
    //           placeholder="Digite o email"
    //           className="px-4 py-3 bg-gray-100 w-full text-slate-900 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
    //         />
    //       </div>
  
    //       <div>
    //         <label className="text-slate-900 text-sm mb-2 block">Número</label>
    //         <input
    //           type="tel"
    //           placeholder="Digite o número de telefone"
    //           className="px-4 py-3 bg-gray-100 w-full text-slate-900 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
    //         />
    //       </div>
  
    //       <div>
    //         <label className="text-slate-900 text-sm mb-2 block">Tipo de Permissão</label>
    //         <select
    //           className="px-4 py-3 bg-gray-100 w-full text-slate-900 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
    //         >
    //           <option value="">Selecione a permissão</option>
    //           <option value="admin">Administrador</option>
    //           <option value="gestor">Gestor</option>
    //           <option value="colaborador">Colaborador</option>
    //         </select>
    //       </div>
  
    //       <div className="flex justify-end gap-4 mt-8">
    //         <button
    //           type="button"
    //           onClick={closeModal}
    //           className="px-6 py-3 rounded-lg text-slate-900 text-sm font-medium border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300"
    //         >
    //           Cancelar
    //         </button>
    //         <button
    //           type="submit"
    //           className="px-6 py-3 rounded-lg text-white text-sm font-medium border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
    //         >
    //           Salvar
    //         </button>
    //       </div>
    //     </form>
    //   </div>
  