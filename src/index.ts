import main from "./main";

const command = Bun.argv[2];
const result = main(command);
console.log(result);
