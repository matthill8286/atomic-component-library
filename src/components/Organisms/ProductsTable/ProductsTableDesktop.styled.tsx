import { styled } from '@/styles/styled'

export const StyledDesktopTable = styled.div`
  overflow: auto;
  thead {
    background: ${({ theme }) => theme.color.grey1};
    a:hover {
      ${({ theme }) => theme.color.selected}
    }
    th {
      vertical-align: baseline;
    }
  }
  tbody {
    td {
      text-align: left;
    }
    tr:last-child:hover {
      background-color: white;
    }
  }
`
export const StyledA2CButton = styled
export const EmptyCell = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  width: 100%;
`
