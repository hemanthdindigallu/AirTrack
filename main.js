// main.js

// Simulate navigation from index.html to flight-details.html
document.addEventListener('DOMContentLoaded', () => {
    const trackButton = document.getElementById('trackButton');
    if (trackButton) {
      trackButton.addEventListener('click', () => {
        // Simulate "loading" next screen
        window.location.href = 'results.html';
      });
    }
  
    const detailsButton = document.getElementById('detailsButton');
    if (detailsButton) {
      detailsButton.addEventListener('click', () => {
        // Simulate flight details result
        window.location.href = 'upcoming.html';
      });
    }
  });
  