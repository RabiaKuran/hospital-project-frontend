import { format } from "date-fns";
import { tr } from "date-fns/locale";

const DateHelper = {
  getCurrentDate: () => {
    return format(new Date(), "dd MMMM yyyy", { locale: tr });
  },
};

export default DateHelper;
