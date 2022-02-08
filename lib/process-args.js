export const processArgs = (argv = []) =>
  argv
    .slice(2)
    .filter((arg) => /\w=\S/.test(arg))
    .map((arg) => (Number.isNaN(Number(arg)) ? arg : Number(arg)))
    .map((arg) => arg.split('='))
    .reduce((all, next) => ({ ...all, [next[0]]: next[1] }), {});
