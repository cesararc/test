document.getElementById('addButton').addEventListener('click', () => {
    const product = document.getElementById('productSelect').value;
    const quantity = document.getElementById('quantity').value;
    const customerId = document.getElementById('customerSelect').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML += `<td>${product}</td><td>${quantity}</td><td>${customerId}</td>`;

    document.querySelector('#cart table').appendChild(newRow);    
  });