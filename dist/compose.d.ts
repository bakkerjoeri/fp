import { UnaryFunction } from './UnaryFunction.js';
export declare function compose<ValueType>(...functions: UnaryFunction<ValueType>[]): UnaryFunction<ValueType>;
