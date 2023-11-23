const liElem = `
<li id="item-0" class="item">
  <input type="checkbox"/>
  <span contenteditable>%TEXTO%</span>
  <i onclick="removerItem(0)" class="ph ph-trash"></i>
</li>
`;

// -----------------------------------------------------------------------------

const listaHTML = document.getElementById("lista");
let contador = 0;

function novoItem() {
  const item = document.createElement("li");
  item.id = `item-${contador}`;
  item.className = "item";
  item.innerHTML = `
    <input type="checkbox"/>
    <span contenteditable>${'texto'}</span>
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