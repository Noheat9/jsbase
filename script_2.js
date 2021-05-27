let nb = prompt("What number do you want to calculate the factorial of?", 1);
nb = Number(nb);

function factorial(nb) {
    if (nb == 1 || nb == 0)
        return 1;
    else
        return (factorial(nb - 1) * nb);
}

let res = "The outcome is:" + factorial(nb);
console.log(res);