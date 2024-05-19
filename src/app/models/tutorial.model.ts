export class Tutorial {
  id?: any;
  title?: string;
  recipeToday?: number;
  balancePreviousMonth?: number;
  totalRecipeToday?: number;

  operationTreasuryAnterior?: number;
  operationTreasuryToday?: number;
  totalOperationTreasury?: number;

  operationPreviousRegulation?: number;
  operationRegulationToday?: number;
  totalOperationRegulation?: number;

  totalExpenses?: number;

  finalBalanceToday?: number;

  postCurrentAccount?: number;
  creditExpected?: number;
  rateExpected?: number;
  finalPostCurrentAccount?: number;

  otherValues?: number;
  statesRepartition?: number;

  totalCash?: number;

  moneySpecies?: number;

  moneyOnCashier?: number;

  organismId?: number;
  description?: string;
  published?: boolean;
}
