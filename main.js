// Elemento:
// ---------
// <li id="item-0" class="item">
//   <input type="checkbox"/>
//   <input class="descricao" placeholder="descrição"></input>
//   <i onclick="removerItem(0)" class="ph ph-trash"></i>
// </li>

// -----------------------------------------------------------------------------

const listaHTML = document.getElementById("lista");
let contador = 0;

function novoItem() {
  const item = document.createElement("li");
  item.id = `item-${contador}`;
  item.className = "item";
  item.innerHTML = `
    <input type="checkbox"/>
    <input class="descricao" placeholder="descrição"></input>g
    <i onClick="removerItem(${contador++})" class="ph ph-trash"></i>
  `

  listaHTML.appendChild(item);
}

function removerItem(id) {
  listaHTML.querySelector(`#item-${id}.item`).remove();
}

function limparLista() {
  const todos = listaHTML.querySelectorAll(`.item`);
  console.log(todos);

  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];

    if (element.querySelector("input").checked) {
      element.remove();
    }
  }
}