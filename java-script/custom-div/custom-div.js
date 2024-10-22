function custom-div() {
    const color = document.getElementById('id1').value;
            var height = document.getElementById('id2').value;
            var width = document.getElementById('id3').value;
            var backgroundColor = document.getElementById('id4').value;
            var text = document.getElementById('id5').value;

            // Create a new div element
            var newDiv = document.createElement('div');
            newDiv.className = 'custom-div';
            newDiv.textContent = text;

            // Set the styles based on user input
            newDiv.style.color = color;
            newDiv.style.height = height + 'px';
            newDiv.style.width = width + 'px';
            newDiv.style.backgroundColor = backgroundColor;
            newDiv.style.border = '1px solid black';

            // Add the new div to the container
            var container = document.getElementById('container');
            container.appendChild(newDiv);
        }
}