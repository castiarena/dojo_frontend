
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import SpreadSheet from "../src/spreadsheet";
expect.extend({ toMatchImageSnapshot });

const imageFromRender = async (render) => {
    const page = await global.__BROWSER__.newPage();
    await page.evaluate(
        (innerHTML) => {
            document.body.innerHTML = innerHTML;
            return innerHTML;
        }, render) ;
    return page.screenshot();
};

describe('Bateria de tests para Spreadsheet', () => {

    it('PEPE', async () => {
        //const cellList = new CellList([new Cell()]);
        const table = new SpreadSheet();
        const render = table.render();
        expect(render).toMatchSnapshot();
        const image = await imageFromRender(table.render());
        expect(image).toMatchImageSnapshot({
            customSnapshotIdentifier: 'pepe----aca'
        });

    });

    it('MUNDO', async () => {
        //const cellList = new CellList([new Cell()]);
        const table = new SpreadSheet();
        const image = await imageFromRender(table.render());
        expect(table.render()).toMatchSnapshot();
        expect(image).toMatchImageSnapshot();
    });

});