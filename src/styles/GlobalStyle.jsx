import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

 *{
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  }
  
  body{
  font-family: 'Nunito Sans', sans-serif;
}

.title-create-user {
  color: #000;
  font-weight: bold;
  font-size: 25px;
}

.pass-create-user {
  color: red;
  font-weight: bold;
  font-size: 35px;
  margin: 10px 0 15px;
}

.text-create-user {
  color: #000;
  font-weight: bold;
  font-size: 20px;
}

// #006992 - blue sapphire
// #27476e - indigo dye
// #001d4a - oxford blue
// #470063 - indigo
// #b30089 - fandango
// #157f1f - ao english green
// #4cb963 - esmerald
// #88d18a - grammy smith apple
// #f2c94c - yellow

`;

