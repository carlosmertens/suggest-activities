const activities = [
  { id: 7413, duration: 180, price: 411 },
  { id: 7099, duration: 180, price: 267 },
  { id: 7048, duration: 240, price: 264 },
  { id: 6979, duration: 150, price: 141 },
  { id: 6811, duration: 150, price: 143 },
  { id: 7495, duration: 120, price: 423 },
  { id: 7326, duration: 120, price: 352 },
  { id: 7574, duration: 240, price: 469 },
  { id: 7278, duration: 180, price: 312 },
  { id: 7069, duration: 150, price: 220 },
  { id: 7194, duration: 210, price: 383 },
  { id: 7543, duration: 240, price: 481 },
  { id: 8888, duration: 480, price: 10 },
  { id: 7435, duration: 30, price: 468 },
  { id: 7365, duration: 210, price: 380 },
  { id: 7261, duration: 150, price: 362 },
  { id: 7208, duration: 30, price: 348 },
  { id: 6902, duration: 120, price: 102 },
  { id: 6616, duration: 180, price: 31 },
  { id: 6865, duration: 30, price: 168 },
  { id: 7491, duration: 90, price: 441 },
  { id: 7552, duration: 180, price: 488 },
  { id: 7148, duration: 210, price: 232 },
  { id: 6801, duration: 150, price: 127 },
  { id: 6594, duration: 210, price: 21 },
  { id: 7331, duration: 90, price: 352 },
  { id: 7480, duration: 150, price: 450 },
  { id: 7186, duration: 60, price: 337 },
  { id: 7031, duration: 120, price: 278 },
  { id: 7002, duration: 60, price: 284 },
  { id: 6989, duration: 90, price: 276 },
  { id: 7019, duration: 60, price: 255 },
  { id: 6667, duration: 30, price: 72 },
  { id: 6917, duration: 90, price: 119 },
  { id: 7475, duration: 90, price: 479 },
  { id: 7176, duration: 210, price: 266 },
  { id: 6933, duration: 90, price: 129 },
  { id: 7444, duration: 120, price: 486 },
  { id: 7317, duration: 90, price: 302 },
  { id: 7430, duration: 150, price: 402 },
  { id: 7466, duration: 60, price: 498 },
  { id: 6990, duration: 180, price: 296 },
  { id: 6661, duration: 180, price: 79 },
  { id: 6583, duration: 240, price: 91 },
  { id: 6784, duration: 120, price: 121 },
  { id: 7295, duration: 150, price: 379 },
  { id: 7474, duration: 240, price: 452 },
  { id: 7070, duration: 150, price: 251 },
  { id: 7561, duration: 210, price: 440 },
  { id: 7478, duration: 180, price: 401 },
  { id: 6938, duration: 120, price: 122 },
  { id: 7044, duration: 180, price: 267 },
  { id: 6610, duration: 60, price: 75 },
  { id: 7383, duration: 90, price: 441 },
  { id: 6985, duration: 210, price: 294 },
  { id: 6686, duration: 210, price: 42 },
  { id: 7450, duration: 240, price: 414 },
  { id: 7134, duration: 30, price: 208 },
  { id: 7366, duration: 210, price: 362 },
  { id: 6722, duration: 180, price: 29 },
  { id: 6748, duration: 120, price: 33 },
];
const days: number = 1;
const budget: number = 75;

function solution(days: number, budget: number): number[] {
  // write your code in JavaScript
  const totalHours = days * 8;
  let result: number[] = [];

  activities.map((item) => {
    if (item.duration >= totalHours && item.price >= budget) {
      result.unshift(item.id);
    }
    return result;
  });

  return result;
}

console.log('Solution: ', solution(days, budget));
