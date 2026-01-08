const btnContainer = document.getElementById("btnContainer");
const initialButtons = Array.from(btnContainer.querySelectorAll("button"));
let holdTimer;

const yesBtns = document.querySelectorAll(".yesBtn");
const noBtns = document.querySelectorAll(".noBtn");
const chooseAgainBtn = document.getElementById("chooseAgain");

noBtns.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    holdTimer = setTimeout(() => {
      document.getElementById("yesMessage2").style.display = "block";
      yesBtns.forEach((b) => (b.style.display = "none"));
      noBtns.forEach((n) => (n.style.display = "none"));
      chooseAgainBtn.style.display = "inline-block";
    }, 1000);
  });
  btn.addEventListener("mouseup", () => clearTimeout(holdTimer));
  btn.addEventListener("mouseleave", () => clearTimeout(holdTimer));

  btn.addEventListener("touchstart", () => {
    holdTimer = setTimeout(() => {
      document.getElementById("yesMessage2").style.display = "block";
      yesBtns.forEach((b) => (b.style.display = "none"));
      noBtns.forEach((n) => (n.style.display = "none"));
      chooseAgainBtn.style.display = "inline-block";
    }, 1000);
  });
  btn.addEventListener("touchend", () => clearTimeout(holdTimer));
  btn.addEventListener("touchcancel", () => clearTimeout(holdTimer));
});

function getRandomPositionBelowButtons(element) {
  const containerRect = btnContainer.getBoundingClientRect();

  // Tìm vị trí thấp nhất của các nút ban đầu
  let maxButtonBottom = 0;
  initialButtons.forEach((btn) => {
    const rect = btn.getBoundingClientRect();
    if (rect.bottom > maxButtonBottom) maxButtonBottom = rect.bottom;
  });

  // Vùng nhảy: từ dưới các nút ban đầu + 10px padding đến đáy container - nút height
  const minY = maxButtonBottom - containerRect.top + 10;
  const maxY = containerRect.height - element.offsetHeight - 10;
  const maxX = containerRect.width - element.offsetWidth - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * (maxY - minY) + minY;
  return { x, y };
}

function moveNoBtn(btn) {
  const pos = getRandomPositionBelowButtons(btn);
  btn.style.position = "absolute";
  btn.style.left = pos.x + "px";
  btn.style.top = pos.y + 20 + "px";
}

// Nhấn nút "Có"
function answerYes() {
  document.getElementById("yesMessage").style.display = "block";
  yesBtns.forEach((b) => (b.style.display = "none"));
  noBtns.forEach((b) => (b.style.display = "none"));
  chooseAgainBtn.style.display = "inline-block";
}

function chooseAgain() {
  document.getElementById("yesMessage").style.display = "none";
  document.getElementById("yesMessage2").style.display = "none";
  chooseAgainBtn.style.display = "none";

  yesBtns.forEach((b) => (b.style.display = "inline-block"));
  noBtns.forEach((btn) => {
    btn.style.display = "inline-block";
    btn.style.position = "relative";
    btn.style.left = "0px";
    btn.style.top = "0px";
  });
}
