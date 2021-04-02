import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
  grid-row: 2;
  grid-column-start: 2;
  grid-column-end: 4;
  align-self: start;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const activeNavItem = css`
  text-decoration: underline;
  font-weight: 600;
  color: rgb(22, 160, 133);
`;

export const SidebarNavItem = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgb(235, 235, 235);
  &:last-child {
    border: none;
    margin: 0;
  }

  ${(props) => props.active && activeNavItem}
`;
