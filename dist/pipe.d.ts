import { UnaryFunction } from './UnaryFunction.js';
export declare function pipe<ValueType>(...functions: UnaryFunction<ValueType>[]): UnaryFunction<ValueType>;
