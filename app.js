const inputBill = document.querySelector('#input-bill');
const inputUsers = document.querySelector('#input-users');
const serviceValue = document.querySelector('#input-service');

let isFeedback = false;

let feedback = document.querySelector('.feedback');



let btn = document.querySelector('.calBtn')

btn.addEventListener('click', () => {
    if (inputBill.value === '' || inputBill.value <= 0) {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>Bill amount cannot be blank</p>`
        isFeedback = true;
        setTimeout(function () {
            feedback.innerHTML = '';
            feedback.classList.remove('showItem', 'alert-danger');


        }, 2000
        )
    }
    if (inputUsers.value <= 0) {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
        isFeedback = true;
    }
    if (serviceValue.value === '0') {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>You must select a Service</p>`
        isFeedback = true;
        setTimeout(function () {
            feedback.innerHTML = '';
            feedback.classList.remove('showItem', 'alert-danger');


        }, 2000
        )
    }
    else {
        document.querySelector('.results').classList.add('showItem',);

        let percentTip = '';
        if (serviceValue.value === "1") {
            percentTip = 0.2;
        } else if (serviceValue.value === "2") {
            percentTip = 0.1;
        } else {
            percentTip = 0.02;
        }

        const tipAmount = Number(inputBill.value) * Number(percentTip);
        const totalAmount = Number(inputBill.value) + Number(tipAmount);
        const eachPerson = Number(totalAmount) / Number(inputUsers.value);

        document.getElementById('tip-amount').innerHTML = tipAmount;
        document.getElementById('total-amount').innerHTML = totalAmount;
        document.getElementById('person-amount').innerHTML = eachPerson;
        setTimeout(function () {
            document.querySelector('.results').classList.remove('showItem', 'alert-danger');


        }, 10000
        )

    }

})
