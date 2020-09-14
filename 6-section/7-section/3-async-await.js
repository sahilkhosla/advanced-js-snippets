const longGET = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.65 || true) { // remove true for error
        console.log(`GET: ${num}`);
        resolve(num)
      } else {
        console.log(`Error in GET: ${num}`);
        reject(num);
      }
    }, 1000);
  })
}

'---------------------'
// setup
'---------------------'

const executeGets = () => {
  let one = longGET(1);
  let two = longGET(++one);
  console.log('done with 1 and 2');
}

executeGets();

'---------------------'
// async/await
'---------------------'

const executeGets = async () => {
  let one = await longGET(1);
  let two = await longGET(++one);
  console.log('done with 1 and 2');
}

executeGets();

'---------------------'
// async/await - error handling
'---------------------'

const executeGets = async () => {
  try {
    let one = await longGET(1);
    let two = await longGET(++one);
    console.log('done with 1 and 2');
  } catch (err) {
    console.log(`error in ${err}`);
  }
}

executeGets();

