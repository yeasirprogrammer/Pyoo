// add money to the account
// S-01. add event Handler
//      prevent page is reload after submit   '
// S-02.. get money to be added to the account balance. 
// step-03.... 
// Step-01 add event handeler to the add money button inside from
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // prevent page is reload after submitget money to be added to the account balance. 
         event.preventDefault() 
    //  Step-02  get money to be added to the account balance. 
    const addMoneyInput = document.getElementById('input-add-money').value 
    console.log(addMoneyInput);
    const pinNumberInput= document.getElementById('input-pin-number').value 
    console.log(pinNumberInput);
// Step-03 veryfiy pin number! 
// Worng way to vaildate Pin Number!
if(pinNumberInput === '1234'){
    event.preventDefault() 
    console.log('addeing money to your account');
    // step -04 current balancse
     const balance = document.getElementById('accuont-balance').innerText;
     console.log(balance);
    //  step-05: addMoney Input with balance
 const addmoneyNumber = parseFloat(addMoneyInput);
 const balanceNumber = parseFloat(balance);
 const newBalance = addmoneyNumber+ balanceNumber;
 console.log(newBalance);
//  step-6 
document.getElementById('accuont-balance').innerText = newBalance;

}
else{
   alert('faild to add money!please try aggain');
}
});
