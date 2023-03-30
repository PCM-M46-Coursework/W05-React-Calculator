# Week 05 - React Calculator Challenge

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

**Calculator Criteria**

 - Hold all the buttons to be displayed in an array and map through the array of buttons to generate the buttons.
 - Display the sum as you click the buttons.
 - At least be able to add, subtract, multiply, divide.
 - Have a clear button which clears the current sum.
 - When the equal button is clicked it calculates the sum you have typed and displays the answer.
 - Use the evaluate method from the Math.js library. ([https://www.npmjs.com/package/mathjs](https://www.npmjs.com/package/mathjs))

**Stretch Goals (Optional)**

 - Add more math logic such as: to the power, square root, brackets, an ‘ANS’ button that uses the previous answer etc.
 - Display the answer on each button click as well as what the user has typed.
 - Add keyboard functionality so you can type a sum on your keyboard as well as click the buttons.

 ## Implementation

For this assignment, I took inspiration from the calculator on my Android phone. The button and display layouts, and the functionality available is the same as you would find on the mobile app.

<p style="text-align:center">
  <img src="https://9to5google.com/wp-content/uploads/sites/4/2021/09/google_calculator_android_12_my_1.jpg?quality=82&strip=all&w=1600" />
</p>


Styling has been set in a sheet, metallic style, with flat buttons, and a sunken screen. I've used CSS Grid, rather than Flex, to be able to achieve a more consistent layout, with less CSS.

 ## Retrospective

This is the first project I've done, roadtesting my React Boilerplate Template. There were a lot of teething problems along the way. Most notably, trying to get React to parse JSONC. Which, never turned out to be necessary anyway.

A lot of the styling for this app came about accidentally. The buttons themselves, are unstyled; but the default styling that buttons have, lends itself to the "Dell Inspiron" inspired look and feel of the calculator.