export default function two_crystal_balls(breaks: boolean[]): number {
  const jump_amount = Math.floor(Math.sqrt(breaks.length));

  let i = jump_amount

  // jump forward by square root on N until we find the break
  for(; i < breaks.length; i += jump_amount){
    if (breaks[i]){
      break;
    }
  }

  // jump back square root on N
  i -= jump_amount;

  // walk forward square root on N
  for(let j = 0; j <= jump_amount && i < breaks.length; ++j, ++i){
    if(breaks[i]){
      return i;
    }
  }

  return -1
}