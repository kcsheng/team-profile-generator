<h1>Team Profile Generator</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h2>Description</h2>

This App can generate a summary profile of a software engineering team based on member's role. The CLI input interface is built upon npm package [inquirer](https://www.npmjs.com/package/inquirer). The app is constructed following OOP and TDD practices.

<h2>Table of Contents</h2>
<ul> 
  <li><a href="#requirement">Features</a></li>
  <li><a href="#plan">Development plan</a></li>
  <li><a href="#install">Installation</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#demo">Demo</a></li>
</ul>
<h2 id="requirement">App features</h2>

- Ability to build a team profile (manager, engineer(s) and intern(s)) based on CLI prompts
- Ability to show entire team profile and contact information in html immediately after the build

<h2 id="plan">Development plan</h2>
Based on OOP, there are 5 classes to be deployed, with the main class Employee and its 3 subclasses: Manger, Engineer and Intern, as well as an independent class named Team. These classes are responsible to compose a team through generating instances, which are based on the user input. These classes will be built incrementally using TDD. To unit-test the actual user input which is subsequently used by the receiving function, I will need to mock the external dependency inquirer to simulate the data flow. The goal is to first fail-test incrementally all internal functions, following which they will be written to be functional. Finally, the code will be refactored.

<h2 id="install">Installation</h2>
The entire App can be downloaded using git clone or zip method. Please run npm install to restore necessary node modules.

<h2 id="license">License</h2>

[MIT](https://opensource.org/licenses/MIT)

<h2 id="demo">Demo</h2>
