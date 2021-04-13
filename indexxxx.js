//Deja que cargue todo el html,css

document.addEventListener("DOMContentLoaded", function () {
  const _title = document.getElementById("title");
  const _description = document.getElementById("description");
  const _alert = document.getElementById("alert");
  let id = 1;
  
  function removeToDo(id){
      document.getElementById(id).remove();
  }

  function addTodo() {
    if (_title.value === "" || _description.value === "") {
      _alert.classList.remove("d-none");
      _alert.innerText = "Titulo o descripcion son requeridos";
      return;
    }
    _alert.classList.add("d-none");
    const _row = _table.insertRow();
    _row.setAttribute('id', id++);
    _row.innerHTML = `
            <td>${_title.value}</td>
                 <td>${_description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

    const _removeBtn = document.createElement('button');
    _removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
    _removeBtn.innerHTML = '<i class= "fa fa-trash"></i>';

    _removeBtn.onclick = function (e) {
      removeToDo(_row.getAttribute('id'));
    }
    _row.children[3].appendChild(_removeBtn);

  }

  _btnAdd.onclick = addTodo;
});
