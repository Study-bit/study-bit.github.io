 const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  const fragment = document.createDocumentFragment();
  const grid = [12,8];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row;

  for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
     staggerVisualizerEl.appendChild(fragment);

  }
  anime({
  targets: '.stagger-visualizer div',
  scale: [
    {value: 3, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 700}
  ],
  delay: anime.stagger(150, {grid: [12,8], from:"1"}),
  loop: true
});
const item=document.querySelector(".item");

setTimeout(addClass(),1000);
function addClass(){
	item.classList.add("out");
	setTimeout(function(){window.location="portfolio.html"},2000);
}

