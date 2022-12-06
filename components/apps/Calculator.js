import SmallWindow from "components/ui/SmallWindow";
import React,{ useEffect, useState } from "react";
import { useSelector} from "react-redux";

import CSS from './Calculator.module.scss';


//Single Button Component 
function CalculatorNumber(props){
    function buttonPressed()
    {
        // Convert number to string before sending, so that it adds to the end: 1 + 2 = 12
        props.numberPressed(props.number.toString());
    }
    return(
    <button className={CSS.button} onClick={buttonPressed}>
        {props.number}
    </button>
);}

function Calculator(props){
    //Context Store
    // const bDebuggingMode = useSelector(state => state.debug.bDebuggingMode);
    // const bIsDarkTheme = useSelector(state => state.theme.bDarkTheme);


    //States
    const [bIsFirstNumber, setbIsFirstNumber] = useState(true);
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [currentOperation, setCurrentOperation] = useState(null);
    const [calculation, setCalculation] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if(bIsFirstNumber ? setFirstNumber(parseFloat(calculation)) : setSecondNumber(parseFloat(calculation)));
    }, [calculation, bIsFirstNumber]);

    function numberPressed(number)
    {
        if(number === "+" || number === "-" || number === "/" || number === "*")
        {
            if(result)
            {
                setFirstNumber(result);
                setCurrentOperation(number);
                setbIsFirstNumber(false);
                setCalculation("");
                setResult("");
            }
            else
            {
                setCurrentOperation(number);
                setbIsFirstNumber(false);
                setCalculation("");
            }
            return;
        }
        if(number === "ac")
        {
            resetCalculator();
            return;
        }
        if(number === "c")
        {                
            clearLastInput();
            return;
        }
        if(number === "=")
        {
            calculateResult();
            return;
        }
        else
        {
            if(result && secondNumber)
            {
                resetCalculator();
            }
            setCalculation(prevState => prevState + number);
        }
    }

    function calculateResult()
    {
        switch(currentOperation)
        {
            case "+":
                if(result)
                {
                    setResult(prevState => prevState + secondNumber);
                }
                else
                {
                    setResult(firstNumber + secondNumber);
                }
                break;
            case "-":
                if(result)
                {
                    setResult(prevState => prevState - secondNumber);
                }
                else
                {
                    setResult(firstNumber - secondNumber);
                }
                break;
            case "/":
                if(result)
                {
                    setResult(prevState => prevState / secondNumber);
                }
                else
                {
                    setResult((firstNumber / secondNumber).toFixed(3));
                }
                break;
            case "*":
                if(result)
                {
                    setResult(prevState => prevState * secondNumber);
                }
                else
                {
                    setResult(firstNumber * secondNumber);
                }
                break;
            default:
                break;
        }
    }

    function clearLastInput(){
        if(bIsFirstNumber)
        {
            setFirstNumber("");
            setCalculation("");
        }
        else
        {
            setSecondNumber("");
            setCalculation(""); 
            setResult("");
        }
    }
    
    function resetCalculator()
    {
        setFirstNumber("");
        setSecondNumber("");
        setCalculation("");
        setResult("");
        setCurrentOperation();
        setbIsFirstNumber(true);
    }

    function createDigits()
    {
        const digits = [];
        for (let i = 1; i < 10; i++)
        {
            digits.push(<CalculatorNumber number={i.toString()} key={i} numberPressed={numberPressed}/>);
        }
        return digits;
    }

    let display = "";
    if(!firstNumber)
    {
        display = 0;
    }
    if(firstNumber && !currentOperation)
    {
        display = firstNumber;
    }
    if(currentOperation)
    {
        display = currentOperation;
    }
    if(secondNumber)
    {
        display = secondNumber;
    }
    if(result)
    {
        display = result;
    }
    if(result === 0)
    {
        display = 0;
    }

    let devInfo;
    let todo;
    // if(bDebuggingMode)
    // {
    //     devInfo = (
    //     <div className="devInfo">
    //         First Number: {firstNumber} Second Number: {secondNumber} Result: {result}
    //     </div>
    //     );
    //     todo = (
    //     <ul className="devInfo">
    //         Todo:
    //         <li>Add in History</li>
    //         <li>Decimals can be pressed twice resulting in error</li>
    //         <li>Rounding to certain number limits</li>
    //         <li>Pressing "=" Multiple times should change FirstNumber to result</li>
    //     </ul>
    //     );
    // }
    

   return(
<SmallWindow title="Bucci Calculator" className={CSS.calculator} bCanBeMaximized="false" >
    <h1>Hello</h1>
    {devInfo}
    <div className={CSS.display}>
        {display}
    </div>
    <div className={CSS.buttons}>
        <div className={CSS.digits}>
            {createDigits()}
            <CalculatorNumber number={"0"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"."} numberPressed={numberPressed}/>
        </div> 
        <div className={CSS.operators}>
            <CalculatorNumber number={"c"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"ac"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"+"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"-"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"*"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"/"} numberPressed={numberPressed}/>
            <CalculatorNumber number={"="} numberPressed={numberPressed}/>
        </div>
    </div>
{todo}
</SmallWindow>
);}

export default Calculator;