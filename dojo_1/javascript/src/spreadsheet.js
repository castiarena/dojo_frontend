
export default class SpreadSheet {

    constructor(cells) {
        this.cells = cells;
    }

    renderRows(){
        return this.cells.render();
    }

    render(){
        return `<table><h1>HOLA pepe</h1></table>`;
    }
}

