document.addEventListener("DOMContentLoaded", function () {
      const chatBubble = document.querySelector(".chat-bubble");
      const bubbleText = chatBubble.querySelector("p");
      const chatLink = document.querySelector(".chat-link");

      const messages = [
          "Nnọọ! 😊",
          "Kedu ka ị mere 😊",
          "Need help? 💬",
          "Dizziness? 🌀",
          "Fever? 🌡️",
          "Cough? 🤧",
          "Diagnose it Today! 🩺",
          "We're here! 🤗",
      ];

      let currentMessageIndex = 0;
      let bubbleInterval;

      function updateBubble() {
        chatBubble.classList.remove("active");
        setTimeout(() => {
          bubbleText.textContent = messages[currentMessageIndex];
          bubbleText.classList.remove("typing-animation");
          requestAnimationFrame(() => {
          bubbleText.offsetWidth; // ensure reflow
          bubbleText.classList.add("typing-animation");
          });
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

      chatLink.addEventListener("mouseenter", () => {
        stopMessageCycle();
        bubbleText.textContent = "Let's talk! 💬";
        chatBubble.classList.add("active");
      });

      chatLink.addEventListener("mouseleave", startMessageCycle);
    });