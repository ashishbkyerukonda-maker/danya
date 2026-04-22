const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

let scale = 1;
let noClicks = 0;

// Move "No" button randomly
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", () => {
  noClicks++;

  // Increase Yes button size
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  moveNoButton();
});

// Yes button click → final state
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1 style="color:#ff4d6d;">CUMTIELLUUU .. I LOVE YOU MOREEE</h1>
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" width="250"/>
      <h2>I knew you'd say yes 😍</h2>
    </div>
  `;
});
