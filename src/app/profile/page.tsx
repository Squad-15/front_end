import { CardGamerRanking } from "../components/CardGamerRanking";
import { CardProfileGamer } from "../components/CardProfileGamer";
import { CardProgressUser } from "../components/CardProgressUser";
import "/public/styles/profile.css";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-6 py-10 text-gray-900">
            {/* Cabeçalho */}
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight">Meu Perfil</h1>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium shadow-lg transition duration-300">
                    Editar Perfil
                </button>
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
