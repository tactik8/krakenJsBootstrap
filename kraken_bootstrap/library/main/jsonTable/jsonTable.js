

export function jsonTable(records){


    return processRecords(records)

}





function processRecords(record){

    records = ensureArray(records)

    let content = [];
    let count = 0;
    for(let record of records){
        content.push(`<details> <summary>${count}</summary>  ${processRecord(record)}</details>`)
        count +=1
    }
    return content.join('')

}



function processRecord(record){

    let content = [];

    for(let key in record){

        content.push(getRow(record, key))

    }
    return `<dl class="row"> ${content.join('')} </dl>`

}


function getRow(record, key){

    let content = ` <dt class="col-sm-3">${key}</dt>
                        <dd class="col-sm-9">${getValue(record[key])}</dd>`
    return content
}


function getValue(value){

    if(typeof value ==='object' && Array.isArray(value)){
        return `<details> <summary>More</summary>  ${processRecords(value)}</details>`
    } else if(typeof value ==='object' && !Array.isArray(value)){
        return `<details> <summary>More</summary>  ${processRecord(value)}</details>`
    } else {
        return value
    }
}



function ensureArray(value) {
    if (!value || value == null || value == [null]) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




