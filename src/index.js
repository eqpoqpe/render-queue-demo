// string.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim()

let count = 0;
let render_state = false;
const renderQueue = [];

async function singleRender(n) {
  console.log(`singleRender${n}`);
  return 0;
}

/**
 * asleep
 */
const render = async function () {
  renderQueue.shift();
  console.log(renderQueue);

  if (renderQueue.length > 0) {
    render();
  } else {
    render_state = false;
  }
}

setInterval(() => {
  renderQueue.push(count);

  if (renderQueue.length > 0 && !render_state) {
    render_state = true;

    render();
  }

  count++;
}, 1000);

console.log("rendering queue");