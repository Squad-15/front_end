"use client";
export default function GamifiedStore() {
  const items = [
    {
      id: 1,
      name: "Espada Épica",
      points: 100,
      image: "https://static.vecteezy.com/system/resources/previews/046/687/413/original/cartoon-sword-drawing-png.png"
    },
    {
      id: 2,
      name: "Poção de Vida",
      points: 50,
      image: "https://cdn-icons-png.flaticon.com/512/590/590685.png"
    },
    {
      id: 3,
      name: "Armadura Lendária",
      points: 150,
      image: "https://cdn-icons-png.flaticon.com/512/3429/3429895.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br p-6 flex justify-center mt-20">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">🏆 Loja Gamificada</h1>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-700 p-4 rounded-xl mb-8 shadow">
          <div className="text-lg text-white mb-2 sm:mb-0">
            Seus pontos: <span className="text-yellow-400 font-bold">200</span>
          </div>
          <div className="w-full sm:w-1/2 h-4 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(({ id, name, points, image }) => (
            <div key={id} className="bg-gray-800 border border-purple-500 rounded-2xl shadow-lg p-4 flex flex-col items-center text-white">
              <img
                src={image}
                alt={name}
                className="h-24 w-24 object-contain mb-4 animate-float transition-transform duration-500"
              />

              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-yellow-400 mb-4">💰 {points} pontos</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3H19m-12 0a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                Comprar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-black">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.35 2.01 10.65 2.01 10.951 2.927L12.072 6.3a1 1 0 00.95.69h3.627c.969 0 1.371 1.24.588 1.81l-2.939 2.136a1 1 0 00-.364 1.118l1.11 3.579c.3.968-.755 1.776-1.54 1.18l-2.94-2.136a1 1 0 00-1.175 0l-2.94 2.136c-.785.596-1.84-.212-1.54-1.18l1.11-3.579a1 1 0 00-.364-1.118L2.763 8.8c-.783-.57-.38-1.81.588-1.81h3.627a1 1 0 00.95-.69l1.121-3.373z" />
            </svg>
            Itens Adquiridos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-xl text-center">
                <div className="h-16 w-16 bg-gray-600 mx-auto mb-2 rounded"></div>
                <span>Item {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
