const vowels = { a: true, e: true, o: true, i: true, u: true, y: true }

const getTimes = (n) => {
  return 2 ** (n - 1)
}

function talkingAttendance(classList = []) {
  let res = 0
  classList.forEach(name => {
    res+=5
    let count = 0
    for (let index = 0; index < name.length; index++) {
      const str = name[index].toLowerCase();
      if (vowels[str]) {
        if (count > 0) {
          res += getTimes(count)
        }
        count = 0
        continue
      }
      count++
    }
    if (count > 0) {
      res += getTimes(count)
      count = 0
    }
  })
  console.log('res ', res);
  return res
}

talkingAttendance([
  'Ashley',
  'Robert',
  'Miles',
  'Archibald',
  'Taylor',
  'Vanessa',
  'Isaac',
]);

talkingAttendance([
  'Chruschtschov',
  'Hristo',
  'Nguyen',
  'Dmitry',
  'Madchen',
  'Fujiyama',
  'Connor',
]);