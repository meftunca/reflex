(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1831:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(2),l=n.n(r),a=n(25),o=n(3);var c=()=>{const[e,t]=Object(r.useState)(!1);return l.a.createElement("div",null,l.a.createElement(o.Text,{variant:"h2"},"Collapse"),l.a.createElement("br",null),l.a.createElement(o.Button,{onClick:()=>t(!e)},"Toggle Collapse"),l.a.createElement(o.Collapse,{open:e},l.a.createElement(o.Box,{bgColor:"#f0f0f0",p:40,radius:6,mr:240})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Text,{variant:"h2"},"Collapse"),l.a.createElement("br",null),l.a.createElement(p,null))};const p=()=>{const[e,t]=Object(r.useState)(null);return l.a.createElement("div",null,Array(10).fill("").map(((n,r)=>l.a.createElement("div",{key:r},l.a.createElement(o.Button,{onClick:()=>t(e===r?null:r)},"Toggle Collapse Item ",r),l.a.createElement(o.Collapse,{open:e===r},l.a.createElement(o.Box,{bgColor:"#f0f0f0",p:40,radius:6,mr:240}))))))};n(4);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i,b=(i="Props",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),m={};function f(e){var t=e.components,n=u(e,["components"]);return Object(a.b)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)(c,{mdxType:"CollapseSimple"}),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-js",metastring:"live=true",live:"true"}),'function Example() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Toggle Collapse</Button>\n      <Collapse open={open}>\n        <Box bgColor="#f0f0f0" p={40} radius={6} m={[24, 12]}>\n          <Text>Collapse Content</Text>\n        </Box>\n      </Collapse>\n    </>\n  );\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(b,{of:o.Collapse,mdxType:"Props"}))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGFnZXMvRG9jdW1lbnRhdGlvbi9MYXlvdXQvQ29sbGFwc2UvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlcy9Eb2N1bWVudGF0aW9uL0xheW91dC9Db2xsYXBzZS9Db2xsYXBzZS5tZHgiXSwibmFtZXMiOlsiQ29sbGFwc2UiLCJvcGVuIiwic2V0T3BlbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYmdDb2xvciIsInAiLCJyYWRpdXMiLCJtciIsIkJhc2ljQWNjb3JkaW9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaSIsImsiLCJrZXkiLCJuYW1lIiwiUHJvcHMiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwibGF5b3V0UHJvcHMiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsIm1keFR5cGUiLCJwYXJlbnROYW1lIiwib2YiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjhLQXlCZSxJQUFBQSxFQXBCaUMsS0FDOUMsTUFBT0MsRUFBTUMsR0FBVyxvQkFBUyxHQUNqQyxPQUNFLDZCQUNFLGtCQUFDLE9BQUksQ0FBQ0MsUUFBUSxNQUFJLFlBQ2xCLDZCQUNBLGtCQUFDLFNBQU0sQ0FBQ0MsUUFBUyxJQUFNRixHQUFTRCxJQUFLLG1CQUNyQyxrQkFBQyxXQUFRLENBQUNBLEtBQU1BLEdBQ2Qsa0JBQUMsTUFBRyxDQUFDSSxRQUFRLFVBQVVDLEVBQUcsR0FBSUMsT0FBUSxFQUFHQyxHQUFJLE9BRS9DLDZCQUNBLDZCQUNBLDZCQUNBLGtCQUFDLE9BQUksQ0FBQ0wsUUFBUSxNQUFJLFlBQ2xCLDZCQUNBLGtCQUFDTSxFQUFjLFFBT3JCLE1BQU1BLEVBQWlCLEtBQ3JCLE1BQU9SLEVBQU1DLEdBQVcsbUJBQVMsTUFDakMsT0FDRSw2QkFDR1EsTUFBTSxJQUNKQyxLQUFLLElBQ0xDLEtBQUksQ0FBQ0MsRUFBR0MsSUFDUCx5QkFBS0MsSUFBS0QsR0FDUixrQkFBQyxTQUFNLENBQUNWLFFBQVMsSUFBTUYsRUFBUUQsSUFBU2EsRUFBSSxLQUFPQSxJLHdCQUMzQkEsR0FFeEIsa0JBQUMsV0FBUSxDQUFDYixLQUFNQSxJQUFTYSxHQUN2QixrQkFBQyxNQUFHLENBQUNULFFBQVEsVUFBVUMsRUFBRyxHQUFJQyxPQUFRLEVBQUdDLEdBQUksWSx3a0JDL0IzRCxJQUFzQlEsRUFJaEJDLEdBSmdCRCxFQUlNLFFBSkUsU0FBNkJFLEdBRXJELE9BREFDLFFBQVFDLEtBQUssYUFBZUosRUFBTywyRUFDNUIsa0JBQVNFLEtBR2hCRyxFQUFjLEdBSUwsU0FBU0MsRUFBVCxHQUdaLElBRkRDLEVBRUMsRUFGREEsV0FDR0wsRUFDRixvQkFDRCxPQUFPLFlBTFMsVUFLVCxLQUFlRyxFQUFpQkgsRUFBaEMsQ0FBdUNLLFdBQVlBLEVBQVlDLFFBQVEsY0FFNUUsaUJBQVEsQ0FDTixHQUFNLGVBRFIsZUFHQSxZQUFDeEIsRUFBRCxDQUFnQndCLFFBQVEsbUJBQ3hCLHVCQUFLLHNCQUFNQyxXQUFXLE9BQVUsQ0FDNUIsVUFBYSxjQUNiLFdBQWMsWUFDZCxLQUFRLFNBSFAsb1dBa0JMLGlCQUFRLENBQ04sR0FBTSxjQURSLGNBR0EsWUFBQ1IsRUFBRCxDQUFPUyxHQUFJMUIsV0FBVXdCLFFBQVEsV0FLakNGLEVBQVdLLGdCQUFpQiIsImZpbGUiOiIxOC1jaHVuay4xOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQHRzLW5vY2hlY2tcbmltcG9ydCB7IEJveCwgVGV4dCwgQnV0dG9uLCBDb2xsYXBzZSB9IGZyb20gXCJAcmUtZmxleC91aS9zcmNcIjtcbmltcG9ydCB7IENvbGxhcHNlUHJvcHMgfSBmcm9tIFwiQHJlLWZsZXgvdWkvc3JjL0VmZmVjdC9Db2xsYXBzZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbGxhcHNlU2ltcGxlOiBSZWFjdC5GQzxDb2xsYXBzZVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dCB2YXJpYW50PVwiaDJcIj5Db2xsYXBzZTwvVGV4dD5cbiAgICAgIDxiciAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+VG9nZ2xlIENvbGxhcHNlPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2Ugb3Blbj17b3Blbn0+XG4gICAgICAgIDxCb3ggYmdDb2xvcj1cIiNmMGYwZjBcIiBwPXs0MH0gcmFkaXVzPXs2fSBtcj17MjQwfSAvPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoMlwiPkNvbGxhcHNlPC9UZXh0PlxuICAgICAgPGJyIC8+XG4gICAgICA8QmFzaWNBY2NvcmRpb24gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlU2ltcGxlO1xuXG5jb25zdCBCYXNpY0FjY29yZGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtBcnJheSgxMClcbiAgICAgICAgLmZpbGwoXCJcIilcbiAgICAgICAgLm1hcCgoaSwgaykgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtrfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbihvcGVuID09PSBrID8gbnVsbCA6IGspfT5cbiAgICAgICAgICAgICAgVG9nZ2xlIENvbGxhcHNlIEl0ZW0ge2t9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxDb2xsYXBzZSBvcGVuPXtvcGVuID09PSBrfT5cbiAgICAgICAgICAgICAgPEJveCBiZ0NvbG9yPVwiI2YwZjBmMFwiIHA9ezQwfSByYWRpdXM9ezZ9IG1yPXsyNDB9IC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIENvbGxhcHNlIH0gZnJvbSBcIkByZS1mbGV4L3VpL3NyY1wiO1xuaW1wb3J0IENvbGxhcHNlU2ltcGxlIGZyb20gXCIuL1wiO1xuXG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFByb3BzID0gbWFrZVNob3J0Y29kZShcIlByb3BzXCIpO1xuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImJhc2ljLXVzYWdlXCJcbiAgICB9fT57YEJhc2ljIHVzYWdlYH08L2gyPlxuICAgIDxDb2xsYXBzZVNpbXBsZSBtZHhUeXBlPVwiQ29sbGFwc2VTaW1wbGVcIiAvPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIixcbiAgICAgICAgXCJtZXRhc3RyaW5nXCI6IFwibGl2ZT10cnVlXCIsXG4gICAgICAgIFwibGl2ZVwiOiBcInRydWVcIlxuICAgICAgfX0+e2BmdW5jdGlvbiBFeGFtcGxlKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlRvZ2dsZSBDb2xsYXBzZTwvQnV0dG9uPlxuICAgICAgPENvbGxhcHNlIG9wZW49e29wZW59PlxuICAgICAgICA8Qm94IGJnQ29sb3I9XCIjZjBmMGYwXCIgcD17NDB9IHJhZGl1cz17Nn0gbT17WzI0LCAxMl19PlxuICAgICAgICAgIDxUZXh0PkNvbGxhcHNlIENvbnRlbnQ8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8Lz5cbiAgKTtcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInByb3BlcnRpZXNcIlxuICAgIH19PntgUHJvcGVydGllc2B9PC9oMj5cbiAgICA8UHJvcHMgb2Y9e0NvbGxhcHNlfSBtZHhUeXBlPVwiUHJvcHNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==