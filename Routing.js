window.onload = () => {
const linker = document.querySelectorAll("a");
const HomeLinker = document.querySelector(".titleBox");
linker.forEach((element) => {
         element.addEventListener("click", (event) => {
             const pathName = event.target.id;
             window.history.pushState(undefined,"타이틀",`/CampingOwners/pages/${pathName}.html`);
             history.go(0);
         });
     });

     HomeLinker.addEventListener("click", (event) =>{
        window.history.pushState(undefined,"타이틀",'/CampingOwners/pages/index.html');
        history.go(0);
     })
 }


// const historyRouterPush = (pathName, element) => {
//     window.history.pushState({}, pathName, window.location.origin + pathName);
//     renderHTML(element, routes[pathName]);
// };

// const renderHTML = (element, route) => {
//     element.innerHTML = route;
// };

// window.onpopstate = () =>
// renderHTML(element, routes[window.location.pathname]);