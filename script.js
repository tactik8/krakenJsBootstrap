import { kraken_bootstrap } from './kraken_bootstrap/kraken_bootstrap.js';
//import { kraken_bootstrap } from 'https://cdn.jsdelivr.net/gh/tactik8/krakenJsBootstrap@main/kraken_bootstrap/kraken_bootstrap.js';


//https://cdn.jsdelivr.net/gh/tactik8/krakenJsBootstrap@main/kraken_bootstrap/kraken_bootstrap.js

let m = kraken_bootstrap.main;




function get_record(record_id){
    let record = {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
            "key4": "value4",
            "key5": "value5",
        };
    return record;
}

function get_records(qty=20){

    let records = [];
    for(let i=0; i< 20; i++){
        records.push(get_record(i));
    };
    return records;
}


function test_card(){
    
    let d = document.getElementById('test_card');
    
    let card = m.card.card_vertical('./user2.png', null, 'some text');
    
    d.appendChild(card);

}

function test_table(){

    let records = get_records(20);

    let d = document.getElementById('test_card');
    
    let table = m.table(records);

    d.appendChild(table);
}

function test_hero(){

    let records = get_records(20);

    let d = document.getElementById('test_hero');

    let element = m.hero.hero_left('./user2.png', 'heading 1', 'some text');

    d.appendChild(element);
}

function test_features(){

    let records = get_records(20);

    let d = document.getElementById('test_features');

    let element = m.features('h1', 't1', '', 'h2', 't2', '', 'h3', 't3', '');

    d.appendChild(element);
}



function test_header(){

    let records = get_records(20);

    let d = document.getElementById('test_header');

    let element = m.header('', 'test', ['a', 'b', 'c'], ['a', 'b', 'c']);

    d.appendChild(element);
}

function test_pagination(){

    //let records = get_records(20);

    let d = document.getElementById('test_header');

    let element = m.pagination( ['a', 'b', 'c'], ['a', 'b', 'c']);

    d.appendChild(element);
}



function star_rating(){

    //let records = get_records(20);

    let d = document.getElementById('test_2');

    let element = m.star_rating(3.3);
    console.log(element);

    d.appendChild(element);
}



function test_testimonial(){

    //let records = get_records(20);

    let d = document.getElementById('test_3');

    let element = m.testimonial(3.3, 'Fantastic product, much review', 'This is a fantastic product. Much netter than the other.', 'Bob Smith');
    console.log(element);

    d.appendChild(element);
}

function test_card_small(){

    //let records = get_records(20);

    let d = document.getElementById('test_4');

    let element = m.card.card_small('./user2.png', '<a href="#">Bob Smith</a>', 'Software engineer');

    d.appendChild(element);
}


function test_footer(){

    let record = {
        "@type": "person",
        "@id": "someid",
        "logo": "./user2.png",
        "hasPart": [
            {
                "@type": "webPage",
                "name": "name1",
                "url": "url1"
        },
            {
                 "@type": "webPage",
                    "name": "name1",
                    "url": "url1"
            },
            {
                 "@type": "webPage",
                    "name": "name1",
                    "url": "url1"
            },

        ],
        "familyName": "Smith",
        "email": "bob@test.com",
        'image': './user2.png',
        "text": "Some text here"

    }

    let d = document.getElementById('test_5');

    let element = kraken_bootstrap.things.footer(record);


    d.appendChild(element);

}


function test_menu(){


    let actions = [ 
        {

            "@type": "action",
            "@id": "action1",
            "name": "action1",
            "image": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                </svg>`

        },
        {

            "@type": "action",
            "@id": "action2",
            "name": "action2",
            "image": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                </svg>`

        },
        {

            "@type": "action",
            "@id": "action3",
            "name": "action3",
            "image": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                </svg>`

        }
    ]

    let d = document.getElementById('test_6');

    let element = m.menu('test', actions);
    console.log(element);

    d.appendChild(element);
}

function test(){
    test_card();
    test_table();
    test_hero();
    test_features();
    test_header();
    test_pagination();
    star_rating();
    test_testimonial();
    test_card_small();
    test_menu()
}





test();