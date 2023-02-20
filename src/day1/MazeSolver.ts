const dir = [
  [-1, 0], // left
  [1, 0], // right
  [0, 1], // up
  [0, -1] //down
]
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // describe the base cases
  // off the map
  if (curr.x < 0 || curr.x >= maze[0].length ||
      curr.y < 0 || curr.y >= maze[0].length) {
      return false;
    }
  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // at the end
  if (curr.x === end.x && curr.y == end.y) {
    path.push(end); // need to push in the last/end point 
    return true;
  }
  // seen the point before
  if(seen[curr.y][curr.x]){
    return false;
  }

  // Recurse step. Pre, recurse, post steps
  //pre - push current point into path
  seen[curr.y][curr.x] = true; 
  path.push(curr);
  
  //recurse - check possible directions
  for(let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]
    if (walk(maze, wall, {
        x: curr.x + x,
        y: curr.y + y
        }, end, seen, path
        )
      ) {
        return true; // this adds the true to the seen path
      }
  }

  //post - pop last point off
  path.pop(); // this pops the current point off, and then uses the last seen point
  return false; // if we recurse and we did not find end in the final position it would be false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path)

  return path;
}