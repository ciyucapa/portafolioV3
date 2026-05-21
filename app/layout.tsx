import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

metadataBase:

new URL(
"https://cindycaceres-dev.vercel.app"
),

title:
"Cindy Cáceres | Frontend Developer",

description:
"Frontend Developer especializada en React, Next.js, TypeScript y desarrollo web moderno.",

keywords:[

"React",
"Next.js",
"Frontend Developer",
"TypeScript",
"VTEX"

],

openGraph:{

title:
"Cindy Cáceres Portfolio",

description:
"Frontend Developer React • Next.js",

images:[

"/metadapicture.png"

],

type:
"website",

locale:
"es_CO"

},

twitter:{

card:
"summary_large_image",

images:[

"/metadapicture.png"

]

}

};

export default function RootLayout({

children

}:{

children:
React.ReactNode

}){

return(

<html lang="es">

<body>

<div
className="noise"
/>

{children}

</body>

</html>

)

}