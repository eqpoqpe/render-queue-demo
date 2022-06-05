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
  console.log(renderQueue.shift(), renderQueue);

  if (renderQueue.length > 0) {
    render();
  } else {
    render_state = false;
  }

  console.log("over");
}


setInterval(() => {
  renderQueue.push(count);

  if (renderQueue.length > 0 && !render_state) {
    render_state = true;

    setTimeout(() => { render(); }, 4000);
  }

  count++;
}, 1000)

console.log("rendering queue");