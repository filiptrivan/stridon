import React, { ReactNode } from 'react';
import { parseISO, format } from 'date-fns';
import { srLatn } from 'date-fns/locale';

interface Props {
  dateString: ReactNode;
}

const DateFormatter = ({ dateString }: Props) => {
  const date = dateString ? parseISO(dateString.toString()) : null;
  const formattedDate = date ? format(date, 'dd. MMMM yyyy.', { locale: srLatn }) : '';
  return <time dateTime={formattedDate}>{formattedDate}</time>;
};

export default DateFormatter;

