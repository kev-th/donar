
// when window loaded fully, then move on
$(document).ready ( () => {

// Get data from firebase
$.getJSON("/firebase")
    .then((itemObjects) => {
        
        // Each item in the object
        $.each(itemObjects, (k,eachItem) => {
            var newLi = $('<li> </li>');
            //console.log(eachItem);
            //var newLi = $('<li>' + eachItem.name + ' ' + eachItem.add + ' <span>x</span></li>');
            var newP = $('<p> name:'  +eachItem.name + ' </p> <p> Address:' + eachItem.add + ' </p> <p>reserved: ' + eachItem.reservedBy + '</p>');
            newLi.append(newP);
            newLi.addClass("pickup-li");
            //newLi.append(newP);

            // find id = list from DOM, append new 'newLi' as children.
            $('#list').append(newLi);
        })

        //itemObjects.forEach( (eachItem) => {
        //    
        //})
    });

    // For each item added by user, simply put a listener to a button and execute createItem();

});



function addsingleItem(itemObject){
    var newLi = $('<li> </li>');

    var newP = $('<p> name:'  +eachItem.name + ' </p> <p> Address:' + eachItem.add + ' </p> <p>reserved by: ' + eachItem.reservedBy + '</p>');
    newLi.append(newP);
    newLi.addClass("pickup-li");
    $('#list').append(newLi);
}

function createItem(username,useradd){
    var usrName = username;
    var usrAdd = useradd;
    
    $.post("/firebase" , {address : usrAdd,
                            name : usrName} )
    .then(addsingleItem)
    .catch( (err)  => {
        console.log(err);
    })

}

function updateItem(item){
    var clickedId = item.data('id'); //id of each item is stored within property 'id' itself
    var updateUrl = '/firebase/' + clickedId;
    var isDone = !item.data('reservedPickUp');
    var updateData = {reservedPickUp: isDone};

    $.ajax({
        method:'PUT',
        url: updateUrl,
        data: updateData
    })
    .then( (data) => {

        item.data('reservedPickUp',isDone);
    })
}