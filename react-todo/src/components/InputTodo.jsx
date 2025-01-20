import { styled } from "styled-components";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <SInputTodo>
      <SInput
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <SButton onClick={onClick} disabled={disabled}>
        追加
      </SButton>
    </SInputTodo>
  );
};

const SInput = styled.input`
  margin-inline-end: 8px;
  padding-block: 8px;
  padding-inline: 16px;
  background-color: var(--back-color);
  font-size: 16px;
  color: #535d74;
  border-radius: 8px;
  border: 3px solid #f3f4f7;
  box-shadow: 2px 2px 3px rgba(55, 84, 170, 0.15),
    inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15),
    inset -7px -7px 20px rgba(255, 255, 255, 1),
    0px 0px 4px rgba(255, 255, 255, 0.2);
  outline: none;
`;

const SInputTodo = styled.div`
  padding: 16px;
  background-color: var(--back-color);
  border-radius: 8px;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px rgba(255, 255, 255, 1), 0px 0px 4px rgba(255, 255, 255, 0.2);
`;

const SButton = styled.button`
  padding-block: 8px;
  padding-inline: 20px;
  border: none;
  background-color: #ebecf0;
  border-radius: 100vmax;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px rgba(255, 255, 255, 1),
    inset 0px 0px 4px rgba(255, 255, 255, 0.2), inset 7px 7px 15px rgba(55, 84, 170, 0),
    inset -7px -7px 20px rgba(255, 255, 255, 0), 0px 0px 4px rgba(255, 255, 255, 0);
  transition: box-shadow 0.25s ease;
  color: #000;
`