function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 


    // Function to reveal elements on scroll
    function revealOnScroll() {
        const items = document.querySelectorAll('.arrival-item');

        // Loop through all arrival items
        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the item is in the viewport, add the 'show' class
            if (itemPosition < windowHeight - 100) {
                item.classList.add('show');
            }
        });
    }

    // Listen to the scroll event to trigger reveal animation
    window.addEventListener('scroll', revealOnScroll);

    // Run on page load in case some items are already visible
    document.addEventListener('DOMContentLoaded', revealOnScroll);





    
    let countdownTime = 3 * 60 * 60; // 3 hours in seconds
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;
    
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
        countdownTime--;
    
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Offer Expired!";
        }
    }, 1000);
    