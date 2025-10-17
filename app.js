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

//////// import elements ::://///
const app = document.querySelector("main");
const mvtsContainer = document.querySelector(".left");
const balanceAccount = document.querySelector(".amount");
const inComes = document.querySelector(".average-in");
const outMoney = document.querySelector(".average-out");
const interest = document.querySelector(".average-interest");
/* -------Authentication emelents------- */
const userNameInput = document.querySelector(".user");
const pinInput = document.querySelector(".pin");
const btnLogin = document.querySelector(".btn-login");
const welcomeMessage = document.querySelector(".welcome");
/* -------Transfert Box Elements------- */

/* -------close  Box Elements------- */

/* -------Loan Box Elements------- */

/* -------Sort   Element------- */

//////// End of import elements ::://///

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

/* -------Authentication Functionnality------- */
let currentAccount;
btnLogin.addEventListener("click", function(){
    currentAccount = accounts.find((acc) => acc.userName === userNameInput.value);
    console.log("current:", currentAccount);

    //// ? optional chaining ....
    if(currentAccount?.pin === Number(pinInput.value)){
        welcomeMessage.textContent = `welcome back ${currentAccount.owner.split(" ")[0]}`;
    }
    app.style.opacity=1;
});


//////// userName functionnality :::
const displayUserName= function(arr){
    arr.forEach( person =>{
        person.userName = person.owner.toLowerCase()
                                        .split(" ")
                                        .map( ele => ele[0])
                                        .join("");
    });
}
displayUserName(accounts);
console.log(accounts)
/* -------End of Auth Functionnality------- */