export function pipe(...functions) {
    return functions.reduce((pipedFunction, currentFunction) => {
        return (value) => {
            return currentFunction(pipedFunction(value));
        };
    }, (value) => value);
}
