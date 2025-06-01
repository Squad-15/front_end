import { CardGamerRanking } from "../components/CardGamerRanking";
import { CardProfileGamer } from "../components/CardProfileGamer";
import { CardProgressUser } from "../components/CardProgressUser";
import { LogoutButton } from "../components/LogoutButton";
import "/public/styles/profile.css";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-6 py-10 text-gray-900">
            {/* Cabeçalho */}
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight">Meu Perfil</h1>

                <div className="flex items-center gap-4">
                     <button
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-200"
                        >
                        <svg
                            className="h-5 w-5 mr-1 self-center items-center"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                            ></path>
                        </svg>
                        Editar
                        </button>

                    <LogoutButton />
                </div>
            </header>

            {/* Seção de Cartões do Perfil e Ranking */}
            <section className="flex flex-wrap gap-8 justify-center mb-12">
                <CardProfileGamer />
                <CardGamerRanking />
            </section>

            {/* Barra de progresso do usuário */}
            <section className="mb-12">
                <CardProgressUser />
            </section>

            {/* Conquistas Recentes */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Conquistas Recentes</h2>
                <div className="flex gap-6 overflow-x-auto pb-2">
                    {[1, 2, 3, 4, 5].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-44 bg-white p-5 rounded-2xl shadow-md flex-shrink-0 text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-indigo-500 rounded-full mb-3" />
                            <p className="text-base font-semibold text-gray-800">Título #{idx + 1}</p>
                            <p className="text-sm text-gray-500">Conquista desbloqueada</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Atividades Recentes */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Atividades Recentes</h2>
                <ul className="space-y-4">
                    {[
                        "Concluiu a missão 'Explorador Digital'",
                        "Ganhou 150 XP por uma nova conquista",
                        "Subiu para o nível 12",
                    ].map((activity, idx) => (
                        <li
                            key={idx}
                            className="bg-white p-5 rounded-xl shadow-sm text-base text-gray-700"
                        >
                            {activity}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
