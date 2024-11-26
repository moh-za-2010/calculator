const displayArea = document.querySelector('.display-area');
let currentInput = '';

document.querySelectorAll('.container button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        
        if (value === 'C') {
            currentInput = '';
            updateDisplay('');
        }
        
        else if (button.querySelector('img') || value === '←') {
            currentInput = currentInput.slice(0, -1); // حذف آخر حرف
            updateDisplay(currentInput);
        }
        
        else if (value === '=') {
            try {
                currentInput = currentInput.replace('×', '*').replace('÷', '/');
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch {
                currentInput = '';
                updateDisplay('Error');
            }
        }
        
        else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});

function updateDisplay(value) {
    displayArea.textContent = value || '0';
}
