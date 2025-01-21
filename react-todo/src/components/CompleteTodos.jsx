import { styled } from "styled-components";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <SCompleteTodos>
      <Title>完了のTODO</Title>
      <ul>
        {completeTodos.map((todo, index) => (
          <li key={todo}>
            <SListRow>
              <STodoItem>{todo}</STodoItem>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </SListRow>
          </li>
        ))}
      </ul>
    </SCompleteTodos>
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

const SCompleteTodos = styled.div`
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
      color: #999;
    }
  }
`;
