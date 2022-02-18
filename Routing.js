window.onload = () => {
const linker = document.querySelectorAll("a");
const HomeLinker = document.querySelector(".titleBox");
const LOGIN_BTN = document.getElementById('toLoginBtn');

linker.forEach((element) => {
         element.addEventListener("click", (event) => {
             const pathName = event.target.id;
             window.history.pushState(undefined,"",`/CampingOwners/pages/${pathName}.html`);
             history.go(0);
         });
        });

     HomeLinker.addEventListener("click", (event) =>{
        window.history.pushState(undefined,"",'/CampingOwners/pages/Home.html');
        history.go(0);
     })

     LOGIN_BTN.addEventListener("click", (event) => {
        window.history.pushState(undefined,"",'/CampingOwners/pages/Login.html');
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