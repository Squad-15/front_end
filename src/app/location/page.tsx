'use client'
import Footer from '../components/footer'

export default function LocationPage() {
  return (
    <div className="relative">
      {/* Mapa em tela cheia no fundo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6600063023657!2d-37.05776612495618!3d-10.913422789243782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3112c3bc54d%3A0xfb031c519e9477a0!2sJotanunes%20Construtora!5e0!3m2!1spt-BR!2sbr!4v1749595985809!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          loading="lazy"
          title="Mapa Tela Cheia"
        />
      </div>
      <div
        className="w-full bg-black/80 text-white"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <Footer />
      </div>
    </div>
  )
}
