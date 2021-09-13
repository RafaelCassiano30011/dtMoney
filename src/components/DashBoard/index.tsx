import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransictionsTable";

export const DashBoard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
