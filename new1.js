let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

var result;
var req=new XMLHttpRequest()
req.open('GET','https://api.openbrewerydb.org/breweries',true)
req.send()
req.onload=function(){
     result=JSON.parse(req.response)

}


let headers = []

for(let i in result)
{
    headers.push(i)
}


btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    result.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});