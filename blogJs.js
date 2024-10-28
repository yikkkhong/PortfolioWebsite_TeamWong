// Dynamically load blog content
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');
    
    // Blog Posts that inlude title, image to show, description and link of another website to connect
    const blogPosts = [
        {
            title: 'Project Update - Survivor of the Void',
            image: 'images2/blog/3dgamekit.jpg',
            description: 'This is an ongoing project...This is a story set against a cosmic backdrop, where the player’s spaceship crashes onto a certain planet due to a malfunction. What the player doesn’t know is that this planet is home to the fiercest aliens in the universe. The game features a vast world for exploration along with a storyline. The player’s tasks are to find scattered items and repair the damaged spaceship while also fending off attacks from enemies and making strategic counterattacks.                                                                                                                                                                   ',
            link: 'https://yikkkhong.github.io/Survivor-of-the-Void/'
        },
        {
            title: 'Project Update - John Lemon’s Haunted Jaunt',
            image: 'images2/blog/minigame.png',
            description: 'This is a casual game where players accidentally enter a haunted house and must escape. They need to avoid being discovered by ghosts, or they’ll restart the game. The characters have a cute design, contrasting with the dim colors and eerie music, creating an engaging experience that blends tension with whimsy. Players will enjoy the thrill of escape while navigating spooky challenges alongside charming characters. This game promises to be a captivating adventure for players of all ages',
            link: 'https://yikkkhong.github.io/John-Lemon-s-Haunted-Jaunt/'
        },
    ];

    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}">Read more</a>
        `;
        blogContainer.appendChild(blogCard);
    });

    // Gallery image popup view
    const galleryImages = document.querySelectorAll('.gallery-section img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-btn">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(popup);

            // Close the popup
            popup.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        });
    });

// Add some basic CSS for the popup
const style = document.createElement('style');
style.innerHTML = `
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .popup-content {
        position: relative;
        background: white;
        padding: 20px;
        border-radius: 25px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 24px;
        cursor: pointer;
    }
    .popup-content img {
        max-width: 100%;
        height: auto;
    }
`;
document.head.appendChild(style);

    // Client testimonials carousel
    const testimonials = [
        { content: '"This is a great project, and the team’s work is very professional!"', author: 'Sarah Johnson (from ABC Company)' },
        { content: '"I was very happy to work with the team, and the results exceeded my expectations!"', author: 'Michael Smith (from Google)' },
        { content: '"The team delivered on time and the quality was exceptional!"', author: 'Emily Davis (from DEF Company)' },
        { content: '"Communication was clear throughout the project. Highly recommend!"', author: 'James Brown (from GHI Studio)' },
        { content: '"Innovative solutions that truly addressed our needs. Great experience!"', author: 'Jessica Taylor (from JKL Studio)' },
        { content: '"The level of professionalism was outstanding. We are very satisfied!"', author: 'David Wilson (from Apple)' },
        { content: '"A fantastic partnership that resulted in remarkable outcomes!"', author: 'Laura Martinez (from Supercell)' }
        
    ];
    let testimonialIndex = 0;
    const testimonialContainer = document.getElementById('testimonial-container');

    function showTestimonial(index) {
        testimonialContainer.innerHTML = `
            <div class="testimonial">
                <p>${testimonials[index].content}</p>
                <p>- ${testimonials[index].author}</p>
            </div>
        `;
    }
    showTestimonial(testimonialIndex);
    
    setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    }, 5000); // Change every 5 seconds
});
