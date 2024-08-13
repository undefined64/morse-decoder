const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const dot = '10';
  const dash = '11';

  let letters = [];
  let decodedStr = '';

  // закинуть всё в массив по 10 символов
  for (let i = 0; i < expr.length; i += 10) {
    letters.push(expr.slice(i, i + 10));
  }

  // Number преобразование убирает нули до первых 1
  letters = letters.map((letter) => `${Number(letter)}`);

  // Замена на точки и тире
  letters = letters.map((letter) => {
    letter.replace(/(10|11)/g, (match) => {
      if (match == 10) return '.';
      if (match == 11) return '-';
    });
  });

  decodedStr = letters.reduce((acc, curr) => {
    if (curr === 'NaN') {
      return acc + ' ';
    } else {
      return acc + MORSE_TABLE[curr];
    }
  }, '');

  return decodedStr;
}

module.exports = {
  decode,
};
