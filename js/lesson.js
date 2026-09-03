document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lesson-form");
  const output = document.getElementById("lesson-output");
  const subjectBadge = document.getElementById("lesson-subject-badge");
  const titleHeader = document.getElementById("lesson-title");
  const contentDiv = document.getElementById("lesson-content");
  const generateBtn = document.getElementById("generate-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = document.getElementById("subject-input").value;
      const topic = document.getElementById("topic-input").value;

      generateBtn.innerText = "Generating Lesson...";
      generateBtn.disabled = true;

      setTimeout(() => {
        subjectBadge.innerText = subject;
        titleHeader.innerText = topic;
        contentDiv.innerHTML = `
          <h3 class="font-bold text-slate-800 text-base">Introduction</h3>
          <p>Recursion is a programming technique where a function calls itself to solve a smaller instance of a problem.</p>
          <h3 class="font-bold text-slate-800 text-base mt-4">Key Concepts</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Base Case:</strong> The condition that stops the recursion.</li>
            <li><strong>Recursive Step:</strong> The part where the function calls itself with modified arguments.</li>
          </ul>
          <h3 class="font-bold text-slate-800 text-base mt-4">Real-world Analogy</h3>
          <p>Imagine standing between two parallel mirrors. Each mirror reflects the image of the other, creating an infinite sequence of reflections.</p>
        `;

        output.classList.remove("hidden");
        generateBtn.innerText = "Generate Lesson";
        generateBtn.disabled = false;
      }, 1000);
    });
  }
});