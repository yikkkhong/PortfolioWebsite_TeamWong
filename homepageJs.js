// scroll gallery function
function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = gallery.offsetWidth * 0.7; // Scroll one screen width 70%
    
    // check the direction
    if (direction === 'left') {
        gallery.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        gallery.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// open gmail website function
document.getElementById('openGmailButton').onclick = function() {
    const email = 'i22023212@student.newinti.edu.my'; // the email to pre-fill
    const subject = 'Client Request : Your Subject'; // Subjest pre-fill (Optional)
    const body = '----Please include your name and phone number for further discussions----'; // Body pre-fill (Optional)
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
};

