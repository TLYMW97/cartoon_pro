import dateFormat from './dateFormat';

export default function currentDate() {
  let dateList = [];
  const num = 24 * 3600 * 1000;
  for (let i = 0; i < 7; i++) {
    let currentDate = new Date();
    let date = new Date(currentDate - i * num);
    const localDate = dateFormat(date.toLocaleDateString());
    let weekDay;
    if (i === 0) {
      weekDay = '今天';
    } else if (i === 1) {
      weekDay = '昨天';
    } else {
      weekDay = week[date.getDay()];
    }
    dateList.push({ weekDay, localDate });
  }
  return dateList;
}
const week = {
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
  0: '星期日'
};
