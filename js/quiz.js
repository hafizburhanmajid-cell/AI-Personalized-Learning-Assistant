document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option-btn");
  const feedback = document.getElementById("quiz-feedback");

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.getAttribute("data-correct") === "true";

      options.forEach(b => b.disabled = true);

      if (isCorrect) {
        btn.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-900");
        feedback.className = "p-3 rounded-lg text-sm bg-emerald-50 text-emerald-800 border border-emerald-200";
        feedback.innerText = "Correct! The base case prevents infinite stack calls.";
      } else {
        btn.classList.add("bg-rose-100", "border-rose-500", "text-rose-900");
        feedback.className = "p-3 rounded-lg text-sm bg-rose-50 text-rose-800 border border-rose-200";
        feedback.innerText = "Incorrect. The base case acts as the termination condition.";
      }

      feedback.classList.remove("hidden");
    });
  });
});