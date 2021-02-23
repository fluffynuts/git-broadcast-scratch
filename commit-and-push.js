const zpad = require("zeropad");

(async function main() {
  const
    now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    timestamp = `${zpad(year, 4)}-${zpad(month)}-${zpad(day)} ${zpad(hour)}:${zpad(min)}:${zpad(sec)}`,
    Git = require("simple-git"),
    git = new Git(".");

  await git.add(":/");
  await git.commit(`:alembic: ${timestamp}`);
  await git.push();
})();

