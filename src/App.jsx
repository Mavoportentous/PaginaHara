import { useState } from 'react'
import './index.css'
import logo from './assets/logo.png'

// Mock Data for Menu
const menuItems = [
  {
    id: 1,
    name: 'Espresso Hara',
    price: '$3.50',
    desc: 'Nuestra mezcla exclusiva, intenso y puro.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Cappuccino Cream',
    price: '$4.50',
    desc: 'Espresso con leche vaporizada y espuma cremosa.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
        <path d="M6 1v3"></path>
        <path d="M10 1v3"></path>
        <path d="M14 1v3"></path>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Latte Vainilla',
    price: '$4.75',
    desc: 'Suave espresso con leche y un toque de vainilla natural.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    id: 4,
    name: 'Mocha Dark',
    price: '$5.00',
    desc: 'Chocolate oscuro derretido con espresso y leche.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    id: 5,
    name: 'Té Matcha',
    price: '$4.25',
    desc: 'Té verde japonés ceremonial con leche de almendras.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-2.246-3-3h0c.754.754.857 1.928 3 3 .5 1 1 1.62 1 3a2.5 2.5 0 0 0 2.5 2.5z"></path>
      </svg>
    )
  },
  {
    id: 6,
    name: 'Cold Brew',
    price: '$4.00',
    desc: 'Infusión en frío por 24 horas, suave y refrescante.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
        <path d="M6 1v3"></path>
        <path d="M10 1v3"></path>
        <path d="M14 1v3"></path>
      </svg>
    )
  },
]

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo">
            <img src={logo} alt="Hara Coffee" style={{ height: '80px' }} />
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#history">Nosotros</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content-box">
            <h1 className="hero-title">Disfruta el momento con <span className="highlight">Hara</span></h1>
            <p className="hero-subtitle">
              El mejor café, en el ambiente más acogedor. Ven y relájate con nosotros en un espacio diseñado para tus sentidos.
            </p>
            <button className="btn">Ver Menú</button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Nuestro Menú</h2>
            <div className="decorative-line"></div>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Selección de granos premium tostados artesanalmente para ofrecerte la mejor experiencia en cada taza.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-card">
                <div className="menu-icon">
                  {item.icon}
                </div>
                <h3>{item.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '10px 0' }}>{item.desc}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section-padding history-section">
        <div className="container history-container">
          <div className="history-image">
            {/* Placeholder for image - using Unsplash for demo */}
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop"
              alt="Barista pouring coffee"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div className="history-content">
            <h2>Nuestra Historia</h2>
            <div className="decorative-line" style={{ margin: '20px 0' }}></div>
            <p>
              Hara nació de la pasión por el café y el deseo de crear un espacio donde el tiempo se detiene.
              Desde nuestros inicios, nos hemos dedicado a buscar los mejores granos de las regiones cafetaleras
              más prestigiosas, trabajando directamente con agricultores locales.
            </p>
            <p>
              Creemos que cada taza cuenta una historia. La nuestra es una de dedicación, artesanía y amor por
              los detalles. Queremos que te sientas como en casa, rodeado de aromas que despiertan recuerdos y
              sabores que crean nuevos momentos.
            </p>
            <button className="btn" style={{ marginTop: '20px' }}>Conoce Más</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="logo" style={{ marginBottom: '20px' }}>
            <img src={logo} alt="Hara Coffee" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p>&copy; 2025 Hara Coffee Shop. Todos los derechos reservados.</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="#" style={{ color: 'var(--color-surface)' }}>Instagram</a>
            <a href="#" style={{ color: 'var(--color-surface)' }}>Facebook</a>
            <a href="#" style={{ color: 'var(--color-surface)' }}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
