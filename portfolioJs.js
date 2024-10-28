let currentIndex = 0;
let currentImageIndex = 0;

// to store what want to display in the gallery
const galleryItems = [
    {
        //title to display at the top
        title: "RPG Game",
        //description to display details of the project
        description: "My team and I developed an RPG game where players take on the challenge of surviving on a deserted island. Players can explore the island, gathering essential resources by chopping down trees and mining for valuable materials. These resources can then be used to craft a variety of tools, weapons, and other items necessary for survival. As day turns into night, the environment becomes more dangerous, with monsters emerging from the darkness, forcing players to be prepared and strategize to defend themselves against these threats.",
        //images to display (include youtube video)
        images: [
            "https://www.youtube.com/embed/f0RpVUu9QbM",
            "images2/rpggame/mainmenu.png",
            "images2/rpggame/scene1.png",
            "images2/rpggame/scene2.png",
            "images2/rpggame/scene3.png",
            "images2/rpggame/scene4.png",
            "images2/rpggame/sceneNight.png",
            "images2/rpggame/unity.png",
            "images2/rpggame/unity_code.png",
        ]
    },
    {
        title: "Run Out of The MAZE!!!",
        description: "My team and I created a casual maze escape game that offers a blend of strategy and exploration. Players navigate through a complex maze, with the goal of finding the exit. Along the way, they can collect various items scattered across the map, which can be used together to overcome obstacles, unlock new paths, and make the escape easier. Each maze presents new challenges and opportunities for players to strategize and discover the best ways to reach freedom.",
        images: [
            "https://www.youtube.com/embed/AJrrjLuE85E",
            "images2/run_out_maze/mainmenu.png",
            "images2/run_out_maze/scene1.png",
            "images2/run_out_maze/scene2.png",
            "images2/run_out_maze/scene3.png",
            "images2/run_out_maze/scene4.png"
        ]
    },
    {
        title: "Push into Train Casual Game",
        description: "My team and I developed a game called Push into Train, where the main objective is for players to push passengers into a train before it departs. This is a lighthearted, casual game that starts off easy but gradually becomes more challenging as the levels progress. With each new level, the passengers become more resistant and harder to push, requiring players to adjust their tactics. For instance, in later levels, players might encounter sumo wrestlers who are extremely difficult to move, making the task much more demanding. The game is designed to test players' timing, strategy, and quick thinking.",
        images: [
            "https://www.youtube.com/embed/5_kfbacG3-w",
            "images2/push_train/mainmenu.png",
            "images2/push_train/scene1.png",
            "images2/push_train/scene2.png",
            "images2/push_train/scene3.png"
        ]
    },
    {
        title: "Boss Fight Game",
        description: "In this boss battle game, players will experience a variety of combat scenarios and strategies. Each boss has unique stats, and for example, when at low health, their attack patterns will change, adding challenge and excitement to the game. Players not only need to observe the boss's behavior patterns but also must flexibly employ different tactics to adapt to the boss's attacks. The game features multiple attack methods, such as melee attacks, ranged attacks, and special skills, with damage values increasing based on the boss's state. Additionally, players can move freely using the W A S and D keys to dodge the boss's attacks while looking for opportunities to counterattack. The overall game design maintains a casual and entertaining style, making it suitable for all players, allowing them to enjoy a relaxed gameplay experience while also experiencing the thrill of intense battles.",
        images: [
            "https://www.youtube.com/embed/rOC-MUWBURI",
            "images2/bossgame/scene1.png",
            "images2/bossgame/scene2.png",
            "images2/bossgame/scene3.png",
            "images2/bossgame/scene4.png",
            "images2/bossgame/scene5.png",
            "images2/bossgame/scene6.png"
        ]
    }
];

//function to open the gallery
function openModal(index) {
    currentIndex = index;
    currentImageIndex = 0; // Reset image index when opening modal
    showItem(currentIndex);
    document.getElementById('myModal').style.display = 'flex';
    addSwipeListeners();
}

//function to show item
function showItem(index) {
    const item = galleryItems[index];
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDescription').innerText = item.description;

    updateImage(index); // Update image based on current index
}

//function to update image
function updateImage(index) {
    const item = galleryItems[index];
    const currentImage = item.images[currentImageIndex];

    // Check if currentImage is a YouTube video URL
    if (currentImage.includes("youtube.com")) {
        document.getElementById('modalVideo').style.display = 'block';
        document.getElementById('modalVideo').src = currentImage;
        document.getElementById('modalImage').style.display = 'none';
    } else {
        document.getElementById('modalVideo').style.display = 'none';
        document.getElementById('modalImage').style.display = 'block';
        document.getElementById('modalImage').src = currentImage;
    }
}

//function to display next item
function nextItem() {
    const item = galleryItems[currentIndex];
    currentImageIndex = (currentImageIndex + 1) % item.images.length;
    updateImage(currentIndex);
}

//function to display previous item
function prevItem() {
    const item = galleryItems[currentIndex];
    currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
    updateImage(currentIndex);
}

//function to close gallery (click X button)
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('modalVideo').src = ''; // Stop video playback
    removeSwipeListeners();
}

// Swipe handling
let startX;

function touchStart(e) {
    startX = e.touches[0].clientX;
}

function touchMove(e) {
    if (!startX) return;
    const endX = e.touches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 30) { // Minimum swipe distance
        if (diffX > 0) {
            nextItem(); // Swipe left
        } else {
            prevItem(); // Swipe right
        }
        startX = null; // Reset startX to avoid multiple triggers
    }
}

function addSwipeListeners() {
    const modalContent = document.getElementById('modalContent'); // modal content's ID
    modalContent.addEventListener('touchstart', touchStart);
    modalContent.addEventListener('touchmove', touchMove);
}

function removeSwipeListeners() {
    const modalContent = document.getElementById('modalContent');
    modalContent.removeEventListener('touchstart', touchStart);
    modalContent.removeEventListener('touchmove', touchMove);
}
