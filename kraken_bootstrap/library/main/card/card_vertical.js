
/*
classes: 

    - kr-image
            ${String(image_url)}
    - kr-heading1
            ${String(heading1)}
    - kr-heading2
            ${String(heading2)}
    - kr-text 
            ${String(text)}
    - kr-other
            ${other}
            <span class="kr-other">${other}</span>
    - kr-date
        ${String(date)}
    - kr-price
        ${String(price)}


*/

export function card_vertical(image_url='', heading1='', text='', other=''){

    let part_element = document.createElement('div');

    let content =  `
        <div class="card krThing" style="width: 18rem;">
          <img src="${image_url}" class="card-img-top krProperty" alt="" data-propertyID="image">
          <div class="card-body">
            <h5 class="card-title krProperty" data-propertyID="heading1">${String(heading1)}</h5>
            <p class="card-text krProperty" data-propertyID="heading2">${String(text)}</p>
            <span class="card-other krProperty" data-propertyID="description">${String(other)}</span>
          </div>
        </div>`;


    part_element.innerHTML = content;

    return part_element.firstChild;

}


