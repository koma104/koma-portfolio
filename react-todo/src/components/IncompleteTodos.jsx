import { styled } from "styled-components";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <SIncompleteTodos>
      <Title>未完了のTODO</Title>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <SListRow>
              <STodoItem>{todo}</STodoItem>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </SListRow>
          </li>
        ))}
      </ul>
    </SIncompleteTodos>
  );
};

const STodoItem = styled.p`
  margin-inline-end: 8px;
`;

const SListRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

const SIncompleteTodos = styled.div`
  padding: 16px;
  background-color: var(--back-color);
  border-radius: 8px;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px rgba(255, 255, 255, 1), 0px 0px 4px rgba(255, 255, 255, 0.2);
`;

const Title = styled.p`
  margin-top: 0;
  text-align: center;
  font-weight: bold;
  color: #666;

  & + ul {
    margin-block-start: 12px;
    padding-inline-start: 36px;

    li:not(:first-child) {
      margin-block-start: 16px;
    }

    li::marker {
      color: #0171E3;
    }
  }
`;
