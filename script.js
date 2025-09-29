// Motivational messages array
const motivationalMessages = [
  "Innovation starts with a single line of code! 💻",
  "Turn your wildest ideas into reality! 🚀",
  "Code, create, and conquer! ⚡",
  "Dream big, code bigger! 💡",
  "Your next breakthrough is just one commit away! 🎯",
]

// Launch date
const launchDate = new Date("2025-10-10T10:10:10")

// DOM elements
const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const timerCard = document.getElementById("timerCard")
const launchCard = document.getElementById("launchCard")
const mainTitle = document.getElementById("mainTitle")
const mainDescription = document.getElementById("mainDescription")
const motivationalMessage = document.getElementById("motivationalMessage")

let currentMessageIndex = 0

// Function to pad numbers with leading zero
function padZero(num) {
  return String(num).padStart(2, "0")
}

// Function to update the countdown timer
function updateTimer() {
  const now = new Date().getTime()
  const distance = launchDate.getTime() - now

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysElement.textContent = padZero(days)
    hoursElement.textContent = padZero(hours)
    minutesElement.textContent = padZero(minutes)
    secondsElement.textContent = padZero(seconds)
  } else {
    // Launch time reached
    daysElement.textContent = "00"
    hoursElement.textContent = "00"
    minutesElement.textContent = "00"
    secondsElement.textContent = "00"

    // Show launch message
    showLaunchMessage()
  }
}

// Function to show launch message
function showLaunchMessage() {
  timerCard.style.display = "none"
  launchCard.style.display = "block"
  mainTitle.textContent = "We're Live!"
  mainDescription.textContent = "Hackathon Valley is now live! Join us in building the future of innovation."
}

// Function to rotate motivational messages
function rotateMessage() {
  currentMessageIndex = (currentMessageIndex + 1) % motivationalMessages.length
  motivationalMessage.textContent = motivationalMessages[currentMessageIndex]
}

// Check if already launched on page load
function checkLaunchStatus() {
  const now = new Date().getTime()
  if (now >= launchDate.getTime()) {
    showLaunchMessage()
  }
}

// Initialize the timer
function init() {
  // Check launch status immediately
  checkLaunchStatus()

  // Update timer immediately
  updateTimer()

  // Set up intervals
  setInterval(updateTimer, 1000) // Update timer every second
  setInterval(rotateMessage, 4000) // Rotate messages every 4 seconds
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init)
