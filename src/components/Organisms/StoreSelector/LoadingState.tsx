/* global JSX */
import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'

export function LoadingState(): JSX.Element {
  return (
    <>
      {[1, 2].map((i) => (
        <div key={i} style={{ marginTop: '24px' }} data-test="store-selector-loading-state">
          <SkeletonBlockItem width="50%" height="25px" />
          <SkeletonBlockItem width="80%" height="50px" marginTop="16px" />
          <SkeletonBlockItem width="100%" height="1px" marginTop="16px" />
        </div>
      ))}
    </>
  )
}
