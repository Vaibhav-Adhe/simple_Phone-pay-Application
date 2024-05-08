// function makePayment() {
//     const amount = document.getElementById('amount').value;
//     const recipient = document.getElementById('recipient').value;
  
//     // Here you would typically send the payment information to a server for processing
//     // and handle the response to update the payment status on the page
//     const paymentStatus = document.getElementById('payment-status');
//     paymentStatus.innerHTML = `Payment of $${amount} to ${recipient} successful.`;
//   }
let transactions = [];

function addTransaction() {
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;

  if (description.trim() === '' || amount.trim() === '') {
    alert('Please enter description and amount.');
    return;
  }

  const transaction = { description, amount: parseFloat(amount) };
  transactions.push(transaction);
  displayTransactions();
  clearForm();
}

function displayTransactions() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  transactions.forEach((transaction, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${transaction.description}: $${transaction.amount}`;
    list.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}

window.onload = displayTransactions;


