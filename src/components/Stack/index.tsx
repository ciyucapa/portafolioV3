import "./stack.css";

import {
 FaReact,
 FaNodeJs,
 FaGitAlt,
 FaBootstrap,
 FaHtml5,
 FaGithub
} from "react-icons/fa";

import {
 SiNextdotjs,
 SiTypescript,
 SiFirebase,
 SiPrisma,
 SiTailwindcss,
 SiCss,
 SiVtex,
 SiExpress,
 SiAxios,
 SiRedux,
 SiGraphql,
 SiJavascript,
 SiGitlab,
 SiBitbucket,
 SiVite
} from "react-icons/si";

import {
 TbBrandReactNative
} from "react-icons/tb";

const technologies = [

{
 name:"React",
 icon:<FaReact/>
},

{
 name:"TypeScript",
 icon:<SiTypescript/>
},

{
 name:"Next.js",
 icon:<SiNextdotjs/>
},

{
 name:"Vite",
 icon:<SiVite/>
},

{
 name:"React Native",
 icon:<TbBrandReactNative/>
},

{
 name:"Node.js",
 icon:<FaNodeJs/>
},

{
 name:"Express",
 icon:<SiExpress/>
},

{
 name:"Prisma",
 icon:<SiPrisma/>
},

{
 name:"Firebase",
 icon:<SiFirebase/>
},

{
 name:"REST API",
 icon:"🔗"
},

{
 name:"GraphQL",
 icon:<SiGraphql/>
},

{
 name:"Axios",
 icon:<SiAxios/>
},

{
 name:"Redux Toolkit",
 icon:<SiRedux/>
},

{
 name:"VTEX IO",
 icon:<SiVtex/>
},

{
 name:"Tailwind",
 icon:<SiTailwindcss/>
},

{
 name:"CSS",
 icon:<SiCss/>
},

{
 name:"Bootstrap",
 icon:<FaBootstrap/>
},

{
 name:"JavaScript",
 icon:<SiJavascript/>
},

{
 name:"HTML5",
 icon:<FaHtml5/>
},

{
 name:"Git",
 icon:<FaGitAlt/>
},

{
 name:"GitHub",
 icon:<FaGithub/>
},

{
 name:"GitLab",
 icon:<SiGitlab/>
},

{
 name:"Bitbucket",
 icon:<SiBitbucket/>
}

];

export default function Stack(){

return(

<section
className="stack"
id="stack"
>

<div className="stack-container">

<p className="stack-label">

STACK

</p>

<h2>

Tecnologías con las que
construyo productos

</h2>

<p className="stack-description">

Frontend moderno,
dashboards,
APIs y experiencias web.

</p>

<div className="stack-grid">

{

technologies.map(
(item)=>(

<div
key={item.name}
className="tech-card"
>

<div
className="tech-icon"
>

{item.icon}

</div>

<h3>

{item.name}

</h3>

</div>

)

)

}

</div>

</div>

</section>

)

}