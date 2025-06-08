"use client";
export const Ranking = () => {
    return(
    <div className="container font-poppins">
      <main>
        <div className="podium">
          <ul>
            <li>
              <span>1</span>

              <img id="crown" src="https://static.vecteezy.com/system/resources/previews/015/041/220/original/crown-icon-cartoon-style-vector.jpg" alt="coroa" />

              <img src="https://img.freepik.com/premium-photo/illustration-cute-boy-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4578.jpg?w=2000" alt="" srcSet="" />

              <p data-name-podium>Ryan Nardelli</p>

              <span data-revenue-podium className="revenue">1500 XP</span>
            </li>

            <li data-aos="flip-right">
              <span>2</span>

              <img src="https://img.freepik.com/fotos-premium/renderizacao-3d-de-avatares_1258715-64158.jpg" alt="2° lugar" />

              <p data-name-podium>João Silva</p>

              <span data-revenue-podium className="revenue">1300 XP</span>
            </li>

            <li data-aos="flip-right">
              <span>3</span>

              <img src="https://img.freepik.com/fotos-premium/avatar-de-personagem-3d_113255-5375.jpg" alt="" srcSet="" />

              <p data-name-podium>Renato Oliveira</p>

              <span data-revenue-podium className="revenue">1200 XP</span>
            </li>
          </ul>
        </div>
      </main>

    <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">🏆 Ranking de Jogadores</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white animate-fade-in">
      <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <tr>
          <th className="px-4 py-3 text-left">Posição</th>
          <th className="px-4 py-3 text-left">Nome</th>
          <th className="px-4 py-3 text-left">Pontos</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="hover:bg-yellow-100 transition duration-300 ease-in-out scale-100 hover:scale-[1.02]">
          <td className="px-4 py-3 font-bold text-yellow-500">🥇 1º</td>
          <td className="px-4 py-3">Ryan Nardelli</td>
          <td className="px-4 py-3 font-semibold">1500</td>
        </tr>
        <tr className="hover:bg-gray-100 transition duration-300 ease-in-out scale-100 hover:scale-[1.02]">
          <td className="px-4 py-3 font-bold text-gray-400">🥈 2º</td>
          <td className="px-4 py-3">João Silva</td>
          <td className="px-4 py-3 font-semibold">1300</td>
        </tr>
        <tr className="hover:bg-amber-100 transition duration-300 ease-in-out scale-100 hover:scale-[1.02]">
          <td className="px-4 py-3 font-bold text-orange-400">🥉 3º</td>
          <td className="px-4 py-3">Renato Oliveira</td>
          <td className="px-4 py-3 font-semibold">1200</td>
        </tr>
        <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">4º</td>
          <td className="px-4 py-3">Lucas Mendes</td>
          <td className="px-4 py-3">1100</td>
        </tr>
        <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">5º</td>
          <td className="px-4 py-3">Mariana Lima</td>
          <td className="px-4 py-3">980</td>
        </tr>

        <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">6º</td>
          <td className="px-4 py-3">Carlos Silva</td>
          <td className="px-4 py-3">850</td>
        </tr>

        <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">7º</td>
          <td className="px-4 py-3">Adriano Souza</td>
          <td className="px-4 py-3">700</td>
        </tr>

        <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">8º</td>
          <td className="px-4 py-3">João Goís</td>
          <td className="px-4 py-3">650</td>
        </tr>

         <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">9º</td>
          <td className="px-4 py-3">Jonas Ferreira</td>
          <td className="px-4 py-3">500</td>
        </tr>

         <tr className="hover:bg-gray-50 transition duration-200">
          <td className="px-4 py-3">10º</td>
          <td className="px-4 py-3">Matheus Silva</td>
          <td className="px-4 py-3">400</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  </div>
    );
}