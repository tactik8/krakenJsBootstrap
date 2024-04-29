


export function menu(menu_Id, actions, other){

    
    let part_element = document.createElement('div');

    let menuItems = []
    for(let action of actions){
        menuItems.push(`<li>${getMenuItem(action)}</li>`)
    }

    

    let content = `<div class="dropdown krProperty">
          
          <a href="#" type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            ${getThreeDotsIcon()}
          </a>          
          </button>
          <ul class="dropdown-menu">
           ${menuItems.join('')}
          </ul>
        </div>`

    part_element.innerHTML = content;

    return part_element;
    

}


function getMenuItem(action){


    let content = `<div class="krThing">
    <a class="dropdown-item krProperty" href="#" data-propertyID="url">
    
        <div class="row justify-content-between">
            <div class="col-4 krProperty" data-propertyID="name">
              ${action.name}
            </div>
            <div class="col-4 krProperty" data-propertyID="image">
              ${action.image}
            </div>
          </div>
    </a></li></div>`
    return content
    
}



function getThreeDotsIcon(){
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`
}


function getHamburgerIcon(){
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>`
}