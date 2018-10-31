
export default class SpreadSheet {

    constructor(cells) {
        this.name = 'nombre';
        this.cells = cells;
    }

    renderRows(){
        return this.cells.render();
    }

    render(){
        return `<table><h1>HOLA mundo</h1><br><p>asdasf ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, blanditiis cum, dolore eligendi eos iusto nemo obcaecati odit optio perspiciatis quia, sequi tempore ullam voluptatibus? Deserunt earum minima modi.</p></table>`;
    }
}

