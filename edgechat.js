document.addEventListener("DOMContentLoaded", function () {
  const chatBubble = document.querySelector(".chat-bubble");
  const bubbleText = chatBubble.querySelector("p");
  const chatLink = document.querySelector(".chat-link");

  const messages = [
    "Ndeewo! 😊",
    "Kedu ka ị mere 😊",
    "Need help? 💬",
    "Let's Talk Now💬",
    "What Symptoms do you have? 🤒",
    "Dizziness? 🌀",
    "Fever? 🌡️",
    "Cough? 🤧",
    "Diagnose it Today! 🩺",
    "I'm here to help! 🤗",
  ];

  let currentMessageIndex = 0;
  let bubbleInterval;

  /** 💡 Force CSS animation reflow on all devices */
  function restartTypingAnimation() {
    bubbleText.classList.remove("typing-animation");
    void bubbleText.offsetWidth; // works better than requestAnimationFrame on mobile
    bubbleText.classList.add("typing-animation");
  }

  function updateBubble() {
    chatBubble.classList.remove("active");
    setTimeout(() => {
      bubbleText.textContent = messages[currentMessageIndex];
      restartTypingAnimation();
      chatBubble.classList.add("active");
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }, 500);
  }

  function startMessageCycle() {
    updateBubble();
    bubbleInterval = setInterval(updateBubble, 3500);
  }

  function stopMessageCycle() {
    clearInterval(bubbleInterval);
  }

  startMessageCycle();

  // Hover (desktop) and tap (mobile) interaction
  chatLink.addEventListener("mouseenter", () => {
    stopMessageCycle();
    bubbleText.textContent = "Let's talk! 💬";
    restartTypingAnimation();
    chatBubble.classList.add("active");
  });

  chatLink.addEventListener("mouseleave", startMessageCycle);

  // 👇 Touch fallback for mobile users (since :hover doesn’t exist)
  chatLink.addEventListener("touchstart", () => {
    stopMessageCycle();
    bubbleText.textContent = "Let's talk! 💬";
    restartTypingAnimation();
    chatBubble.classList.add("active");
  });

  chatLink.addEventListener("touchend", startMessageCycle);
});
