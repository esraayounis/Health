var cleave = new Cleave('.cc-number', {
    creditCard: true,
    delimiter: '-',
    onCreditCardTypeChanged: function (type) {
        debugger
        console.log(type)
        if(type === 'visa'){
            document.querySelector('.visa').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');
        } 
        else if (type === 'mastercard'){
            document.querySelector('.master').classList.add('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');
        }
        else if (type === 'amex'){
            document.querySelector('.express').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');  
        }

        else if (type === 'discover'){
            document.querySelector('.discover').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
        }
    }
});

var cleave = new Cleave('.cc-number-mob', {
    creditCard: true,
    delimiter: '-',
    onCreditCardTypeChanged: function (type) {
        debugger
        console.log(type)
        if(type === 'visa'){
            document.querySelector('.visa').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');
        } 
        else if (type === 'mastercard'){
            document.querySelector('.master').classList.add('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');
        }
        else if (type === 'amex'){
            document.querySelector('.express').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.discover').classList.remove('active');  
        }

        else if (type === 'discover'){
            document.querySelector('.discover').classList.add('active');
            document.querySelector('.master').classList.remove('active');
            document.querySelector('.visa').classList.remove('active');
            document.querySelector('.express').classList.remove('active');
        }
    }
});