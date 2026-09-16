export interface Contract {
  id: number;
  name: string;
  type: string;
  perPayment: number;
  termLength: number;
  availableCredit: number;
  payment: number;
  checked: boolean;
}