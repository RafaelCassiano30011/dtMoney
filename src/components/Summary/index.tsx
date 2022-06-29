import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outecomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionContext";

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const calculeValuePositive = () => {
    let value = 0;

    transactions.find((item) => {
      if (item.type === "deposity") value += item.amount;

      console.log(value);
    });

    return value;
  };

  const valuePositive = calculeValuePositive();

  const calculeValueNegative = () => {
    let value = 0;

    transactions.find((item) => {
      if (item.type === "withdraw") value += item.amount;
    });

    return value;
  };

  const valueNegative = calculeValueNegative();

  const valueTotal = valuePositive - valueNegative;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valuePositive)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outecomeImg} alt="Saidas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valueNegative)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {valueTotal < 0
            ? 0
            : new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(valueTotal)}
        </strong>
      </div>
    </Container>
  );
};
