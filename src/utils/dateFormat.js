const week = {
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
  0: '星期日',
  today: '今天',
  yesterday: '昨天'
};
export const formatDate = date => {
  const symbl = '/';
  return new Date(date)
    .toLocaleString()
    .replace(new RegExp(symbl, 'g'), '-');
};
export const zeroFill = num => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};
export const getWeekDay = (index, day) => {
  if (index === 0) {
    return week.today;
  } else if (index === 1) {
    return week.yesterday;
  } else {
    return week[day];
  }
};
