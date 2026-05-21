import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

title:
"Cindy Cáceres | Frontend Developer",

description:
"Frontend Developer especializada en React, Next.js, TypeScript, VTEX y desarrollo de experiencias web modernas.",

keywords:[
"React",
"Next.js",
"Frontend Developer",
"TypeScript",
"VTEX",
"React Native",
"Node.js",
"Firebase",
"Prisma"
],

authors:[

{
name:"Cindy Cáceres"
}

],

creator:
"Cindy Cáceres",

openGraph:{

title:
"Cindy Cáceres Portfolio",

description:
"Frontend Developer React • Next.js • TypeScript",

images:[

"/profile.png"

],

type:
"website",

locale:
"es_CO"

},

icons:{

icon:
"/favicon.ico"

}

};

export default function RootLayout({

children,

}:Readonly<{

children:
React.ReactNode;

}>){

return(

<html
lang="es"
>

<body>

<div
className="noise"
/>

{children}

</body>

</html>

)

}