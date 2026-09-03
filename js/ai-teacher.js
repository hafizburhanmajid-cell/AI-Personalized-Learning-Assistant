document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");

  if (chatForm) {
    chatForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const query = userInput.value.trim();
      if (!query) return;

      appendMessage("user", query);
      userInput.value = "";

      try {
        const response = await fetch("http://localhost:5000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: query })
        });

        const data = await response.json();
        appendMessage("ai", data.reply || "Something went wrong.");
      } catch (err) {
        appendMessage("ai", "Error connecting to backend server.");
      }
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