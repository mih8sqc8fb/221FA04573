document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            text.textContent = 'Eren';
            container.style.backgroundColor = 'lightblue';
            button.textContent = 'Change';
            button.classList.remove('active');
        } else {
            text.textContent = 'Attack Titan';
            container.style.backgroundColor = 'lightcoral';
            button.textContent = 'Revert';
            button.classList.add('active');
        }
        isToggled = !isToggled;
    });
});
