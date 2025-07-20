const robinForm = document.getElementById('robinForm');
    const tableBody = document.querySelector('#robinTable tbody');

    robinForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const height = document.getElementById('height').value;

      // Calculate the new row number
      const newRowNumber = tableBody.rows.length + 1;

      // Create a new row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <th scope="row">${newRowNumber}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${height}</td>
      `;

      // Append the new row
      tableBody.appendChild(newRow);

      // Reset form
      robinForm.reset();
    });

