import React from 'react'

const cards = [
  {
    id: 1,
    title: '01 Princípios do desenvolvimento ágil',
    image:
      'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
    description: '15 min',
    progress: 75,
    xp: 100,
  },
  {
    id: 2,
    title: 'The ultimate UX and UI guide to card design',
    image:
      'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg',
    description: '10 min',
    progress: 40,
    xp: 50,
  },
  {
    id: 3,
    title: 'Creative Card Component designs graphic elements',
    image:
      'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg',
    description: '20 min',
    progress: 90,
    xp: 150,
  },
]

const CardsSection = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-1/2 xl:w-1/3 px-4 mb-10 flex justify-center"
            >
              <div className="bg-white rounded-lg overflow-hidden max-w-[350px] w-full">
                <img src={card.image} alt="image" className="w-full" />
                <div className="p-6 text-left">
                  <h3>
                    <a
                      href="#"
                      className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                    >
                      {card.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Barra de progresso */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.progress}% completo
                  </p>
                  {/* xp */}
                  <p className="text-xs text-white bg-black rounded-full px-2 py-1 mb-2 w-12">
                    {card.xp}XP
                  </p>
                  <div className='flex justify-end'>
                    <a
                      href="#"
                      className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                    >
                      Começar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardsSection
