import { styled } from '@/styles/styled'
import { BoxDimensions, Elevation, Theme } from '@/types'

// Utility function to calc the values of margin and padding
export const getBoxDimension = (theme: Theme, boxDimensions: BoxDimensions = ''): BoxDimensions => {
  if (boxDimensions && boxDimensions.split) {
    const result = boxDimensions.split(' ').map((m) => theme.spacing.base[m] || m)

    if (result.length) {
      return result.join(' ')
    }
  }
  return boxDimensions
}

export const StyledRangeInputs = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
`

export const StyledErrorWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base.md};
`

export const StyledRangeSliderWrapper = styled.div<{
  margin: BoxDimensions
  padding: BoxDimensions
  buttonsElevation: Elevation
}>`
  margin: ${({ margin, theme }) => getBoxDimension(theme, margin)};
  padding: ${({ padding, theme }) => getBoxDimension(theme, padding)};

  .DefaultProgressBar_progressBar {
    background-color: ${({ theme }) => theme.color.black};
    position: absolute;
  }

  .DefaultProgressBar_background__horizontal {
    height: ${({ theme }) => theme.spacing.base.xs};
    top: 0;
  }

  .DefaultHandle_handle {
    width: 0;
    height: ${({ theme }) => theme.spacing.base.lg};
    padding: 0;
    cursor: pointer;
    outline: none;
    border: 0 !important;
    z-index: 2;
    top: -12px;

    ::before {
      content: ' ';
      width: ${({ theme }) => theme.spacing.base.lg};
      height: ${({ theme }) => theme.spacing.base.lg};
      display: block;
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.dimension.elevationLevel3};
      background-color: ${({ theme }) => theme.color.primary};
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-50%);
    }
  }
  .DefaultHandle_handle__disabled {
    opacity: 0.5;
  }
  .DefaultBackground {
    background-color: ${({ theme }) => theme.color.grey2};
    height: ${({ theme }) => theme.spacing.base.xs};
    width: 100%;
    border-radius: ${({ theme }) => theme.dimension.borderRadius1};
    position: relative;
  }

  .DefaultBackground_background__horizontal {
    height: ${({ theme }) => theme.spacing.base.xs};
    width: 100%;
    left: 0;
  }

  .handleContainer {
    height: ${({ theme }) => theme.spacing.base.xs};
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
  }

  .rheostat {
    position: relative;
    overflow: visible;
    width: ${({ theme }) => `calc(100% - ${theme.spacing.base.lg})`};
    left: ${({ theme }) => theme.spacing.base.sm};
    touch-action: none;
    user-select: none;
  }

  .rheostat_background {
    background-color: ${({ theme }) => theme.color.grey1};
    border: 1px solid ${({ theme }) => theme.color.grey2};
    top: 0;
    left: 0;
    position: relative;
  }

  .rheostat_background__horizontal {
    height: ${({ theme }) => theme.spacing.base.sm};
    width: 100%;
  }
`
