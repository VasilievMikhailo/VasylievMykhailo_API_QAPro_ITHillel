function checkProbabilityTheory(count) {
    let pairNumders = 0;
    let unpairedNumders = 0;
  
    for (let i = 0; i < count; i++) {
        const min = 100;
        const max = 1000;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (randomNum % 2 === 0) {
        pairNumders++;
      } else {
        unpairedNumders++;
      }
    };

    let ratioPercent = 0;
    if (unpairedNumders !== 0) {
      ratioPercent = ((pairNumders / unpairedNumders) * 100).toFixed(2);
    } else {
      ratioPercent = 'Не має непарних чисел!';
    };
  
    const pairNumdersPercent = ((pairNumders / count) * 100).toFixed(2);
    const unpairedNumdersPercent = ((unpairedNumders / count) * 100).toFixed(2);
  
    console.log('Кількість згенерованих чисел:', count);
    console.log('Парних чисел:', pairNumders);
    console.log('Непарних чисел:', unpairedNumders);
    console.log('Відсоток парних до непарних:', ratioPercent);
    console.log(`Парні: ${pairNumdersPercent}%`);
    console.log(`Непарні: ${unpairedNumdersPercent}%`);
  }
  
  checkProbabilityTheory(1000);