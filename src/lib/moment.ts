import Moment from "moment";

export const moment = (date: string) => {
  return Moment(date).locale("pt-BR").format("lll");
};
