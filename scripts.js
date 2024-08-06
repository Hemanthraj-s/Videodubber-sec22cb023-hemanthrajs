scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const upvoteButton = document.getElementById('upvoteButton');
  
  upvoteButton.addEventListener('click', function() {
    if (!upvoteButton.classList.contains('upvoted')) {
      upvoteButton.classList.add('upvoted');
      upvoteButton.textContent = 'Upvoted';
    }
  });
});
