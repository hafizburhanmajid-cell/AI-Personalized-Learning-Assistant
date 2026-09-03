document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.querySelector("form");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const saveBtn = profileForm.querySelector("button[type='submit']");
      const originalText = saveBtn.innerText;

      saveBtn.innerText = "Saving...";
      saveBtn.disabled = true;

      setTimeout(() => {
        saveBtn.innerText = "Preferences Saved!";
        saveBtn.classList.remove("bg-brand-600", "hover:bg-brand-700");
        saveBtn.classList.add("bg-emerald-600");

        setTimeout(() => {
          saveBtn.innerText = originalText;
          saveBtn.classList.remove("bg-emerald-600");
          saveBtn.classList.add("bg-brand-600", "hover:bg-brand-700");
          saveBtn.disabled = false;
        }, 2000);
      }, 600);
    });
  }
});