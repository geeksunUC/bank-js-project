"use strict";

const account1 = {
    owner: "Mark Shmedtman",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
};


const account2 = {
    owner: "jessica davis",
    movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
}

const account3 = {
    owner: "Park Thomas Williams",
    movements: [200, -200, 340 - 300, -20, 50, 400, -460, 100, -400],
    interestRate: 0.7,
    pin: 3333
}

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
}

const accounts = [account1, account2, account3, account4];
//////// import elements : 

const mvtsContainer = document.querySelector(".left");
const balanceAccount = document.querySelector(".amount");

/*///// Dispaly Movements ////*/
const displayMvts = function (arr) {
    mvtsContainer.innerHTML = ""

    arr.forEach((mov, i) => {
        let type = mov > 0 ? "deposit" : "withdraw";

        let html = `
        <div class="${type}-container">
                    <div class="${type}-info">
                        <span class="${type}">${i + 1} ${type}</span>
                        <span>3 DAYS AGO</span>
                    </div>
                    <p class="${type}-amount">${mov} &euro;</p>
                </div>
                <hr>
        `
        mvtsContainer.insertAdjacentHTML("afterbegin", html);
    });
}
///// invocation , call , run :

displayMvts(account1.movements)


/*//// Display balanace /////*/

const displayBalance = function(arr){
    const balance = arr.reduce((acc, ele) => acc +ele, 0);
    // update UI
    balanceAccount.textContent = `${balance} €`;
}

///// invocation ::::
displayBalance(account1.movements);

/*//// Display Summury /////*/

const calcDisplaySummury = function(){
    
}

/*////// login part //////*/

const btnLogin = document.querySelector('.auth-header>span');
console.log(btnLogin);
btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('login clicked!');
    // let user= document.querySelector('')
    // accounts.forEach(element =>{
        
    // })
});