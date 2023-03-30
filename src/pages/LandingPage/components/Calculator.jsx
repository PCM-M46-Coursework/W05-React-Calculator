import './Calculator.css';

import { useState } from 'react';
import * as maths from "mathjs";

import { Display } from './Display';
import { Button } from './Button';

import buttons from '../data/buttons.jsonc';
import { useEventListener } from 'usehooks-ts';

export function Calculator()
{
    const [state, setState] = useState({
        expression: '',
        result: ''
    });

    /**
     * Tries to evaluate an expression, using the `evaluate()` method from `mathjs`.
     * @param {String} expression - The expression to evaluate.
     * @returns A string representation of the result of the evaluation; or an empty string, if the evaluation fails.
     */
    function tryEvaluate(expression)
    {
        // Replace π symbol with `pi`.
        expression = expression.replace('π', 'pi');

        // Replayer ÷ symbole with `/`.
        expression = expression.replace('÷', '/');

        // Replace square root symbols with sqrt() expressions.
        expression = expression.replace(/(\d*)√(\d+)/g, (_, root, radicand) =>
        {
            if (root === '')
            {
                return `sqrt(${radicand})`;
            } else
            {
                return `${root}*sqrt(${radicand})`;
            }
        });

        try
        {
            const result = maths.evaluate(expression);
            return !expression ? '' : maths.format(result, 13);
        } catch {
            console.log("Cannot evaluate: ", expression);
            return '';
        }
    }

    /**
     * Adds an operand, or an operator, to the current expression.
     * @param {String} op - The operand, or operator, to concatenate with the current expression.
     */
    function handleOpClick(op)
    {
        const newExpression = state.expression += op.replace('x', '*');
        setState({
            expression: newExpression,
            result: tryEvaluate(newExpression)
        });
    }

    /**
     * Determines whether or not to add an opening, or closing bracket to the expression.
     * @param {String} expression - The current expression.
     * @returns {String} - Returns either a `(` or `)` based on the following sequential rules:
     *      If the last character of the string is an open bracket, return another open bracket.
     *      If the last character of the string is not a digit (0-9), return another open bracket.
     *      If the string contains more open brackets than closed brackets, return a closed bracket.
     *      Otherwise, return another open bracket.
     */
    function getBracket(expression)
    {
        const lastChar = expression.at(-1);
        if (lastChar === '(' || isNaN(lastChar))
            return '(';

        const openBrackets = expression.split('(').length - 1;
        const closedBrackets = expression.split(')').length - 1;
        return (openBrackets > closedBrackets) ? ')' : '(';
    }

    /**
     * Adds an opening, or closing bracket, to the expression.
     */
    function handleBracketButtonClick()
    {
        const newExpression = state.expression += getBracket(state.expression);
        setState({
            expression: newExpression,
            result: tryEvaluate(newExpression)
        });
    }

    /**
     * Finalises the current expression, setting the result as the beginning point of the next.
     */
    function handleEqualsButtonClick()
    {
        if (state.result.length === 0)
            return;
        setState({
            expression: state.result,
            result: tryEvaluate(state.expression)
        });
    }

    /**
     * Removes the most recently added operand, or operator, from the expression.
     */
    function handleBackButtonClick()
    {
        const newExpression = state.expression.toString().slice(0, -1);
        setState({
            expression: newExpression,
            result: tryEvaluate(newExpression)
        });
    }

    /**
     * Resets the current expression.
     */
    function handleClearButtonClick()
    {
        setState({
            expression: '',
            result: ''
        });
    }

    /**
     * Facade switchboard, called when a button is pressed on the calculator.
     * @param {String} type - The type of button being pressed.
     * @param {String} term - The term being pressed, be it an operand, or an operator.
     */
    function handleButtonClick(type, term)
    {
        switch (type)
        {
            case 'operand':
            case 'operator':
                handleOpClick(term);
                break;
            case 'brackets':
                handleBracketButtonClick();
                break;
            case 'clear':
                handleClearButtonClick();
                break;
            case 'back':
                handleBackButtonClick();
                break;
            case 'equals':
                handleEqualsButtonClick();
                break;
            default:
                handleClearButtonClick();
        }
    }

    /**
     * Listens to keyboard events on the page, and 
     */
    useEventListener("keyup", function ({ key }) {
        switch (key) {
            case 'Enter':
                handleEqualsButtonClick();
            return;
            case 'Backspace':
                handleBackButtonClick();
            return;
            case 'Delete':
                handleClearButtonClick();
            return;
            default:
                const validKeys = buttons.filter(b => b.label === key);
                if (validKeys.length !== 1) return;
                const btn = validKeys[0];
                handleButtonClick(btn.type, btn.label);
        }
    });

    // Build the page.
    return (
        <div className="calculator-body">
            <Display
                expression={state.expression ?? '0'}
                result={state.result ?? ''} />

            {buttons.map((btn, index) => <Button
                key={index}
                type={btn.type}
                label={btn.label}
                onClick={handleButtonClick} />)}

        </div>
    );
}