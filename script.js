import { kraken_bootstrap } from './kraken_bootstrap/kraken_bootstrap.js';


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
}


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

let d = document.getElementById('test_4');

let element = kraken_bootstrap.things.footer(record);
 

d.appendChild(element);







//test();