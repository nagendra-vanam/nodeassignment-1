const crud = require("./index");

//// file craetion
// const create = crud.myFileWriter("hiinrgni", "helloworld");

/////file updation
// const extra = "chill out";
// crud.myFileUpdater("hiinrgni", "nagendra");

///reading

const read = crud.myFileReader("hii");
read.then((x) => console.log(x));
// ///////////deletion
//const del = crud.myFileDeleter("hii");
