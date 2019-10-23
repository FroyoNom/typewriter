const sentence = "hello there from lighthouse labs";
let result = 0;
const characterFunc = () => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 100 + 50 * result);
    result += 1;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, 1000 + 50 * sentence.length + 1);
};
characterFunc();
