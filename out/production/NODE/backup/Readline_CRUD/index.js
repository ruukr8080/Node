const sc = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout,
});
const opts = [
  {key: 0, value: `START`},
  {key: 1, value: `CREATE`},
  {key: 2, value: `FIND`},
  {key: 3, value: `EXIT`},
];
const menu = opts.slice(1, 4).map(opt => String(`[${opt.key}] : ${opt.value}`)).join('\n');

function psStart() {
  console.log(`====${opts[0].value}====\n${menu}`);

  try {
    sc.question((input) => {
      const select = parseInt(input);
      if (![1, 2, 3].includes(select)) {
        console.log(`only 1,2,3`)


      }
    })
  } catch (e) {
    console.error(e.message);
  }
}


function main() {
  const ok = psStart();
  while (true) {
    switch (ok) {
      case 1:
        console.log(`one`)
        break;
      case 2:
        console.log(`2`)
        break;
      case 3:
        console.log(`3`)
        break;
    }
  }
}

main();
