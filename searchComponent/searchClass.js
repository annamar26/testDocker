import {connectMongo} from "../mongoModule.js"


export default class searchInput extends HTMLInputElement{
    constructor(idName){
        super()
        this.type = 'search'
        this.placeholder = 'Busca el producto que deseas'
        this.style = 'width: 50%; border: 2px solid blue; color: gray;'
        this.id = idName;
        this.align = 'center'
     
    }

    search(valor){
        
        const response = connectMongo().find(elem => elem === valor.trim() )
       
    }
}