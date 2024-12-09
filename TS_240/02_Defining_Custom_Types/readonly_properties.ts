interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return {
    x: point.x + dx,
    y: point.y + dy,
  };
}