# CRUD-app-without-UI

## Usage
This is a basic CRUD application. It allows you to create, read, update and delete items easily. The data gets stored in the browser's local storage, so you can reload the page or exit the browser and the data will persist. 
Here is a list of the functions that are implemented:

- `getItems()`
- `getItemById(id: number)`
- `addItem(item: {})`
- `updateItemById(newItem: {}, oldItemId: number)`
- `removeItemById(id: number)`
- `clearStorage()`
- `getLength()`
- `getLastId()`

|`getItems()`|
|`getItemById(id: number)`|
|`addItem(item: {})`|

A simple item constructor is also available:

- `Item(firstName: string, lastName: string)`

**NOTE:** As said above, data is stored using the browser's local storage. Specifically, it gets stored as 'storage', since local storage is structured as a list of key-value pairs. So, be aware that if you have something stored whithin that same key, it will interfere with this application.

## Implementing the UI
Since this is a fully operative CRUD app, it should be easy to build a UI and connect it to this structural application. 
To do this, it will be enough with a simple `paintItems()` function, that update the UI whenever a change in the data structure is done. 

```javascript
const paintItems = function() {
    let item = getItems();
    let html = '';

    items.forEach(function(item){
        html += `<ul><li>ID: ${item.id}</li><li>Name: ${item.name} ${item.surname}</li><li>Phone: ${item.phone}</li><li>Email: ${item.email}</li></ul>`;
    });
    document.getElementById('container').innerHTML = html;
}
```

Then, this function could be invoked at some point inside the currently existent functions or new specific functions could be created, such as `addItemUI()`, `updateItemByIdUI()` and so on.

```javascript
const addItemUI = function(item) {
    addItem(item);
    paintItems();
}
```
