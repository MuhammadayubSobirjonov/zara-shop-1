document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#color');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            buttons.forEach(btn => {
                const span = btn.querySelector('.color-span');
                span.classList.remove('active');
                span.style.borderColor = '';
                span.style.backgroundColor = span.dataset.originalColor;
            });


            const span = button.querySelector('.color-span');
            span.classList.add('active');
            span.style.borderColor = span.dataset.originalColor;
            span.style.backgroundColor = 'transparent';
        });


        const span = button.querySelector('.color-span');
        span.dataset.originalColor = window.getComputedStyle(span).backgroundColor;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sizeOptions = document.querySelectorAll('.size-option');

    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active state from all options
            sizeOptions.forEach(opt => {
                opt.classList.remove('active');
                opt.style.backgroundColor = 'transparent';
                opt.style.color = '#3C4242'; // Reset text color to original
            });

            // Add active state to the clicked option
            option.classList.add('active');
            const borderColor = window.getComputedStyle(option).borderColor;
            option.style.backgroundColor = borderColor;
            option.style.color = 'white'; // Change text color to white
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('li').forEach(li => li.classList.remove('color_active'));
            
            const parentLi = button.parentElement;
            parentLi.classList.add('color_active');
            
            const bgColor = window.getComputedStyle(button).backgroundColor;
            
            parentLi.style.outlineColor = bgColor;
        });
    });
});