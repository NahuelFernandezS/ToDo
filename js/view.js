//Vista
export default class View{
    constructor(){
        this.model = null;
        this._table = document.getElementById("table");
        const _btnAdd = document.getElementById("add");
        _btnAdd.onclick = () => this.addTodo('Tituloo', 'descriptionnnnn');
    }

    setModel(model){
        this.model = model;
    }

    addTodo(title, descripcion){
        this.model.addTodo(title,descripcion);
    }
}