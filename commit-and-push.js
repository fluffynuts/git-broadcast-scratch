const zpad = require("zeropad");
const { ExecStepContext } = require("exec-step");
const Git = require("simple-git");

(async function main() {
  const
    ctx = new ExecStepContext(),
    now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    timestamp = `${zpad(year, 4)}-${zpad(month)}-${zpad(day)} ${zpad(hour)}:${zpad(min)}:${zpad(sec)}`,
    git = new Git("."),
    message = `:alembic: ${timestamp}`;


  await ctx.exec(`commit "${message}"`, async () => {
    await git.add(":/");
    await git.commit(message);
  })
  await ctx.exec(`push`, async () => await git.push());
})();

