interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface FuelResponse {
  pertalite: number[];
  pertamax: number[];
  "pertamax-turbo": number[];
}
