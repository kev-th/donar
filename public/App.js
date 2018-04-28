
// when window loaded fully, then move on
$(document).ready ( () => {

// Get data from firebase
$.getJSON("/firebase")
    .then((itemObjects) => {
        itemObjects.forEach( (eachItem) => {
            var newLi = $('<li>'+eachItem.name + ' ' + eachItem.add + ' <span>x</span></li>');

            // find id = list from DOM, append new 'newLi' as children.
            $('.list').append(newLi);
        })

    });

    // For each item added by user, simply put a listener to a button and execute createItem();

});



function addsingleItem(itemObject){
    var newItem = $('<li class="task">' + itemObject.name + itemObject.add + ' <span>x</span></li>');

    $('.list').append(newItem);
}

function createItem(){
    var usrName = "user input!";
    var usrAdd = "user address";
    
    $.post("/firebase" , {address : usrAdd}, {name : usrName} )
    .then((data) => {
        console.log("sucesful!")
    }
    //addsingleItem)
    )   
    .catch( (err)  => {
        console.log(err);
    })

}