import * as React from 'react';

interface IDateStampProps {
  date: string;
  short?: boolean;
}

const formatDateLong = (date: string): string => {
  const [year, month, day] = date.split(/[T/-]/);
  const d = new Date(`${year}, ${month}, ${day}`);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

  return `${days[d.getDay()]}, ${months[+month - 1]} ${day}`;
};

const formatDateShort = (date: string): string => {
  const [year, month, day] = date.split(/[T/-]/);

  return `${month}/${day}/${year}`;
};

const isValid = (date: string): boolean => {
  const d = Date.parse(date);

  return isNaN(d) === false;
};

const DateStamp: React.FC<IDateStampProps> = ({ date, short = false }: IDateStampProps): React.ReactElement => {
  if (isValid(date)) {
    if (short) {
      return <>{formatDateShort(date)}</>;
    }

    return <>{formatDateLong(date)}</>;
  }

  return <></>;
};

export default DateStamp;
