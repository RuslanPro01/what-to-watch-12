import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

type TimeTagProps = {
  time: string;
};
export function TimeTag({time}: TimeTagProps): JSX.Element | null {
  if (!time) {
    return null;
  }

  const dateTime = dayjs(time);
  return <time className="review__date" dateTime={dateTime.format('YYYY-MM-DD')}>{dateTime.format('LL')}</time>;
}
