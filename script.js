// Registration window: open immediately and closes at 11:59 PM on 19 October 2026 (Nigeria time).
const registrationDeadline = new Date("2026-10-20T00:00:00+01:00");
const countdown = document.getElementById("countdown");
const registerButtons = [...document.querySelectorAll("[data-open-register]")];

function updateRegistrationStatus(){
  const now = new Date();
  const remaining = registrationDeadline - now;
  if(!countdown) return;

  if(remaining <= 0){
    countdown.innerHTML = '<div class="closed-message">Registration is now closed.</div>';
    registerButtons.forEach(btn => {
      btn.disabled = true;
      btn.textContent = "Registration closed";
      btn.classList.add("is-disabled");
    });
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateRegistrationStatus();
setInterval(updateRegistrationStatus, 1000);

const modal = document.getElementById("registerModal");
const steps = [...document.querySelectorAll(".modal-step")];
const dots = [...document.querySelectorAll("[data-step-dot]")];
const receiptInput = document.getElementById("receiptInput");
const submitReceipt = document.getElementById("submitReceipt");
const uploadTitle = document.getElementById("uploadTitle");
const uploadHint = document.getElementById("uploadHint");
const uploadStatus = document.getElementById("uploadStatus");

function showStep(n){
  steps.forEach(s => s.classList.toggle("active", s.dataset.step === String(n)));
  dots.forEach(d => d.classList.toggle("active", d.dataset.stepDot === String(n)));
  document.querySelector(".modal").scrollTop = 0;
}
function openModal(){ modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; showStep(1); }
function closeModal(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow=""; }

document.querySelectorAll("[data-open-register]").forEach(btn => btn.addEventListener("click", openModal));
document.querySelector("[data-close-register]").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

document.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => showStep(btn.dataset.next)));
document.querySelectorAll("[data-prev]").forEach(btn => btn.addEventListener("click", () => showStep(btn.dataset.prev)));

document.getElementById("copyAccount").addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(document.getElementById("accountNumber").textContent.trim());
    const btn = document.getElementById("copyAccount");
    const old = btn.textContent; btn.textContent = "Copied ✓";
    setTimeout(() => btn.textContent = old, 1500);
  }catch(e){ alert("Account number: 6141871365"); }
});

receiptInput.addEventListener("change", () => {
  const file = receiptInput.files[0];
  if(!file){ submitReceipt.disabled=true; return; }
  const max = 10 * 1024 * 1024;
  if(file.size > max){
    receiptInput.value = "";
    submitReceipt.disabled = true;
    uploadStatus.textContent = "That file is larger than 10MB. Please choose a smaller receipt.";
    return;
  }
  uploadTitle.textContent = file.name;
  uploadHint.textContent = `${(file.size/1024/1024).toFixed(2)} MB · Ready to submit`;
  uploadStatus.textContent = "Receipt selected successfully.";
  submitReceipt.disabled = false;
});

submitReceipt.addEventListener("click", () => {
  if(!receiptInput.files.length) return;
  showStep(3);
});

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", () => closeModal()));
