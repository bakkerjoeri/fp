export function compose(...functions) {
    return functions.reduce((composedFunction, currentFunction) => {
        return (value) => {
            return composedFunction(currentFunction(value));
        };
    }, (value) => value);
}
