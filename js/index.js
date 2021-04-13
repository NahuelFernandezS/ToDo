//Importacion de las clases 
import Model from './model.js';
import View from './view.js';


//Deja que cargue todo el html,css

document.addEventListener("DOMContentLoaded", () => {

    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);
});