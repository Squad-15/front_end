"use client";

import { IoTrashOutline, IoEyeOutline, IoCreateOutline, IoPersonAddOutline, IoPeopleOutline } from "react-icons/io5";
import { ModalEditUser } from "../ModalEditUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModalDeleteUser } from "../ModalDeleteUser";
import { ModalDetailsUser } from "../ModalDetailsUser";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  roleUser: string;
  email: string;
  role: string;
}

export const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [IsModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [IsModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [IsModalOpenUserDetails, setIsModalOpenUserDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/all');
      const data = await response.json();
      setUsers(data.slice(0, 10));
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      setUserRole(null);
      return;
    }

    interface DecodedToken {
      roleUser: string;
      [key: string]: unknown;
    }
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      setUserRole(decoded.roleUser);
    } catch {
      setUserRole(null);
    }
  }, []);

  useEffect(() => {
    if (userRole === "ADMINISTRADOR") {
      fetchUsers();
    } else {
      setUsers([]);
      setLoading(false);
    }
  }, [userRole]);

  if (userRole === null) {
    return null;
  }

  if (userRole !== "ADMINISTRADOR") {
    return null;
  }

  return (
    <section>
      <div className="md:ml-0 lg:ml-0 xl:ml-80 p-4">
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between dark:bg-dark">
            <h2 className="font-semibold text-gray-800 dark:text-light">
              Pessoas Cadastradas
            </h2>
            <div className="flex items-center gap-6">
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 w-auto px-4 py-2 rounded-lg bg-[#4ADE80] hover:bg-green-500 text-white transition-colors"
              >
                <IoPersonAddOutline size={20} />
                <span className="font-medium">Cadastrar Novo</span>
              </Link>
              <button className="flex items-center gap-2 bg-[#60A5FA] hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
                <IoPeopleOutline size={20} />
                <span className="font-medium">Ver Todos</span>
              </button>
            </div>
          </header>

          <div className="p-3 dark:bg-dark dark:text-light">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-dark dark:text-light">
                  <tr>
                    <th className="p-2 whitespace-nowrap text-left">Nome</th>
                    <th className="p-2 whitespace-nowrap text-left">Email</th>
                    <th className="p-2 whitespace-nowrap text-left">Função</th>
                    <th className="p-2 whitespace-nowrap text-center">Ações</th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={4}>
                        <div className="flex justify-center items-center p-6">
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={user?.urlPicture ? user.urlPicture : "assets/img/default_profile.png"}
                                width="40"
                                height="40"
                                alt={user.firstName}
                              />
                            </div>
                            <div className="font-medium text-gray-800 dark:text-light">
                              {user.firstName} {user.lastName}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-primary">
                            {user.roleUser.charAt(0) + user.roleUser.slice(1).toLowerCase()}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex justify-center space-x-2">
                            <button className="text-blue-500 hover:text-blue-700" onClick={() => setIsModalOpenUserDetails(true)}>
                              <IoEyeOutline size={18} />
                            </button>
                            <button
                                className="text-yellow-500 hover:text-yellow-700"
                                onClick={() => {
                                  setSelectedUserId(user.id);
                                  setIsModalOpenEdit(true);
                                }}
                              >
                                <IoCreateOutline size={18} />
                            </button>

                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() => {
                                setSelectedUserId(user.id);
                                setIsModalOpenDelete(true);
                              }}
                            >
                              <IoTrashOutline size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {IsModalOpenEdit && selectedUserId && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
          <ModalEditUser closeModal={() => setIsModalOpenEdit(false)} userId={parseInt(selectedUserId)} />
        </div>
      )}


      {IsModalOpenDelete && selectedUserId && (
        <div className="fixed inset-0 ...">
          <ModalDeleteUser
            closeModalDelete={() => setIsModalOpenDelete(false)}
            userId={parseInt(selectedUserId)}
            onUserDeleted={fetchUsers}
          />
        </div>
      )}

      {IsModalOpenUserDetails && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
          <ModalDetailsUser closeModalUserDetails={() => setIsModalOpenUserDetails(false)} />
        </div>
      )}
    </section>
  );
};