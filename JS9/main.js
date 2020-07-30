let time = true;
function wakeUp(wakeUpInTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wakeUpInTime) {
          time = true;
          console.log('You have plenty of time');
          resolve(time)
      } else {
          time = false;
          reject('You overslept')
      }
    }, 1000)
  })
}

function brushTeeth(wakeUpInTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time) {
        console.log('You have time to brush teeth')
        resolve()
      } else {
        reject('You don\'t have time to brush your teeth')
      }
    }, 1200)
  })
}

function breakfast(teethBrushed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (teethBrushed) {
                console.log('You had a breakfast')
                resolve()
            } else {
                reject('You did not brush your teeth, no breakfast for you')
            }
        }, 1900)
    })
}

// function goToWork ()


wakeUp(true)
.then(time => {
    return brushTeeth(false);
})
.then(value => {
    return breakfast(false)
}).then(value => {
    console.log(value);
}).catch(err => {
    console.log('err',err)
})