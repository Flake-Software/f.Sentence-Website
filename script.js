// Simple ripple-like effect on buttons
document.querySelectorAll('.m3-button').forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // This requires a minor CSS class which I've included conceptually. 
        // For now, let's keep it simple.
        
        if (button.classList.contains('m3-button-filled')) {
            console.log("Downloading f.Sentence...");
        } else {
            console.log("Redirecting to GitHub...");
        }
    });
});
