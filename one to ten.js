function showTables(){

    //this is the mainTable
    let mainTable = document.createElement('table');
    mainTable.setAttribute('class', 'mainTable');
    mainTable.setAttribute('id', 'mainTable');
    document.body.appendChild(mainTable);

    //this is the tr for the first row
    let trForRow1 = document.createElement('tr');
    mainTable.appendChild(trForRow1);

    //this is the td for the first row 
    let tdForRow1 = document.createElement('td');
    trForRow1.appendChild(tdForRow1);

    //this is the tr for the second row
    let trForSecondRow = document.createElement('td');
    mainTable.appendChild(trForSecondRow);

    //this is the td for the second row
    let tdForRow2 = document.createElement('td');
    trForSecondRow.appendChild(tdForRow2);

    for(let mainLoop = 1; mainLoop <= 10; mainLoop++){

        for(let babyLoop = 1; babyLoop <= 1; babyLoop++){
            //this is the table for row
            let firstRow = document.createElement('table');
            firstRow.setAttribute('class', 'firstRow');
            firstRow.setAttribute('id', 'firstRow');
            tdForRow1.appendChild(firstRow);

            // this is the tr for firstRow
            let firstRowTr = document.createElement('tr');
            firstRow.appendChild(firstRowTr);

            //these are the td's for the first row
            let firstRowMain = document.createElement('td');
            firstRowMain.innerHTML = babyLoop + ' X ';
            firstRowTr.appendChild(firstRowMain);

            let firstRowBaby = document.createElement('td');
            firstRowBaby.innerHTML = mainLoop + ' = ';
            firstRowTr.appendChild(firstRowBaby);

            let firstRowResult = document.createElement('td');
            firstRowResult.innerHTML = mainLoop + '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' +  ' 2 X ' + mainLoop + ' = ' + mainLoop * 2 + '&nbsp;' +  '&nbsp;' +  '&nbsp;' + '&nbsp;' +  '&nbsp;' +  ' 3 X ' + mainLoop + ' = ' + mainLoop * 3 + '&nbsp;' +  '&nbsp;' +  '&nbsp;' + '&nbsp;' +  '&nbsp;' +  ' 4 X ' + mainLoop + ' = ' + mainLoop * 4 +  '&nbsp;' +  '&nbsp;' +  '&nbsp;' +  '&nbsp;' +  '&nbsp;' + ' 5 X ' + mainLoop + ' = ' + 5 * mainLoop;
            firstRowTr.appendChild(firstRowResult);

            //this is the table for the second row
            let secondRow = document.createElement('table');
            secondRow.setAttribute('id', 'secondRow');
            secondRow.setAttribute('class', 'secondrow');
            tdForRow2.appendChild(secondRow);

            //this is the tr for second row
            let secondRowTr = document.createElement('tr');
            secondRow.appendChild(secondRowTr);

            //these are the td's for second row
            let secondRowMain = document.createElement('td');   
            secondRowMain.innerHTML = '6 X ';
            secondRowTr.appendChild(secondRowMain);

            let secondRowBaby = document.createElement('td');
            secondRowBaby.innerHTML = mainLoop + ' = ';
            secondRowTr.appendChild(secondRowBaby);

            let secondRowResult = document.createElement('td');
            secondRowResult.innerHTML = mainLoop * 6 + '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' + '7 X ' + mainLoop + ' = ' + mainLoop * 7 +  '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' + ' 8 X ' + mainLoop + ' = ' + mainLoop * 8 +  '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' + ' 9 X ' + mainLoop + ' = ' + mainLoop * 9 + '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' +  '&nbsp;' + ' 10 X ' + mainLoop + ' = ' + 10 * mainLoop;
            secondRowTr.appendChild(secondRowResult);
        }
    }
}
