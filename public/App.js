
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
            var newP = $('<p> name:'  + eachItem.name + ' </p> <p> Address:' + eachItem.add + ' </p> <p>reserved: ' + eachItem.reservedBy + '</p>');
            // This has only the address, we will add a class that makes it display:0
            // But we still want the info
            var newP2 = $('<p>'  + eachItem.add + ' </p>');
            newP2.addClass("pickup-address-hidden");
            newLi.append(newP);
            newLi.append(newP2);
            newLi.addClass("pickup-li");
            newLi.data('id',k);
            if(!eachItem.reservedPickUp){
                //load reserve keyword
                var btn = $('<button class="btn-reserve">Reserve</button>');
                newLi.append(btn);
            }
            //newLi.append(newP);

            // find id = list from DOM, append new 'newLi' as children.
            $('#list').append(newLi);
        })

        //$('.btn-reserve').click(() => {
        //    updateItem($(this));
        //})
        $('#list').on('click','.btn-reserve', function(){
            updateItem($(this).parent());
        })

        $('#btn-submit').click(function() {
            createItem();
        })
        
        //itemObjects.forEach( (eachItem) => {
        //    
        //})
    });

    // For each item added by user, simply put a listener to a button and execute createItem();

    $()
});



function addsingleItem(itemObject){
    var newLi = $('<li> </li>');

    var newP = $('<p> name:'  +eachItem.name + ' </p> <p> Address:' + eachItem.add + ' </p> <p>reserved by: ' + eachItem.reservedBy + '</p>');
    console.log(itemObject);
    newLi.append(newP);
    newLi.addClass("pickup-li");
    if(!eachItem.reservedPickUp){
        //load reserve keyword
        var btn = $('<button class="btn-reserve">Reserve</button>');
        newLi.append(btn);
        
    }
    $('#list').append(newLi);
}

function createItem(){
    var usrName = document.getElementById('Name').value;
    var usrAdd = document.getElementById('Addreess').value;;
    
    $.post("/firebase" , {address : usrAdd,name : usrName})
    .catch( (err)  => {
        console.log(err);
    })

   /*firebase.database().ref('item_ino').push().set({
            add:'2222',
            name: 'kevin',
            reservedPickUp:false,
            reservedBy: 'Hackathon Demo'
        })*/
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