import './styles.css';
import menuCards from "./templates/menuCard.hbs";
import menu from "./menu.json";




const menuContainer = document.querySelector(".js-menu");

menuContainer.insertAdjacentHTML("beforeend", menuCards(menu));
  const Switch = document.querySelector("#theme-switch-toggle");
  Switch.addEventListener('change',showSwitchTheme);


    // document.getElementById("#theme-switch-toggle").checked = true;


//   setSavedValue(Switch);

//   function setSavedValue(e){
//     if(localStorage.getItem('switchState') === null){
//       e.checked = true;
//       localStorage.setItem('switchState', 1);
//     }else{
//         e.checked = localStorage.getItem('soundState') == 1;
//       }
//   }n

  

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

function showSwitchTheme (e){
      if (e.target.checked){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
          localStorage.setItem('theme', Theme.DARK);
       
          
      } else  {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', Theme.LIGHT);
          
       
}
};



document.addEventListener("DOMContentLoaded", function() {
          let background = localStorage.getItem('theme');
          if (background) {
            document.body.className = background;
          }
    
    let checkbox = document.getElementById("theme-switch-toggle");
    
    if (background === Theme.DARK)
        Switch.checked = true;
    else
        localStorage.setItem("theme-switch-toggle", checkbox.checked);
});






//   document.addEventListener("DOMContentLoaded",function(){
//             // let nom = localStorage.getItem('nom');
//             let prenom = localStorage.getItem('prenom');
//             if(prenom!==null) {                 
//                 // Switch.checked = nom;
//                 Switch.checked = prenom;
//             }
//         });


// const currentTheme = localStorage.getItem("theme");
// // If the current local storage item can be found
// if (currentTheme) {
//   // Set the body data-theme attribute to match the local storage item
//   document.documentElement.setAttribute("theme", currentTheme);
// // If the current theme is dark, check the theme toggle
//   if (currentTheme === "light-theme") {
//     document.getElementById("#theme-switch-toggle").checked = true;
//   }if (currentTheme === "dark-theme") {
//     document.getElementById("#theme-switch-toggle").checked = true;
//   }
// // }
// }
