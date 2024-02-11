/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/


let union: string | number;
// Приклад
union = 'Hello';
union = '5';


let literal: 'enable' | 'disable';
// Приклад
literal = 'enable';
literal = 'disable';

