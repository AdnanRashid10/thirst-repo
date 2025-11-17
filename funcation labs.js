// Step 1: Define Temperature Data (replace YOUR_VALUE with the real numbers)
let day1 = YOUR_VALUE;
let day2 = YOUR_VALUE;
let day3 = YOUR_VALUE;
// ...
let day30 = YOUR_VALUE;

// Step 2: Convert Temperatures
// If a value is Fahrenheit → convert to Celsius
// If a value is Celsius → convert to Fahrenheit

// Example pattern (you must check which days are F and which are C):
// let day1_c = (day1 - 32) * 5/9;
// let day2_f = (day2 * 9/5) + 32;

let day1_c = /* conversion if needed */;
let day2_c = /* conversion if needed */;
// continue through day30…

// And Fahrenheit versions:
let day1_f = /* conversion if needed */;
let day2_f = /* conversion if needed */;
// continue through day30…

// Step 3: Calculate Totals
let tot_temperature_in_celsius =
  day1_c +
  day2_c +
  day3_c +
  /* ... */ 
  day30_c;

let tot_temperature_in_fahrenheit =
  day1_f +
  day2_f +
  day3_f +
  /* ... */
  day30_f;

// Step 4: Calculate Averages
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
