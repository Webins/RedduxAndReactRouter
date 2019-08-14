// import { createStore } from "redux";
// const $form = document.getElementById("form");
// const $playlist = document.getElementById("playlist");

// const preloadState = [
//   {
//     title: "Despacito"
//   },
//   {
//     title: "One more time"
//   },
//   {
//     title: "Echame la culpa"
//   }
// ];

// //REDUCER
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_SONGS":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// //STORE
// const store = createStore(
//   reducer,
//   preloadState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// function render() {
//   const list = store.getState();
//   const template = document.createElement("p");
//   if (list.length) {
//     list.forEach(element => {
//       template.textContent = element.title;
//       $playlist.appendChild(template);
//     });
//   }
//   if (list.length > 3) {
//     const lastindex = [list.length - 1];
//     template.textContent = list[lastindex].title;
//     $playlist.appendChild(template);
//   }
// }
// render();
// //MANEJADOR DE EVENTO
// const handleSubmit = e => {
//   e.preventDefault();
//   const data = new FormData($form);
//   const title = data.get("title");
//   store.dispatch({
//     type: "ADD_SONGS",
//     payload: {
//       title //title:title
//     }
//   });
// };
// $form.addEventListener("submit", handleSubmit);

// const handleState = () => {
//   render();
// };

// store.subscribe(handleState);
