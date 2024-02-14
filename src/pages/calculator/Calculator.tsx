import React, { useState } from "react";
import calculatorStyles from "./Calculator.Styles";
import { Box, Button, Typography } from "@mui/material";

interface IState {
    displayNums: string;
    result: string;
}

const Calculator: React.FC = () => {
    const [displayNums, setDisplayNums] = useState<IState["displayNums"]>("");
    const [result, setResult] = useState<IState["result"]>("0");

    const calculateResult = () => {
        try {
            const result = evaluateExpression();
            setResult(result.toString());
        } catch (error) {
            setResult("Error");
        }
        // setDisplayNums("0");
    };

    const evaluateExpression = () => {
        const operators = /[+\-*/%]/;
        const parts = displayNums.split(operators);
        console.log(parts)
        const operatorsArray = displayNums.match(/([+\-*/])/g);
      
        if (operatorsArray && parts.length > 0) {
          const nums = [];
      
          for (let i = 0; i < parts.length; i++) {
            const num = parseFloat(parts[i]);
            console.log("parsed num", num)
            if (!isNaN(num) || (i === 0 && parts[i] === "")) {
              // Handle negative numbers at the beginning
              if (i === 0 && parts[i] === "" && !operatorsArray.includes("-")) {
                nums.push(-Math.abs(num));
              } else {
                nums.push(num);
              }
            }
          }
      
          for (let i = 0; i < operatorsArray.length; i++) {
            if (operatorsArray[i] === "*" || operatorsArray[i] === "/") {
              const operator = operatorsArray[i];
              const prevNum = nums[i];
              const nextNum = nums[i + 1];
              switch (operator) {
                case "*":
                  nums.splice(i, 2, prevNum * nextNum);
                  operatorsArray.splice(i, 1);
                  i--;
                  break;
                case "/":
                  if (nextNum === 0) throw new Error("Division by zero");
                  nums.splice(i, 2, prevNum / nextNum);
                  operatorsArray.splice(i, 1);
                  i--;
                  break;
                default:
                  throw new Error("Invalid operator");
              }
            }
          }
      
          let result = nums[0];
          for (let i = 0; i < operatorsArray.length; i++) {
            const operator = operatorsArray[i];
            const nextNum = nums[i + 1];
            switch (operator) {
              case "+":
                result += nextNum;
                break;
              case "-":
                result -= nextNum;
                break;
              default:
                throw new Error("Invalid operator");
            }
          }
      
          return result;
        } else {
          throw new Error("Invalid expression");
        }
      };
      



    // const handleNumBtnClick = (value: string) => {
    //     if (value === "=")
    //         calculateResult();
    //     else if (value === "DEL")
    //         setDisplayNums(prevNums => prevNums.slice(0, prevNums.length - 1))
    //     else if (value === "RESET")
    //         setDisplayNums("")
    //     else
    //         setDisplayNums(prevNums => prevNums + value);
    // };
    // ... (previous code)

const handleNumBtnClick = (value: string) => {
    // Check if the value is an operator
    const isOperator = /[+\-*/%]/.test(value);
  
    // Check if the last character in displayNums is already an operator
    const lastCharIsOperator = /[+\-*/%]/.test(displayNums.charAt(displayNums.length - 1));
  
    if (isOperator && lastCharIsOperator) {
      // If the current value is an operator and the last character is also an operator, do nothing
      return;
    }
  
    if (value === "=")
      calculateResult();
    else if (value === "DEL")
      setDisplayNums(prevNums => prevNums.slice(0, prevNums.length - 1))
    else if (value === "RESET")
      setDisplayNums("")
    else
      setDisplayNums(prevNums => prevNums + value);
  };
  
  // ... (remaining code)
  


    return (
        <Box sx={calculatorStyles.mainContainer}>
            <Box sx={calculatorStyles.childContainer}>
                <Typography sx={calculatorStyles.calculatorHeading}>Calculator</Typography>
                <Box sx={calculatorStyles.calculatorContainer}>
                    <Box sx={calculatorStyles.displayNosContainer}>
                        <Typography sx={calculatorStyles.displayNumsText}>{displayNums}</Typography>
                        <Typography sx={calculatorStyles.resultText}>{result}</Typography>
                    </Box>
                    <Box sx={calculatorStyles.numsBtnsContainer}>
                        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", ".", 0, "/", "DEL", "RESET", "="].map((value) => (
                            <Button
                                key={value}
                                sx={calculatorStyles.buttonNumText}
                                variant="contained"
                                onClick={() => handleNumBtnClick(value.toString())}
                            >
                                {value}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Calculator;
