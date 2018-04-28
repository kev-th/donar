
// when window loaded fully, then move on
$(document).ready ( () => {

// Get data from firebase
$.getJSON("/firebase")
    .then((itemObjects) => {
        console.log(itemObjects);
        $.each(itemObjects, (k,eachItem) => {
            var newLi = $('<li>' + eachItem.name + ' ' + eachItem.add + ' <span>x</span></li>');

            // find id = list from DOM, append new 'newLi' as children.
            $('.list').append(newLi);
        })

        //itemObjects.forEach( (eachItem) => {
        //    
        //})
    });

    // For each item added by user, simply put a listener to a button and execute createItem();

});



function addsingleItem(itemObject){
    var newItem = $('<li class="task">' + itemObject.name + itemObject.add + ' <span>x</span></li>');

    $('.list').append(newItem);
}

function createItem(username,useradd){
    var usrName = username;
    var usrAdd = useradd;
    
    $.post("/firebase" , {address : usrAdd}, {name : usrName} )
    .then((data) => {

    }
    //addsingleItem)
    )   
    .catch( (err)  => {
        console.log(err);
    })

}

function updateItem(item){
    var clickedId = item.data('id'); //id of each item is stored within property 'id' itself
    var updateUrl = '/firebase/' + clickedId;
    var isDone = !todo.data('true');
    var updateData = {reservedPickUp: isDone};

    $.ajax({
        method:'PUT',
        url: updateUrl,
        data: updateData
    })
    .then( (data) => {

        todo.data('reserved',isDone);
    })
}