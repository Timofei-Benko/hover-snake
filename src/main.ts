import './style.css';

const COLORS = ['#F52A9A', '#F79A46', '#556CC9', '#0000ff', '#7A98EE', '#ee82ee'];

function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(function setUpPlayground(params: { rows: number, cols: number }) {
  const {rows, cols} = params;

  const playground = document.querySelector<HTMLDivElement>('.playground')!;
  playground.style.setProperty('--grid-rows', String(rows));
  playground.style.setProperty('--grid-cols', String(cols));

  for (let i = 0; i < (rows * cols); i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.style.setProperty(
      '--hover-bg-clr',
      COLORS[getRandomBetween(0, COLORS.length - 1)],
    );
    playground.appendChild(gridItem);
  }
})({cols: 50, rows: 50});
