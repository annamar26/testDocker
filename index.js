const searchInput = require("./searchComponent/searchClass")

customElements.define('search-input', searchInput, { extends: 'input' });
const buscador = new searchInput('searcher');
document.body.appendChild(buscador)



buscador.addEventListener('change', ()=>{
   buscador.search(buscador.value)
   console.log('si jala')
})