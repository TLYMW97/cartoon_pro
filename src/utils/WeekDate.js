import { zeroFill, getWeekDay } from './dateFormat';

export default function weekDate() {
  let dateList = [];
  const currentDate = new Date();
  const num = 24 * 3600 * 1000;
  for (let i = 0; i < 7; i++) {
    let preDate = new Date(currentDate - i * num);
    const year = preDate.getFullYear();
    const month = zeroFill(preDate.getMonth() + 1);
    const date = zeroFill(preDate.getDate());
    const localDate = `${year}-${month}-${date}`;
    let weekDay = getWeekDay(i, preDate.getDay());
    dateList.push({ weekDay, localDate });
  }
  return dateList;
}
