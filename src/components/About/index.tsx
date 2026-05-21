import "./about.css";
import Image from "next/image";

export default function About(){

return(

<section
id="about"
className="about"
>

<div
className="
about-container
"
>

{/* FOTO */}

<div
className="
about-photo
"
>

<div
className="
photo-wrapper
"
>

<div
className="
profile-glow
"
/>

<Image

src="/profile.jpg"

alt="Cindy"

width={420}

height={520}

className="
profile-image
"

/>

</div>

</div>

{/* CONTENIDO */}

<div
className="
about-content
"
>

<p
className="
about-label
"
>

SOBRE MÍ

</p>

<h2>

Mi camino hacia
el desarrollo

</h2>

<p
className="
about-text
"
>

Mi transición al desarrollo
comenzó hace más de 6 años,
aprendiendo JavaScript
y tecnologías frontend
de manera autodidacta.

Aunque no cuento con un título
de ingeniería de software,
he construido mi camino
a través de formación constante,
escuelas como Platzi y Udemy,
práctica diaria
y desarrollo de proyectos reales.

</p>

<p
className="
about-text
"
>

Hoy construyo interfaces modernas
con React,
Next.js
y TypeScript,
además de aplicaciones móviles
con React Native
y APIs con Node.js,
Express y Prisma.

He participado en proyectos ecommerce,
desarrollado productos propios
como Costify
y Santo Bocado,
y continúo aprendiendo
cada día para crear
soluciones con impacto.

</p>

<div
className="
about-stats
"
>

<div
className="
stat-card
"
>

<h3>

6+

</h3>

<p>

Años aprendiendo

</p>

</div>

<div
className="
stat-card
"
>

<h3>

React

</h3>

<p>

Frontend moderno

</p>

</div>

<div
className="
stat-card
"
>

<h3>

VTEX

</h3>

<p>

Ecommerce

</p>

</div>

<div
className="
stat-card
"
>

<h3>

Node

</h3>

<p>

Backend Junior

</p>

</div>

</div>

</div>

</div>

</section>

)

}