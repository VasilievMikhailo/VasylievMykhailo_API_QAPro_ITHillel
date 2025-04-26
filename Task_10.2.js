const text = "It was a bright, exciting day — the warm sun was shining, the cheerful streets were full of people, and the delicious food made everything even better.";
const matches = text.match(/\b[^Aa\s]{6,}\b/g);

console.log(matches); 