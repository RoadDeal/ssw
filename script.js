const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        // Get the target number from the HTML attribute
        const target = +counter.getAttribute('data-target');
        // Get current number
        const c = +counter.innerText;

        // Determine increment speed (higher number = faster)
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});