"use client";

import "./contact.css";

import emailjs from "@emailjs/browser";

import {
 FaGithub,
 FaLinkedin,
 FaEnvelope,
 FaFileDownload
} from "react-icons/fa";

import {
 useRef,
 useState
} from "react";

export default function Contact(){

const formRef=
useRef<HTMLFormElement>(
null
);

const[
loading,
setLoading
]=
useState(false);

async function sendEmail(

e:React.FormEvent

){

e.preventDefault();

if(
!formRef.current
)return;

if(

!process.env
.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||

!process.env
.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||

!process.env
.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

){

setLoading(false);

alert(
"Faltan variables EmailJS"
);

return;

}

setLoading(true);

try{

await emailjs.sendForm(

process.env
.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

process.env
.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

formRef.current,

process.env
.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

);

alert(
"Mensaje enviado 🚀"
);

formRef.current.reset();

}

catch(error:any){

console.error(

"EmailJS Error:",

JSON.stringify(
error,
null,
2
)

);

alert(

"No se pudo enviar 😭"

);

}

finally{

setLoading(false);

}

}

return(

<section
id="contact"
className="contact"
>

<div
className="contact-container"
>

<p
className="contact-label"
>

CONTACTO

</p>

<h2>

¿Construimos algo juntos?

</h2>

<p
className="contact-description"
>

Disponible para frontend,
React,
Next.js,
VTEX
y nuevos retos.

</p>

<div
className="contact-grid"
>

<div
className="contact-info"
>

<a
href="mailto:cindycaceres134@gmail.com"
>

<FaEnvelope/>

Email

</a>

<a
href="https://www.linkedin.com/in/cindycaceresp/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

LinkedIn

</a>

<a
href="https://github.com/ciyucapa"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

GitHub

</a>

<a
href="/Cindy_Caceres_Frontend_Developer.pdf"
target="_blank"
rel="noreferrer"
>

<FaFileDownload/>

CV

</a>

</div>

<form

ref={formRef}

onSubmit={sendEmail}

className="contact-form"

>

<input

name="name"

placeholder="Nombre"

required

/>

<input

name="email"

type="email"

placeholder="Correo"

required

/>

<textarea

name="message"

placeholder="Cuéntame tu idea..."

rows={5}

required

/>

<button

type="submit"

disabled={loading}

>

{

loading

?

"Enviando..."

:

"Enviar mensaje ✨"

}

</button>

</form>

</div>

</div>

</section>

)

}