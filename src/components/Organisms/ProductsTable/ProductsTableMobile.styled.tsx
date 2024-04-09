import { styled } from '@/styles/styled'

// to support all browsers we build two tables
// one shows the first column which is fixed
// the other shows the scrollable rest
export const StyledMobileTable = styled.div`
  position: relative;
  overflow: hidden;
  background: white;
`
export const StyledFixedTable = styled.div`
  position: absolute;
  th {
    background: white;
    position: relative;
    z-index: 1;
    /* Box Shadow after first column */
    ::after {
      content: '';
      position: absolute;
      display: block;
      z-index: 1;
      right: -10px;
      top: 0;
      height: 100%;
      width: 10px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.08) 0, transparent 100%);
    }
  }
  td,
  thead th {
    visibility: hidden;
  }
  thead th:first-child {
    visibility: visible;
  }
`
export const StyledScrollTable = styled.div`
  overflow-x: auto;
  thead {
    background: ${({ theme }) => theme.color.grey1};
  }
  tbody td {
    position: relative;
  }
  tbody th {
    visibility: hidden;
  }
`
