// Define the function to scroll right
function scrollRight() {
  const wrapper = document.querySelector('.scrolling-wrapper');
  const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

  if (wrapper.scrollLeft >= maxScrollLeft) {
    // Reset to start smoothly
    wrapper.scrollLeft = 0;
  } else {
    // Scroll to the next image
    wrapper.scrollBy({ left: wrapper.clientWidth, behavior: 'smooth' });
  }
}

// Define the function to scroll left
function scrollLeft() {
  const wrapper = document.querySelector('.scrolling-wrapper');
  if (wrapper.scrollLeft <= 0) {
    // Move to the end seamlessly
    wrapper.scrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
  } else {
    // Scroll to the previous image
    wrapper.scrollBy({ left: -wrapper.clientWidth, behavior: 'smooth' });
  }
}

// Function to run the typing effect
function runTypingEffect() {
  const text = 'Welcome to Fanon';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

// Function to type text character by character
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// Auto-scroll functionality
function startAutoScroll() {
  setInterval(scrollRight, 30); // Adjust scroll interval for smoother continuous scrolling
}

// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
  runTypingEffect();
  const videos = document.querySelectorAll('.video-container video');
  
  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(otherVideo => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 0; // Reset playback to start
          otherVideo.classList.remove('playing');
        }
      });
      video.classList.add('playing');
    });

    video.addEventListener('pause', () => {
      video.classList.remove('playing');
    });

    video.addEventListener('ended', () => {
      video.classList.remove('playing');
    });
  });
});

function scrollVideosRight() {
  const videoContainer = document.querySelector('.video-container');
  videoContainer.scrollBy({ left: videoContainer.clientWidth, behavior: 'smooth' });
}

function scrollVideosLeft() {
  const videoContainer = document.querySelector('.video-container');
  videoContainer.scrollBy({ left: -videoContainer.clientWidth, behavior: 'smooth' });
}

function scrollCarouselRight() {
  const wrapper = document.querySelector('.scrolling-wrapper');
  wrapper.scrollBy({ left: wrapper.clientWidth, behavior: 'smooth' });
}

function scrollCarouselLeft() {
  const wrapper = document.querySelector('.scrolling-wrapper');
  wrapper.scrollBy({ left: -wrapper.clientWidth, behavior: 'smooth' });
}