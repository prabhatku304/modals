const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imgBg = new Image();
imgBg.src =
  "https://cdn.jsdelivr.net/gh/prabhatku304/modals@master/public/games/flappyV2/assets/bg.png";
const bird = new Image();
bird.src =
  "https://cdn.jsdelivr.net/gh/prabhatku304/modals@master/public/games/flappyV2/assets/bird.png";

const topPipe = new Image();
topPipe.src =
  "https://cdn.jsdelivr.net/gh/prabhatku304/modals@master/public/games/flappyV2/assets/pipe.png";

const bottomPipe = new Image();
bottomPipe.src =
  "https://cdn.jsdelivr.net/gh/prabhatku304/modals@master/public/games/flappyV2/assets/pipe.png";

// general settings
let gamePlaying = false;
const gravity = 0.1;
const speed = 2;
const size = [51, 36];
const jump = -4.5;
const cTenth = canvas.width / 10;

let index = 0,
  bestScore = 0,
  flight,
  flyHeight,
  currentScore,
  pipes;

// pipe settings
const pipeWidth = 70;
const pipeGap = 270;
const pipeLoc = () =>
  Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) +
  pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)
  flyHeight = canvas.height / 2 - size[1] / 2;

  // setup first 3 pipes
  pipes = Array(3)
    .fill()
    .map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);
};

const render = () => {
  // make the pipe and bird moving
  index++;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background first part
  ctx.drawImage(
    imgBg,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );
  // background second part
  ctx.drawImage(
    imgBg,
    0,
    0,
    canvas.width,
    canvas.height,
    -(index * (speed / 2)) % canvas.width,
    0,
    canvas.width,
    canvas.height
  );

  // pipe display
  if (gamePlaying) {
    pipes.map((pipe) => {
      // pipe moving
      pipe[0] -= speed;

      // top pipe
      ctx.drawImage(
        topPipe,
        0,
        478 - pipe[1],
        pipeWidth,
        pipe[1],
        pipe[0],
        0,
        pipeWidth,
        pipe[1]
      );
      // bottom pipe
      ctx.drawImage(
        bottomPipe,
        0,
        0,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap,
        pipe[0],
        pipe[1] + pipeGap,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap
      );

      // give 1 point & create new pipe
      if (pipe[0] <= -pipeWidth) {
        currentScore++;
        // check if it's the best score
        bestScore = Math.max(bestScore, currentScore);

        // remove & create new pipe
        pipes = [
          ...pipes.slice(1),
          [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()],
        ];
      }

      // if hit the pipe, end
      if (
        [
          pipe[0] <= cTenth + size[0],
          pipe[0] + pipeWidth >= cTenth,
          pipe[1] > flyHeight + 30 ||
            pipe[1] + pipeGap < flyHeight + size[1] - 30,
        ].every((elem) => elem)
      ) {
        if (rhymSdk) {
          rhymSdk.gameOver(currentScore);
        }

        gamePlaying = false;
        setup();
      }
    });
  }
  // draw bird
  if (gamePlaying) {
    ctx.drawImage(bird, 0, 0, ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(
      bird,
      0,
      0,
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    );
    flyHeight = canvas.height / 2 - size[1] / 2;
    // text accueil
    // ctx.fillText(`Best score : ${bestScore}`, 85, 245);
    var textWidth = ctx.measureText(window.clickToPlay).width;
    var centerX = (canvas.width - textWidth) / 2;
    ctx.fillText(window.clickToPlay, centerX, 535);
    ctx.font = "bold 30px courier";
  }
  // document.getElementById("bestScore").innerHTML = `Best : ${bestScore}`;
  document.getElementById("currentScore").innerHTML = `${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
};

// launch setup
setup();
imgBg.onload = render;

// start game
document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);
