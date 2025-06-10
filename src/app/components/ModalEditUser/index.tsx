"use client";
import { useEffect, useState } from "react";

interface ModalEditUserProps {
  closeModal: () => void;
  userId: number;
}

interface UserData {
  firstName: string;
  lastName: string;
  title?: string;
  cargo: string;
  departament: string;
  email: string;
  dataAdmissao: string;
  typeVinculo: string;
  roleUser: string;
  phone: string;
  location: string;
  urlPicture?: string;
}

export const ModalEditUser = ({ closeModal, userId }: ModalEditUserProps) => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    title: "",
    cargo: "",
    departament: "",
    email: "",
    dataAdmissao: "",
    typeVinculo: "",
    roleUser: "",
    phone: "",
    location: "",
  });


  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          title: data.title ?? "",
          cargo: data.profile?.profileName ?? "",
          departament: data.profile?.department ?? "",
          email: data.email ?? "",
          dataAdmissao: data.profile?.dateAdmission ?? "",
          typeVinculo: data.profile?.typeConnection ?? "",
          roleUser: data.roleUser ?? "",
          phone: data.phone ?? "",
          location: data.location ?? "",
          urlPicture: data.urlPicture ?? "",
        });
      })
      .catch((error) => console.error("Erro ao buscar dados do usuário:", error));
  }, [userId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados atualizados:", userData);
  };

  const [cargosOptions, setCargosOptions] = useState<string[]>([]);
  const [departamentosOptions, setDepartamentosOptions] = useState<string[]>([]);
  const [vinculosOptions, setVinculosOptions] = useState<string[]>([]);
  const [locationsOptions, setLocationsOptions] = useState<string[]>([]);
  const [roleOptions, setRoleOptions] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/profiles")
      .then((res) => res.json())
      .then((data) => setCargosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/departaments")
      .then((res) => res.json())
      .then((data) => setDepartamentosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/typeconnection")
      .then((res) => res.json())
      .then((data) => setVinculosOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/location")
      .then((res) => res.json())
      .then((data) => setLocationsOptions(data))
      .catch(console.error);

    fetch("http://localhost:8080/metadata/roleuser")
      .then((res) => res.json())
      .then((data) => setRoleOptions(data))
      .catch(console.error);
  }, []);

  return (
    <div className="font-inter mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl relative">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-5 items-start">
          <h2 className="mb-5 text-4xl font-bold text-blue-900">Editar Usuário</h2>
          <div className="text-center">
            <div>
              <img
               src={userData.urlPicture || "assets/img/default_profile.png"}
                alt="Profile Picture"
                className="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
              />
              <input type="file" name="profile" id="upload_profile" hidden />
              <label htmlFor="upload_profile" className="inline-flex items-center cursor-pointer">
                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175..."
                  ></path>
                </svg>
              </label>
            </div>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300 mt-2">
              Atualizar Foto de Perfil
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Sobrenome
              </label>
              <input
                type="text"
                id="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
              <div className="w-1/2">
              <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">
                Cargo
              </label>
              <select
                id="Cargo"
                value={userData.cargo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione o cargo</option>
                {cargosOptions.map((cargo) => (
                  <option key={cargo.value} value={cargo.value}>
                    {cargo.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">
                Departamento
              </label>
              <select
                id="Departamento"
                value={userData.departament}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione o departamento</option>
                {departamentosOptions.map((departament) => (
                  <option key={departament.value} value={departament.value}>
                    {departament.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="dataAdmissao" className="block text-sm font-medium text-gray-700">
              Data de Admissão
            </label>
            <input
              type="date"
              id="dataAdmissao"
              value={userData.dataAdmissao}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">
                Tipo de Vínculo
              </label>
              <select
                id="Vinculo"
                value={userData.typeVinculo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione um tipo de vínculo</option>
                {vinculosOptions.map((vinculo) => (
                  <option key={vinculo.value} value={vinculo.value}>
                    {vinculo.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-1/2">
              <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">
                Nível de Permissão
              </label>
              <select
                id="roleUser"
                value={userData.roleUser}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione um nível</option>
                {roleOptions.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
              <label htmlFor="roleUser" className="block text-sm font-medium text-gray-700">
                Localização
              </label>
              <select
                id="location"
                value={userData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione uma localização</option>
                {locationsOptions.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>


          <div className="flex justify-end space-x-4 pt-4">
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

