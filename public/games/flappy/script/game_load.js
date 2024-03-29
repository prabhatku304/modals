const onLoadGame = () => {
  window.clickToPlay = "Click to play";
  const gameContainer = document.createElement("div");
  gameContainer.style.position = "relative";
  gameContainer.innerHTML = `<div
        id="currentScore"
        class="text-center text-3xl absolute top-[10rem] left-0 right-0"
        style="position: absolute; top:10rem; left:0; right:0; font-size: 24px; text-align: center"
      ></div>
      <canvas id="canvas" width="431" height="768"></canvas>`;

  document.body.appendChild(gameContainer);
};

const appHeight = () => {
  const doc = document.documentElement;
  let vh = Math.min(window.innerHeight, doc.clientHeight) * 0.01;
  doc.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

onLoadGame();
