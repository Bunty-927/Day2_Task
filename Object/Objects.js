//program to sort an array of JavaScript Object

//creating the object of library
var library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

//sorting the object
 library.sort(function(a,b){
    return a.libraryID - b.libraryID;
    }
);
//display the result after sorting
console.log(library);
