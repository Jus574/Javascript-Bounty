var bal = 0
class user {
    constructor(bal=0) {
      this.bal = bal;
    }
  }
document.getElementById('calculate').addEventListener('click', function () {
    var input = document.getElementById('main-input').value;
    var options = document.getElementById('options').value;
    switch (options) { 
        case 'deposit':
           bal += input;
           document.getElementById('output').innerHTML = 'Money Deposited balance is '+bal;
           break;
        case 'withdraw':
            try {
                if (bal <= 0) {
                    document.getElementById('output').innerHTML = 'Account is Empty';
                }
                else {
                    bal -= input;
                    document.getElementById('output').innerHTML = 'Money Withdrawed balance is '+bal;
                }          
              } catch (error) {
                output.innerHTML = error;
              }
            break;
        case 'bal':
            document.getElementById('output').innerHTML = 'Balance is:'+bal;    
            break;     
        default:
            document.getElementById('output').innerHTML = 'Invalid option';
            break
      }
  })