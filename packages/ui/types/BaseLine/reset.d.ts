declare const ResetCss = "\n  html,\n  body,\n  body div,\n  span,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  abbr,\n  address,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  samp,\n  small,\n  strong,\n  sub,\n  sup,\n  var,\n  b,\n  i,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  figure,\n  footer,\n  header,\n  menu,\n  nav,\n  section,\n  time,\n  mark,\n  audio,\n  video,\n  details,\n  summary {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    background: transparent;\n  }\n\n  main,\n  article,\n  aside,\n  figure,\n  footer,\n  header,\n  nav,\n  section,\n  details,\n  summary {\n    display: block;\n  }\n\n  html,\n  body {\n    height: 100%;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: none;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  img,\n  object,\n  embed {\n    max-width: 100%;\n    width: 100%;\n    height: auto;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  blockquote,\n  q {\n    quotes: none;\n  }\n\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n\n  a {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: transparent;\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n\n  abbr[title],\n  dfn[title] {\n    border-bottom: 1px dotted #000;\n    cursor: help;\n  }\n\n  table {\n    border-collapse: separate;\n    border-spacing: 0;\n  }\n  th {\n    font-weight: bold;\n    vertical-align: bottom;\n  }\n  td {\n    font-weight: normal;\n    vertical-align: top;\n  }\n\n  hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n  }\n\n  input,\n  select {\n    vertical-align: middle;\n  }\n\n  pre {\n    white-space: pre; /* CSS2 */\n    white-space: pre-wrap; /* CSS 2.1 */\n    white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */\n    word-wrap: break-word; /* IE */\n  }\n\n  input[type=\"radio\"] {\n    vertical-align: text-bottom;\n  }\n  input[type=\"checkbox\"] {\n    vertical-align: bottom;\n  }\n  .ie7 input[type=\"checkbox\"] {\n    vertical-align: baseline;\n  }\n  .ie6 input {\n    vertical-align: text-bottom;\n  }\n\n  select,\n  input,\n  textarea {\n    font: 99% sans-serif;\n  }\n\n  table {\n    font-size: inherit;\n    font: 100%;\n  }\n\n  small {\n    font-size: 85%;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  td,\n  td img {\n    vertical-align: top;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n  sup {\n    top: -0.5em;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n\n  code.inline {\n    font-size: 0.875em;\n    color: #0048d7;\n    word-wrap: break-word;\n    padding: 0.15rem 0.5rem;\n    background-color: #0048d71a;\n    border-radius: 30px;\n    border: 1px solid #0048d750;\n    line-height: 1.9;\n  }\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: monospace, sans-serif;\n  }\n\n  .clickable,\n  label,\n  input[type=\"button\"],\n  input[type=\"submit\"],\n  input[type=\"file\"],\n  button {\n    cursor: pointer;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    margin: 0;\n  }\n\n  button,\n  input[type=\"button\"] {\n    width: auto;\n    overflow: visible;\n  }\n\n  .ie7 img {\n    -ms-interpolation-mode: bicubic;\n  }\n\n  [hidden] {\n    display: none;\n  }\n  .clearfix:after {\n    content: \" \";\n    display: block;\n    clear: both;\n  }\n";
export default ResetCss;
