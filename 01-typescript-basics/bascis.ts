function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

const printResult = true;
const resultPhrase = "Result is: ";

add(5, 2.8, printResult, resultPhrase);
