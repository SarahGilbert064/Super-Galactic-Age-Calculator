# Super Galactic Age Calculator

### Created by Sarah Gilbert

## Description

##### This back end only webpage was created to further my knowledge and skills by implementing the use of test driven development. Along with strengthening my skills with constructors, objects, and prototypes, this is also the first time I have implemented multiple new programs into my code such as webpack, jest and eslint. If functioning properly, this page should return the user's age back to them depending on what planet they are "residing" on. They will get results for Mercury, Venus, Mars, and Jupiter, while also finding out how long they have left to live on each planet. There will also be the option of determining the life expectancy of the user, depending on their age and what planet they are on. Lastly, if the user has lived past the 'life expectancy', the application will tell them by how many years.


## Specifications

  | Test | Input | Output |
  | :-------------------- | :------------------------------------- | :-------------------------- |
  | Age Function |||
  | Should correctly create an age object with current age. | 29 | 29 |
  | Should correctly take user age,divide it by 0.24, and then round the result to determine age on Mercury. | 29 | 121 |
  | Should correctly take user age, divide it by 0.62, and then round the result to determine age on Venus. | 29 | 47 | 
  | Should correctly take user age, divide it by 1.88, and then round the result to determine age on Mars. | 29 | 15 |
  | Should correctly take user age, divide it by 11.86, and then round the result to determine age on Jupiter. | 29 | 2 |
  | Should correctly take life expectancy for earth and subtract user ag.e | 29 | 46 |
  | Should correctly divide current life expectancy on earth by a year on Mercury, then subtract that by user's current age on Mercury. | 29 | 46 |
  | Should correctly divide current life expectancy on earth by a year on Venus, then subtract that by user's current age on Venus. | 29 | 74 |
  | Should correctly divide current life expectancy on earth by a year on Mars, then subtract that by user's current age on Mars. | 29 | 24 |
  | Should correctly divide current life expectancy on earth by a year on Jupiter, then subtract that by user's current age on Jupiter. | 29 | 4 |
  | Should correctly take user's age and determine the amount of years they have lived pasted the life expectancy rate. | 80 | 5 |



## Setup Instruction

#### View Online

* Follow this link https://sarahgilbert064.github.io/mr-roboger/

  
#### Open Locally

1. Navigate to https://github.com/SarahGilbert064/Super-Galactic-Age-Calculator

2. Click on the green "Code" button and copy the repository HTTPS URL

3. Open your machine terminal and use the command 'git clone https://github.com/SarahGilbert064/Super-Galactic-Age-Calculator in the directory you would like to clone the repository

4. Another option is to click "Download Zip" and open the file on your machine.

5. Once opened in VS Code, go to your terminal and run 'npm install'. 

6. Once the required webpack has been installed, run 'npm run build' to bundle all files.

## Known Bugs
#### No known bugs

## Support and Contact Details
* Contact me at sarahgilbert064@gmail.com

## Technologies Used
* HTML
* CSS
* JavaScript
* JQuery
* Visual Studio Code
* Jest
* esLint
* Babel

## Legal
#### Copyright (c) 2020 Sarah Gilbert
#### This software is licensed under the MIT license
