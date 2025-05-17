import { AccountRequestData } from "@interfaces/IAccountData";
import { PersonRequestData } from "@interfaces/IPersonData";

export interface GenerateParcelData {
  installmentId: string;
  date: string;
  parcelAmount: string;
  token: string;
  numeroPessoa: string;
}