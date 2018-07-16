import SpreadSheet from '../src/spreadsheet';
import Cell from '../src/cell';


describe('Bateria de tests para Spreadsheet', () => {

    it('Componente spreadsheet renderiza una tabla vacía', () => {
        const spreadSheet = new SpreadSheet();
        expect(spreadSheet.render()).toMatchSnapshot();
    });

    it('Renderizar una tabla con header', () => {
        const spreadSheet = new SpreadSheet(
            [
                new Cell(), new Cell()
            ], [

            ]);

        expect(spreadSheet.render()).toMatchSnapshot();

    });

    it('Renderizar una tabla con header de cuatro columnas', () => {

    });


});