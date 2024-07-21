# Resistor Color Code Calculator

This project is a web-based tool to calculate the resistance value of a resistor using the 4-band color code method. The tool allows users to select the color bands of a resistor and displays the calculated resistance value with tolerance.

## Features

- **Interactive Selection**: Select color bands from dropdown menus.
- **Real-time Calculation**: Displays the resistance value and tolerance instantly.
- **Visual Feedback**: Shows images of the resistor color bands for better understanding.
## Understanding Resistor Color Coding

Resistor color coding is a method of indicating the value of resistors using colored bands. Each color corresponds to a specific number, and the arrangement of these colors indicates the resistance value and tolerance.

### Color Bands

1. **1st Band (Digit 1)**: The first significant digit.
2. **2nd Band (Digit 2)**: The second significant digit.
3. **3rd Band (Multiplier)**: The power of ten by which the first two digits should be multiplied.
4. **4th Band (Tolerance)**: The tolerance of the resistor value (accuracy of the resistance value).

### Color Code Chart

| Color   | Digit | Multiplier      | Tolerance   |
|---------|-------|-----------------|-------------|
| Black   | 0     | ×1              |             |
| Brown   | 1     | ×10             | ±1%         |
| Red     | 2     | ×100            | ±2%         |
| Orange  | 3     | ×1,000          | ±0.05%      |
| Yellow  | 4     | ×10,000         | ±0.02%      |
| Green   | 5     | ×100,000        | ±0.5%       |
| Blue    | 6     | ×1,000,000      | ±0.25%      |
| Violet  | 7     | ×10,000,000     | ±0.1%       |
| Gray    | 8     | ×100,000,000    | ±0.01%      |
| White   | 9     | ×1,000,000,000  |             |
| Gold    |       | ×0.1            | ±5%         |
| Silver  |       | ×0.01           | ±10%        |
| None    |       |                 | ±20%        |
