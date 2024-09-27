// console.log("button clickd cheek");
// document.getElementById('button').addEventListener('click', function)
// document.getElementById('button')
//     .addEventListener('click', function(){
//      console.log('login Button clicked');
//     })
    
// step -01 
// document.getElementById('button')
//     .addEventListener('click', function(event){
//     // step-02 
//         event.preventDefault();
//      console.log('login Button clicked');
//     // step-03
//     const phoneNumber = document.getElementById('phoneNumber').value;
//     const pinNumber = document.getElementById('pin-number').value
    
//     console.log(phoneNumber , pinNumber);
// // Step-4: validate phone and Pin
// //    This is temporry syestem
// if(phoneNumber=== '5' && pinNumber ==='1234'){
//     console.log('you are logged in');
//     // step-5 : allow user to use the webstite 
// }
// else{
//     alert('worng phone number of Pin');
// }

   document.getElementById('button-login').addEventListener('click', function(event)
{
    event.preventDefault();

    // get phojne number and pin
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value ; 
    // console.log(phoneNumber , pinNumber);

//  bad way to validate
if(phoneNumber=='5 ' && pinNumber === '1234'){
    console.log('You are logeed in');

}
else{
    alert('worng phone number or pin')
}

});





        