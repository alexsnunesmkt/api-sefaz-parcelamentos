export interface GeneratePdfInstallmentRequestData {
  darInfo: {
    processNumber: string;
    date: string;
  };
  personNumber: string;
  token: string;
}