const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.getElementById("container");
const flowers = document.getElementById("flowers");

// Position initiale du bouton NON
let posX = 150;
let posY = 40;

noBtn.style.left = posX + "px";
noBtn.style.top = posY + "px";

// Distance minimale avant fuite
const escapeDistance = 100;

document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(
        e.clientX - btnCenterX,
        e.clientY - btnCenterY
    );

    if (distance < escapeDistance) {
        const angle = Math.random() * Math.PI * 2;

        posX += Math.cos(angle) * 120;
        posY += Math.sin(angle) * 120;

        const maxX = window.innerWidth - btnRect.width;
        const maxY = window.innerHeight - btnRect.height;

        posX = Math.max(0, Math.min(posX, maxX));
        posY = Math.max(0, Math.min(posY, maxY));

        noBtn.style.left = posX + "px";
        noBtn.style.top = posY + "px";
    }
});

// Bouton OUI 💖
yesBtn.addEventListener("click", () => {
    container.style.display = "none";
    flowers.classList.remove("hidden");
});
