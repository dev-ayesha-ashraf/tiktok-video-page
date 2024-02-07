let isLiked = false;

function toggleLike() {
    isLiked = !isLiked;
    updateLikeButton();
}

function updateLikeButton() {
    const likeButton = document.querySelector('.like');
    if (isLiked) {
        likeButton.classList.add('liked');
    } else {
        likeButton.classList.remove('liked');
    }
}
// comment
function toggleCommentSection() {
    var commentSection = document.getElementById("commentSection");
    if (commentSection.style.display === "block") {
        commentSection.style.display = "none";
    } else {
        commentSection.style.display = "block";
    }
}

function toggleCommentSection() {
    var commentSection = document.getElementById("commentSection");
    if (commentSection.style.display === "block") {
        commentSection.style.display = "none";
    } else {
        commentSection.style.display = "block";
    }
}

function toggleCommentSection() {
    var commentSection = document.getElementById("commentSection");
    if (commentSection.style.display === "block") {
        commentSection.style.display = "none";
    } else {
        commentSection.style.display = "block";
    }
}

function addComment() {
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var commentsContainer = document.getElementById("commentsContainer");
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment-item");
        commentElement.innerHTML = `
            <div>${commentText}</div>
            <button class="delete-button" onclick="deleteComment(this)">Delete</button>
        `;
        commentsContainer.appendChild(commentElement);
        commentInput.value = "";
    }
}

function deleteComment(button) {
    var commentItem = button.closest('.comment-item');
    commentItem.remove();
}
// Save
function saveData() {
    // Simulate saving data by displaying an alert
    alert("Data saved successfully!");
}

// Add event listener to the save button
document.getElementById("saveButton").addEventListener("click", saveData);
// Share
// Function to share data
function shareData() {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
        // Use Web Share API to share data
        navigator.share({
            title: 'Example title',
            text: 'Example text',
            url: 'https://example.com'
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support Web Share API
        alert('Web Share API is not supported in this browser.');
    }
}

// Add event listener to the share button
document.getElementById("shareButton").addEventListener("click", shareData);

// JS
// JavaScript code
const videoUrls = [
    "https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4",
    "https://www.pepsi.com/en-us/refresh082123/media/Titan_TR_Digital_30_PETD3091000H_CreativeX_sm.mp4",
    // Add more video URLs if needed
];

const videoSlider = document.querySelector('.video-slider');
const videos = document.querySelectorAll('.video-slide video');
let currentVideoIndex = 0;

function playVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            if (video.paused) { // Check if video is paused before playing
                video.play();
            }
        } else {
            video.pause();
        }
    });
}

playVideo(currentVideoIndex);

document.querySelector('.nav-button.prev').addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    videoSlider.scrollTo({
        top: videos[currentVideoIndex].offsetTop, // Adjust for vertical scrolling
        behavior: 'smooth'
    });
    playVideo(currentVideoIndex);
});

document.querySelector('.nav-button.next').addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    videoSlider.scrollTo({
        top: videos[currentVideoIndex].offsetTop, // Adjust for vertical scrolling
        behavior: 'smooth'
    });
    playVideo(currentVideoIndex);
});

