let percntTip = document.querySelectorAll('.percent');
let customPercentInput = document.getElementById("customPercnt");
let btn = document.getElementById('button');
let amtTipPerPerson = document.getElementById('amount');
let totalAmtTipPerPerson = document.getElementById('totalAmount');
let amtError = document.getElementById("error1");
let peopleError = document.getElementById("error2");
let amtErrorField=document.getElementById("bill-amount1");
let peopleErrorField=document.getElementById("peopleNumber");
let btnTip = false;
let numberInputTip = false;
let selectedTip;
let selectedPercentTip;
let totalTipPerPerson;
let tipAmtPerPerson;
let customPercentTip;

percntTip.forEach(function (element) {
    element.addEventListener('click', function () {
        btnTip = true;
        numberInputTip = false;
        selectedPercentTip = element.textContent.replace('%', '');
        if (selectedTip) {
            selectedTip.classList.remove('selectedTipBtn');
        }
        element.classList.add('selectedTipBtn');
        selectedTip = element;
        customPercentInput.value = "";
    });
});

customPercentInput.addEventListener('input', function () {
    numberInputTip = true;
    btnTip = false;
    customPercentTip = parseFloat(document.getElementById("customPercnt").value);
    if (selectedTip) {
        selectedTip.classList.remove('selectedTipBtn');
        selectedTip = null;
    }
});


function calculateBill() {
    if (btn.innerHTML === "CALCULATE") {
        billAmt = parseFloat(document.getElementById("bill-amount1").value);
        let numberOfPeople = parseFloat(document.getElementById("peopleNumber").value);
        let totalAmt;

        if (btnTip === true) {
            let amtPercentBtnTip = (billAmt * selectedPercentTip) / 100;
            totalAmt = billAmt + amtPercentBtnTip;
            tipAmtPerPerson = parseFloat(amtPercentBtnTip / numberOfPeople).toFixed(2);
            amtTipPerPerson.innerHTML = "$" + tipAmtPerPerson;

        } else if (numberInputTip === true) {
            btnTip = false;
            let amtPercentNumberInputTip = parseFloat(billAmt * customPercentTip) / 100;
            totalAmt = billAmt + amtPercentNumberInputTip;
            tipAmtPerPerson = parseFloat(amtPercentNumberInputTip / numberOfPeople).toFixed(2);
            amtTipPerPerson.innerHTML = "$" + tipAmtPerPerson;
        }

        totalTipPerPerson = parseFloat(totalAmt / numberOfPeople).toFixed(2);
        totalAmtTipPerPerson.innerHTML = "$" + totalTipPerPerson;
        btn.innerHTML = "RESET"
        checkData();



    } else if (btn.innerHTML === "RESET") {
        document.getElementById("bill-amount1").value = "";
        if (selectedTip) {
            selectedTip.classList.remove('selectedTipBtn');
        }
        customPercentInput.value = "";
        document.getElementById("peopleNumber").value = "";
        amtTipPerPerson.innerHTML = "$0.00";
        totalAmtTipPerPerson.innerHTML = "$0.00";
        btn.innerHTML = "CALCULATE";
        amtError.classList.add("hidden");
        peopleError.classList.add("hidden");
        amtErrorField.style.borderColor='hsl(0, 0%, 100%)';
        peopleErrorField.style.borderColor='hsl(0, 0%, 100%)';

    }
}


function checkData() {

    if(document.getElementById("bill-amount1").value ==="" && document.getElementById("peopleNumber").value ===""){
        amtError.classList.remove("hidden");
        peopleError.classList.remove("hidden");
        amtErrorField.style.borderColor='hsl(10, 50%, 63.9%)';
        peopleErrorField.style.borderColor='hsl(10, 50%, 63.9%)';
        amtTipPerPerson.innerHTML = "$0.00";
        totalAmtTipPerPerson.innerHTML = "$0.00";
        btn.innerHTML = "CALCULATE";

    }
    else if(document.getElementById("bill-amount1").value !=="" && document.getElementById("peopleNumber").value ===""){
        amtError.classList.add("hidden");
        peopleError.classList.remove("hidden");
        peopleErrorField.style.borderColor='hsl(10, 50%, 63.9%)';
        amtTipPerPerson.innerHTML = "$0.00";
        totalAmtTipPerPerson.innerHTML = "$0.00";
        btn.innerHTML = "CALCULATE";
    }
    else if(document.getElementById("bill-amount1").value ==="" && document.getElementById("peopleNumber").value !==""){
        amtError.classList.remove("hidden");
        peopleError.classList.add("hidden");
        amtErrorField.style.borderColor='hsl(10, 50%, 63.9%)';
        amtTipPerPerson.innerHTML = "$0.00";
        totalAmtTipPerPerson.innerHTML = "$0.00";
        btn.innerHTML = "CALCULATE";
    }
    else{
        amtError.classList.add("hidden");
        peopleError.classList.add("hidden");
        amtErrorField.style.borderColor='hsl(0, 0%, 100%)';
        peopleErrorField.style.borderColor='hsl(0, 0%, 100%)';
        btn.innerHTML = "RESET";

    }

}
