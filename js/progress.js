document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("progress-container");

  const progressData = [
    { subject: "Programming", percent: 85, color: "bg-brand-600" },
    { subject: "Database Systems", percent: 70, color: "bg-amber-500" },
    { subject: "Web Development", percent: 92, color: "bg-emerald-600" }
  ];

  if (container) {
    container.innerHTML = progressData.map(item => `
      <div>
        <div class="flex justify-between text-sm font-medium mb-1 text-slate-700">
          <span>${item.subject}</span>
          <span>${item.percent}%</span>
        </div>
        <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div class="${item.color} h-2.5 rounded-full" style="width: ${item.percent}%"></div>
        </div>
      </div>
    `).join("");
  }
});