import "./footer.css";

import {
 FaGithub,
 FaLinkedin,
 FaEnvelope
} from "react-icons/fa";

export default function Footer(){

return(

<footer
className="footer"
>

<div
className="footer-container"
>

<div
className="footer-brand"
>

<h3>

CINDY

<span>

.

</span>

DEV_

</h3>

<p>

Frontend Developer

React • Next.js • TypeScript

</p>

</div>

<div
className="footer-links"
>

<a
href="mailto:cindycaceres134@gmail.com"
>

<FaEnvelope/>

</a>

<a
href="https://github.com/ciyucapa"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/cindycaceresp/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

</a>

</div>

</div>

<div
className="footer-bottom"
>

<p>

© 2026 Cindy Cáceres

Construido con Next.js + 💜

</p>

</div>

</footer>

)

}