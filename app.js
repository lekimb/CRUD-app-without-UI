const getItems = function(){

    let items = localStorage.getItem('storage');

    items = JSON.parse(items);

    return items === null ? [] : items; // If items equals null, return empty array
};

const addItem = function(item){
    // Create id identifier with getLastId() helper function
    item.id = getLastId() + 1;
    
    let items = getItems();

    items.push(item);

    // Stringify data and set it to local storage
    items = JSON.stringify(items);
    localStorage.setItem('storage', items);

    return getItems();
};

const getItemById = function(id){
    
    let items = getItems();

    let found;

    items.forEach(function(item){
        if (item.id == id) {
            found = item;
        }
    });
    // Throw error if there is no item with that id
    if (!found) throw 'There is no item with that id';
    
    return found;
};

const updateItemById = function(newItem, id){
    // Assign the same id to new item
    newItem.id = id;

    let items = getItems();

    let found;

    items.forEach(function(item, index){
        if (item.id === id) {
            found = items.splice(index, 1, newItem);
        }
    });
    // Throw error if there is no item with that id
    if (!found) throw 'There is no item with that id';

    items = JSON.stringify(items);

    localStorage.setItem('storage', items);

    return getItems();

};

const removeItemById = function(id){  
    
    let items = getItems();
    
    let found;

    items.forEach(function(item, index){
        if (item.id === id) {
            found = items.splice(index, 1);
        }
    });
    // Throw error if there is no item with that id
    if (!found) throw 'There is no item with that id';

    // Stringify data and set it to local storage
    items = JSON.stringify(items);
    localStorage.setItem('storage', items);

    return getItems();
};

const clearStorage = function(){
    localStorage.setItem('storage', '[]');
};

const getLength = function(){

    let items = getItems();

    return items.length;
};

const getLastId = function(){

    let items = getItems();

    //If items array is empty, return -1 so that the next id will be 0
    if (items.length === 0) return -1;

    let ids = [];

    items.forEach(function(item){
        ids.push(item.id);
    });

    // Search for the higher id in the array
    let i = 0;
    let j = 1;
    while (j < ids.length){
        if (ids[i] > ids[j]){
            j += 1;
        } else {
            i = j;
            j += 1;
        }
    }
    
    return ids[i];
};

// Item constructor
function Item(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
