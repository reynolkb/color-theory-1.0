//api needed to contrast text on preview page
import chroma from 'chroma-js';


// IndexedDB to make our data persistent
export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        // open connection to the database `color-theory` with the version of 1
        const request = window.indexedDB.open('color-theory', 1);

        // create variables to hold reference to the database, transaction (tx), and object store
        let db, tx, store;

        // create the object stores 
        request.onupgradeneeded = function (e) {
            const db = request.result;
            // create object store for each type of data and set "primary" key index to be the `_id` of the data
            db.createObjectStore('palettes', { keyPath: '_id' });
            db.createObjectStore('tags', { keyPath: '_id' });
        };

        // handle any errors with connecting
        request.onerror = function (e) {
            console.log('There was an error');
        };

        // save a reference of the database to the db variable
        request.onsuccess = function (e) {
            // save a reference of the database to the `db` variable
            db = request.result;
            // pass in the object store that we want to interact with and the permissions we want in this transaction
            tx = db.transaction(storeName, 'readwrite');
            // save a reference to that object store so that we can perform a CRUD method
            store = tx.objectStore(storeName);

            // if there's any errors, let us know
            db.onerror = function (e) {
                console.log('error', e);
            };

            // check which value we passed into the function as a method and perform that method on the object store
            switch (method) {
                // if put
                case 'put':
                    // run put() method on the object store, overwriting any data with the matching _id value
                    // and adding it if it can't find a match
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    // get all data from that store and return it
                    const all = store.getAll();
                    all.onsuccess = function () {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    // delete that item from the object store
                    // such as remove an item from the shopping cart while offline
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            // oncomplete event listener
            // when the transaction is complete, close the connection
            tx.oncomplete = function () {
                db.close();
            };
        };

    });
}

export const getContrastingColor = (bg) => {
    console.log(bg)
    const lightContrast = chroma.contrast(bg, '#ffffff');
    const darkContrast = chroma.contrast(bg, '#000000');

    return lightContrast > darkContrast ? '#ffffff' : '#000000';
};