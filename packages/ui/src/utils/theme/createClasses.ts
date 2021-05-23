// import { CSSObject, SerializedStyles, useTheme, Theme } from "@emotion/react";
// import { css } from "@emotion/css";
// type RenderClasses = (theme: Theme) => CSSObject;

// /**
//  * Obtain the parameters of a function type in a tuple
//  */
// type Parameters<T extends RenderClasses> = T extends (...args: infer P) => any
//   ? P
//   : never;

// /**
//  * Obtain the return type of a function type
//  */
// type ReturnType<
//   T extends (...args: any[]) => Record<keyof T, SerializedStyles>
// > = T extends (...args: any[]) => infer R ? R : any;

// function logDuration<T extends (...args: any[]) => any>(
//   func: T
// ): (...funcArgs: Parameters<T>) => ReturnType<T> {
//   const funcName = func.name;

//   // Return a new function that tracks how long the original took
//   return (...args: Parameters<T>): ReturnType<T> => {
//     console.time(funcName);
//     const results = func(...args);
//     console.timeEnd(funcName);
//     return results;
//   };
// }
// logDuration(() => 128);

// const makeStyles = <T extends RenderClasses>(
//   renderClasses: RenderClasses
// ): (() => Record<keyof T, SerializedStyles>) => {
//   return (): ReturnType<T> => {
//     const theme = useTheme();
//     const pureStyles = renderClasses(theme);
//     let classes: Record<keyof T, string> = {};
//     for (const [key, value] of Object.entries(pureStyles)) {
//       classes[key] = css(value);
//     }
//     return classes;
//   };
// };

// export default makeStyles;
