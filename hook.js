export const resolve= async (specifier, context, nextResolve) => {
  return nextResolve(specifier, {
    ...context,
    conditions: ["xxx", ...context.conditions],
  });
};
