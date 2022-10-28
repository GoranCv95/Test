"use strict";

const arr1 = document.getElementById("array1");
const arr2 = document.getElementById("array2");

// niz
const arrOne = [1, 12, 342, 44, 23, 3, 454, 54, 748, 22, 7, 233, 2002, 9, 76];
const arrTwo = [2, 24, 684, 11, 54, 7, 741, 111, 623, 400, 14541, 33, 5, 113];

arr1.innerText = `Elementi niza su: ${arrOne}`;
arr2.innerText = `Elementi niza su: ${arrTwo}`;

// Sve ugradjene metode koje koristim za zadatak koriste callback funkcije

// /***************************** */
// /* PRVA GRUPA */
// /***************************** */

// A
const dvocifreni = document.getElementById("dvocifreni");
const btnFirst = document.getElementById("showFirst");

btnFirst.addEventListener("click", firstTask);

function firstTask() {
  const dvijeCifre = arrOne.filter((num) => num >= 10 && num < 100);

  dvocifreni.innerText = dvijeCifre;
}

// B
const middle = document.getElementById("middle");
const btnSecond = document.getElementById("showSecond");

btnSecond.addEventListener("click", showSecond);

function showSecond() {
  const summary = arrOne.reduce((acc, curr) => acc + curr, 0);
  const avg = summary / arrOne.length;

  middle.innerText = avg;
}

// C
const palindrom = document.getElementById("palindrom");
const btnThird = document.getElementById("showThird");

btnThird.addEventListener("click", palindromi);

function palindromi() {
  let pali = [];
  for (let i = 0; i < arrOne.length; i++) {
    let normalan = arrOne[i].toString();
    let unazad = arrOne[i].toString().split("").reverse().join("");

    if (normalan === unazad) {
      pali.push(arrOne[i]);
    }
  }
  palindrom.innerText = pali;
}

// D
const evenIndex = document.getElementById("evenIndex");
const bthFourth = document.getElementById("showFourth");

bthFourth.addEventListener("click", evenI);

function evenI() {
  let parniIndex = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (i % 2 === 0) {
      parniIndex.push(arrOne[i]);
    }
    evenIndex.innerText = parniIndex;
  }
}

// E

const sortOne = document.getElementById("sortOne");
const btnFifth = document.getElementById("showFifth");

btnFifth.addEventListener("click", sorting1);

function sorting1() {
  const s = arrOne.slice().sort((a, b) => b - a);

  sortOne.innerText = s;
}

// F
const sortTwo = document.getElementById("sortTwo");
const btnSixth = document.getElementById("showSixth");

btnSixth.addEventListener("click", sorting2);

function sorting2() {
  let sort = [...arrOne];
  for (let i = 0; i < sort.length - 1; i++) {
    for (let j = i + 1; j < sort.length; j++) {
      if (sort[i] < sort[j]) {
        [sort[i], sort[j]] = [sort[j], sort[i]];
      }
    }
  }
  sortTwo.innerText = sort;
}

// /***************************** */
// /* DRUGA GRUPA */
// /***************************** */

// A
const evenB = document.getElementById('evenB');
const showFirstB = document.getElementById('showFirstB');

showFirstB.addEventListener('click', even);

function even(){ 
  const parni = arrTwo.filter((num) => num % 2 === 0)
  evenB.innerText = parni;
}
// B
const sum = document.getElementById("sumB");
const showSecondB = document.getElementById("showSecondB");

showSecondB.addEventListener("click", summary);

function summary() {
  let sumEven = 0;
  let sumOdd = 0;
  const sumParni = arrTwo
    .filter((num) => num % 2 === 0)
    .reduce((prev, curr) => prev + curr, sumEven);

  const sumNeparni = arrTwo
    .filter((num) => num % 2 !== 0)
    .reduce((prev, curr) => prev + curr, sumOdd);

  sum.innerHTML = `<span>Suma parnih je ${sumParni}!</span> <span>Suma neparnih je ${sumNeparni}!</span>`
}

// C
const prime = document.getElementById("primeNum");
const btnThirdB = document.getElementById("showThirdB");

btnThirdB.addEventListener("click", primeNum);

function primeNum() {
  let prosti = [];
  arrTwo.forEach((num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    prosti.push(num);
  });
  prime.innerText = prosti;
}

// D
const oddIndex = document.getElementById("oddIndex");
const bthFourthB = document.getElementById("showForthB");

bthFourthB.addEventListener("click", oddI);

function oddI() {
  let neparniIndex = [];
  for (let i = 0; i < arrTwo.length; i++) {
    if (i % 2 !== 0) {
      neparniIndex.push(arrTwo[i]);
    }
    oddIndex.innerText = neparniIndex;
  }
}

// E
const sortOneB = document.getElementById("sortOneB");
const btnFifthB = document.getElementById("showFifthB");

btnFifthB.addEventListener("click", sorting1B);

function sorting1B() {
  const s = arrTwo.slice().sort((a, b) => a - b);

  sortOneB.innerText = s;
}

// F
const sortTwoB = document.getElementById("sortTwoB");
const btnSixthB = document.getElementById("showSixthB");

btnSixthB.addEventListener("click", sorting2B);

function sorting2B() {
  let sort = [...arrTwo];
  for (let i = 0; i < sort.length - 1; i++) {
    for (let j = i + 1; j < sort.length; j++) {
      if (sort[i] > sort[j]) {
        [sort[i], sort[j]] = [sort[j], sort[i]];
      }
    }
  }
  sortTwoB.innerText = sort;
}


















