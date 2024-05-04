let userAsk = +prompt("Enter any number");
let numberSystem = +prompt("Enter number system in number");

if(numberSystem === 2){
    Swal.fire(userAsk.toString(2));
}else if(numberSystem === 8){
    Swal.fire(userAsk.toString(8));
}else if(numberSystem === 16){
    Swal.fire(userAsk.toString(16));
}else{
    Swal.fire("invalid number system");
};
