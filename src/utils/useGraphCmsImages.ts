import { useInView } from 'react-intersection-observer'

export enum DocumentOutput {
  svg = 'svg',
  jpg = 'jpg',
  png = 'png',
}

export enum ImageResizeFit {
  clip = 'clip',
  crop = 'crop',
  scale = 'scale',
  max = 'max',
}

function buildTransformations(separator) {
  const args = Array.prototype.slice.call(arguments, 1)
  return args.join(separator)
}

export const getTransformedImageVersion = (
  handle?: string,
  args?: (typeof DocumentOutput)[] | (typeof ImageResizeFit)[] | string[] | undefined,
) => {
  if (args) {
    // @ts-ignore
    return `https://media.graphcms.com/${buildTransformations('/', ...args)}/${handle}`
  }

  if (handle) {
    return `https://media.graphcms.com/${handle}`
  }
}

export const useGraphCmsImages = (
  imageHandles: (string | undefined)[],
  skip = false,
  imageArguments = undefined,
): [(string | undefined)[], (node?: Element | null) => void] => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  let finalImageHandles = imageHandles

  if (!inView && !skip) {
    finalImageHandles = imageHandles.map((image) => getTransformedImageVersion(image, imageArguments))
  }

  return [finalImageHandles, ref]
}
