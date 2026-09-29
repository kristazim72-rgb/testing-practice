# testing-practice
A series of JavaScript utility functions built and verified using Test-Driven Development (TDD) principles with **Jest** and **Babel**.

## Features Tested

* **`capitalize(string)`**: Returns a string with the first character capitalized.
* **`reverseString(string)`**: Reverses a given string.
* **`calculator`**: An object with basic arithmetic operations (`add`, `subtract`, `divide`, `multiply`).
* **`caesarCipher(string, shift)`**: Encrypts text using a shift factor, preserving case and non-alphabetical characters while wrapping from `z` to `a`.
* **`analyzeArray(array)`**: Takes an array of numbers and returns an object containing `average`, `min`, `max`, and `length`.

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed locally.

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd testing-practice
npm install