#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 1235;
const pin = await inquirer.prompt([
    {
        name: "storingPin",
        type: "number",
        message: "Please enter your 4 digits pin here.",
    },
]);
// console.log(pin.storingPin) for checking code executes perfectly or not.
if (pin.storingPin === myPin) {
    const accountTitle = await inquirer.prompt([
        {
            name: "account",
            type: "list",
            message: "please select your account here.",
            choices: ["Current account", "Saving account"],
        },
        {
            name: "transmethod",
            type: "list",
            message: "please select your transaction method here.",
            choices: ["Withdraw", "Fast cash", "Balance Inquiry", "Others"],
        },
    ]);
    //console.log(accountTitle)before further proceeding checking code working perfectly or have some bugs in it.
    if (accountTitle.transmethod === "Withdraw") {
        const answerWithdr = await inquirer.prompt([
            {
                name: "transaction",
                type: "number",
                message: "please enter your desired amount here."
            }
        ]);
        // console.log(answerWithdr.transaction) same proceedure applied
        if (myBalance >= answerWithdr.transaction) {
            myBalance -= answerWithdr.transaction;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (myBalance < answerWithdr.transaction) {
            console.log("You exceed your current balance.");
        }
    }
    // copy
    if (accountTitle.transmethod === "Fast cash") {
        const answerFst = await inquirer.prompt([
            {
                name: "chszAmount",
                type: "list",
                message: "please choose your desired amount here.",
                choices: ["10000", "20000", "5000", "3000", "2000", "1000", "500"]
            }
        ]);
        // console.log(answerFst.chszAmount) by doing this we can identify bugs before further proceedure.
        if (myBalance >= answerFst.chszAmount) {
            myBalance -= answerFst.chszAmount;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (myBalance < answerFst.chszAmount) {
            console.log("You exceed your current balance.");
        }
    }
    if (accountTitle.transmethod === "Balance Inquiry") {
        console.log(myBalance);
    }
}
else {
    console.log("Please enter your valid 4 digits pin.");
}
