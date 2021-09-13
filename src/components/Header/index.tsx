import * as S from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Container>
      <section className="container-center">
        <img src={logo} alt="" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </section>
    </S.Container>
  );
};
