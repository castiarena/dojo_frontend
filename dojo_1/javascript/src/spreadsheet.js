
export default class SpreadSheet {

    constructor(cells) {
        this.cells = cells;
    }

    render(){
        return `<table>${this.cells.map(cell => cell.render())}</table>`;
    }
}

