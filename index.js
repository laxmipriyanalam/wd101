document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
            const table = document.querySelector('table');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // Fetch form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const dob = document.getElementById('dob').value;
                const terms = document.getElementById('terms').checked;

                // Calculate age
                const today = new Date();
                const birthDate = new Date(dob);
                let age = today.getFullYear() - birthDate.getFullYear();

                // Adjust age if birthday hasn't occurred yet this year
                if (today.getMonth() < birthDate.getMonth() ||
                    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                // Check if age is within the specified range
                if (age >= 18 && age <= 55) {
                    // Add a new row to the table
                    const newRow = table.insertRow(-1);
                    const cells = [name, email, password, dob, terms ? 'Accepted' : 'Not Accepted'];

                    for (const cellValue of cells) {
                        const cell = newRow.insertCell();
                        cell.textContent = cellValue;
                    }

                    // Clear the form
                    form.reset();
                } else {
                    alert('Age must be between 18 and 55 years.');
                }
            });
        });
