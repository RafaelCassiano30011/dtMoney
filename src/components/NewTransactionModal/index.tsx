import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { Container, TransactionType, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outecomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionContext";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  IsOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ IsOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState("deposity");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    if (title === "" || value === 0 || category === "") return;

    await createTransaction({
      title,
      amount: value,
      type,
      category,
    });
    setTitle("");
    setCategory("");
    setValue(0);
    setType("deposity");
    onRequestClose();
  };

  return (
    <Modal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={IsOpen} onRequestClose={onRequestClose}>
      <Container onSubmit={handleCreateNewTransaction}>
        <h1>Cadastrar transação</h1>
        <input
          placeholder="Name"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(+e.target.value);
          }}
        />

        <TransactionType>
          <RadioBox
            onClick={(e) => {
              e.preventDefault();
              setType("deposity");
            }}
            isActive={type === "deposity"}
            isColor="#33CC95"
          >
            <img src={incomeImg} alt="" />
            Entrada
          </RadioBox>
          <RadioBox
            onClick={(e) => {
              e.preventDefault();
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            isColor="#E62E4D"
          >
            <img src={outecomeImg} alt="" />
            Saida
          </RadioBox>
        </TransactionType>

        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <button type="submit">Cadastrar</button>
        <button className="react-modal-button-close" onClick={onRequestClose}>
          <img src={closeImg} alt="" />
        </button>
      </Container>
    </Modal>
  );
};
