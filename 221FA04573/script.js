document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            // Revert to initial state
            text.textContent = 'Eren';
            container.style.backgroundColor = 'lightblue';
            button.textContent = 'Change';
            button.classList.remove('active');
        } else {
            // Change to toggled state
            text.textContent = 'Attack Titan';
            container.style.backgroundColor = 'lightcoral';
            button.textContent = 'Revert';
            button.classList.add('active');
        }
        isToggled = !isToggled;
    });
});
