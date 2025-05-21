// Proyecto Clean Up Spaces - Sitio Web Mejorado con Bootstrap y Carrusel

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 sticky-top">
      <a className="navbar-brand" href="/">Clean Up Spaces</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/testimonios">Testimonios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Inicio() {
  return (
    <section className="container my-5 text-center">
      <h2 className="mb-4">La limpieza que necesitas, justo a tiempo</h2>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
              <img src="/images/logo.png" alt="Logo" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/productos-limpieza.jpg" className="d-block w-100" alt="Productos de limpieza" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">¿Quiénes somos?</h2>
      <div className="row align-items-center"><div className="col-md-6">
          <p>Clean Up Spaces nació con el propósito de brindar limpieza profesional de alta calidad en espacios residenciales, comerciales y turísticos.</p>
          <h4>Misión</h4>
          <p>Brindar servicios de limpieza rápidos, eficientes y de alta calidad para diversos espacios.</p>
          <h4>Visión</h4>
          <p>Ser la empresa líder en soluciones de limpieza en el sureste mexicano, reconocida por su innovación, compromiso ecológico y excelencia en el servicio.</p>
          <h4>Valores</h4>
          <ul>
            <li>Responsabilidad</li>
            <li>Puntualidad</li>
            <li>Compromiso con el cliente</li>
            <li>Respeto por el medio ambiente</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/images/epp.jpg" alt="Equipo de protección" className="img-fluid rounded" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const [seleccionado, setSeleccionado] = useState(null);

  const paquetes = [
    {
      nombre: "Limpieza Básica",
      detalle: "Incluye limpieza de superficies, barrido, aspirado y baños. Ideal para mantenimiento semanal.",
      imagen: "limpieza-oficina",
    },
    {
      nombre: "Limpieza de Cristales",
      detalle: "Limpieza especializada de ventanas, canceles y vitrales, con productos antiempañantes.",
      imagen: "cristales",
    },
    {
      nombre: "Airbnb y Espacios Habitacionales",
      detalle: "Cambio de blancos, limpieza general, sanitización ligera y revisión estética del espacio.",
      imagen: "airbnb",
    },
    {
      nombre: "Desinfección Profesional",
      detalle: "Limpieza profunda con productos hospitalarios en baños, cocinas, pisos y superficies críticas.",
      imagen: "desinfeccion",
    },
    {
      nombre: "Antes",
      detalle: "Ejemplo de un espacio antes de nuestros servicios.",
      imagen: "antes",
    },
    {
      nombre: "Después",
      detalle: "Resultado visual después de una limpieza completa.",
      imagen: "despues",
    }
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row g-4 mb-5">
        {paquetes.map((p, i) => (
          <div className="col-md-4 text-center" key={i}>
            <img
              src={`/images/${p.imagen}.jpg`}
              alt={p.nombre}
              className="img-fluid rounded shadow-sm"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
            <h5 className="mt-3">{p.nombre}</h5>
            <button className="btn btn-outline-success btn-sm mt-2" onClick={() => setSeleccionado(i)}>Ver detalles</button>
            {seleccionado === i && (
              <p className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>{p.detalle}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h4 className="text-center">Paquetes y Costos</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Limpieza Básica: $500 (hasta 50 m²), $700 (51-100 m²), $900 (+100 m²)
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => setSeleccionado('basica')}>Ver detalle</button>
            {seleccionado === 'basica' && <p className="mt-2 text-muted">Incluye barrido, aspirado, limpieza de superficies y baño. Ideal para mantenimiento semanal.</p>}
          </li>
          <li className="list-group-item">
            Limpieza Profunda: $700, $1000, $1200
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => setSeleccionado('profunda')}>Ver detalle</button>
            {seleccionado === 'profunda' && <p className="mt-2 text-muted">Limpieza a fondo en zonas difíciles, sanitización, paredes, techos y detalles minuciosos.</p>}
          </li>
          <li className="list-group-item">
            Limpieza Post-Evento: $550, $800, $1050
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => setSeleccionado('evento')}>Ver detalle</button>
            {seleccionado === 'evento' && <p className="mt-2 text-muted">Retiro de basura, limpieza general intensiva y desinfección posterior a reuniones o eventos.</p>}
          </li>
          <li className="list-group-item">
            Oficinas y Airbnb: $550, $800, $1050
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => setSeleccionado('oficina')}>Ver detalle</button>
            {seleccionado === 'oficina' && <p className="mt-2 text-muted">Limpieza orientada a espacios de trabajo o alquiler temporal. Incluye blancos y superficies.</p>}
          </li>
          <li className="list-group-item">
            Mantenimiento Regular (mensual): $1200, $2000, $2700
            <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => setSeleccionado('mantenimiento')}>Ver detalle</button>
            {seleccionado === 'mantenimiento' && <p className="mt-2 text-muted">Servicio continuo semanal o quincenal para mantener el espacio impecable de forma regular.</p>}
          </li>
        </ul>
      </div>

      <p className="text-muted text-center">
        * Los precios son aproximados y pueden variar dependiendo de factores como ubicación, tamaño o nivel de detalle requerido.
      </p>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Testimonios</h2>
      <div className="row">
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">“Quedé muy satisfecha con la limpieza, ¡excelente atención y puntualidad!”</p>
            <footer className="blockquote-footer mt-2">Rufus Stewart</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">“Mi Airbnb siempre queda impecable, ¡los recomiendo totalmente!”</p>
            <footer className="blockquote-footer mt-2">Helene Paquet</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p className="mb-0">“Excelente servicio, muy profesional y con resultados visibles.”</p>
            <footer className="blockquote-footer mt-2">Harper Russo</footer>
          </blockquote>
        </div>
      </div>
      <div className="text-center mt-4">
        <img src="/images/cliente-feliz.jpg" alt="Cliente satisfecho" className="img-fluid rounded" style={{ maxWidth: '500px' }} />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <div className="text-center">
        <p>Teléfono: 9834234496</p>
        <p>Dirección: Cancún, Quintana Roo</p>
        <p>Horario: Lunes a Sábado, 8:00 AM a 6:00 PM</p>
        <p>Redes sociales: @SpacesCleanUp</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <footer className="bg-light text-center py-3 mt-5">
        <small>
          © 2025 Clean Up Spaces. Todos los derechos reservados. Imágenes utilizadas con fines ilustrativos bajo licencia Pixabay. Sitio desarrollado como entrega académica.
        </small>
      </footer>
    </Router>
  );
}
