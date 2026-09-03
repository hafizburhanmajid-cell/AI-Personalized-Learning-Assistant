document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");

  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = userInput.value.trim();
      if (!query) return;

      // 1. Render User Message
      appendMessage("user", query);
      userInput.value = "";

      // 2. Render Mock AI Response (Backend integrate hone tak)
      setTimeout(() => {
        const mockResponse = `Here is a simple breakdown for "${query}": Think of it like nested Russian Matryoshka dolls. Each layer calls a smaller version of itself until you reach the smallest doll (the Base Case).`;
        appendMessage("ai", mockResponse);
      }, 800);
    });
  }

  function appendMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "flex items-start gap-3 justify-end" : "flex items-start gap-3";

    const content = sender === "user" 
      ? `<div class="p-4 bg-brand-600 text-white rounded-xl max-w-xl text-sm shadow-sm">${text}</div>`
      : `<div class="flex items-center justify-center font-bold text-white rounded-full w-8 h-8 bg-brand-600">AI</div>
         <div class="p-4 bg-white border rounded-xl border-slate-200 max-w-xl text-slate-700 text-sm shadow-sm">${text}</div>`;

    msgDiv.innerHTML = content;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});