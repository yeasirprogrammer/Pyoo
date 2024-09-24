// console.log("button clickd cheek");
// document.getElementById('button').addEventListener('click', function)
// document.getElementById('button')
//     .addEventListener('click', function(){
//      console.log('login Button clicked');
//     })
    
// step -01 
document.getElementById('button')
    .addEventListener('click', function(event){
    // step-02 
        event.preventDefault();
     console.log('login Button clicked');
    // step-03
    const phoneNumber = document.getElementById('phoneNumber').value;
    console.log(phoneNumber);
    })