import "./projects.css";
import Image from "next/image";

const projects = [

{
 title:"Santo Bocado",

 description:
"Landing web para marca gastronómica con dashboard administrativo, autenticación Firebase y API backend propia en construcción.",

 stack:[
"React",
"Node",
"Express",
"Firebase"
],

 image:
"/santo-bocado-preview.png",

 link:
"https://santo-bocado.vercel.app/",

 status:
"🚧 Dashboard + API Building"

},

{
 title:"Costify",

 description:
"Aplicación móvil para gestión de inventario, costos, producción, ventas y análisis financiero para pequeños negocios.",

 stack:[
"React Native",
"Firebase",
"Expo"
],

 image:
"/costifyapp.png",

 link:"https://github.com/ciyucapa/costify-apk/releases/tag/v1.0.0-beta",

 status:
"🚀 Play Store Soon"

},

{
 title:"Ecommerce Experience",

 description:
"Experiencia frontend construyendo soluciones ecommerce sobre VTEX IO, componentes React y consumo de APIs.",

 stack:[
"VTEX IO",
"React",
"GraphQL",
"REST API"
],

 image:"/vtex-itg.png",

 status:"💼 Experiencia Professional"
}

];

export default function Projects(){

return(

<section
id="projects"
className="projects"
>

<div
className="projects-container"
>

<p
className="projects-label"
>

PROJECTS

</p>

<h2>

Construyendo
productos reales

</h2>

<p
className="projects-description"
>

Experiencia práctica
creando interfaces,
APIs y soluciones web.

</p>

<div
className="projects-grid"
>

{

projects.map(
(project)=>(

<div
key={
project.title
}

className="
project-card
"
>

<div
className="
project-image
"
>

<Image

src={
project.image
}

alt={
project.title
}

fill

sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"

className="
preview-project
"

/>

</div>

<div
className="
project-content
"
>

<span
className="
project-status
"
>

{project.status}

</span>

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div
className="
project-stack
"
>

{

project.stack.map(
(item)=>(

<span
key={item}
>

{item}

</span>

)

)

}

</div>

{

project.link

? (

<a

href={project.link}

target="_blank"

rel="noreferrer"

className="
project-link
"

>

{

project.title === "Costify"

? "Descargar APK ↗"

: "Ver proyecto ↗"

}

</a>

)

: (

<div
className="
project-company
"
>

💼 Experiencia profesional

</div>

)

}

</div>

</div>

)

)

}

</div>

</div>

</section>

)

}