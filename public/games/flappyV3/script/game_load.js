const onLoadGame = () => {
  window.clickToPlay = "Click to play";
  const gameContainer = document.createElement("div");
  gameContainer.style.position = "relative";
  const canvasHeight = window.innerHeight;
  const canvasWidth = window.innerWidth;
  gameContainer.innerHTML = `<div
        id="currentScore"
        class="text-center text-3xl absolute top-[10rem] left-0 right-0"
        style="position: absolute; top:10rem; left:0; right:0; font-size: 24px; text-align: center"
      ></div>
      <canvas id="canvas" width=${canvasWidth} height=${canvasHeight}></canvas>`;

  document.body.appendChild(gameContainer);
};

onLoadGame();
