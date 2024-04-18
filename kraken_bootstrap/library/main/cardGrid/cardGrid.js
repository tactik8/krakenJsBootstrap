
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


export function cardGrid(other){

    let part_element = document.createElement('div');

    let content =  `

<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">

        ${other}
    
  </div>
</div>

      `

    part_element.innerHTML = content;

    return part_element;
}