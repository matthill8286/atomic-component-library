import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { OtherRightArrow, OtherHomeVs2Outlined } from '@matthill8286/atomic-icon-library'
import { BreadcrumbPath, BreadcrumbProps } from './Breadcrumb.interface'
import { StyledBreadcrumb, StyledHomeLink, StyledLi, StyledUl } from './Breadcrumb.styled'

const _renderSEOMeta = (paths: BreadcrumbPath[], homeLink: string): JSX.Element => {
  const breadcrumbSeoPaths: BreadcrumbPath[] = [...paths]

  const homeBreadcrumbPath: BreadcrumbPath = {
    name: 'home',
    link: homeLink,
  }

  breadcrumbSeoPaths.unshift(homeBreadcrumbPath)

  const meta = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbSeoPaths.map((seoPath, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seoPath.name,
      item: seoPath.link + (i === breadcrumbSeoPaths.length - 1 ? '#top' : ''),
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(meta) }} />
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  margin,
  padding,
  paths,
  loading = false,
  homeLink = '/',
  hideLastElement = false,
  textColor = 'black',
  linkColor = 'grey5',
  iconColor = 'black',
  decorationColor,
  ...otherProps
}): JSX.Element => {
  const visiblePaths = hideLastElement ? [...paths].slice(0, -1) : paths
  return (
    <>
      {_renderSEOMeta(paths, homeLink)}
      <StyledBreadcrumb
        className={className}
        margin={margin}
        padding={padding}
        isLoading={loading}
        data-test="mms-breadcrumb-v2-ul"
        data-paths-count={paths.length}
        {...otherProps}
      >
        <StyledUl>
          <StyledLi isLastButOne={false}>
            <StyledHomeLink
              aria-label="home-link"
              href={homeLink}
              iconLeft={
                <Icon height="sm" width="sm" color={iconColor}>
                  {!loading && <OtherHomeVs2Outlined />}
                </Icon>
              }
            />
          </StyledLi>
          {visiblePaths &&
            visiblePaths.map((item, index) => {
              const isLast = visiblePaths.length - 1 === index && !hideLastElement
              const isLastButOne = visiblePaths.length - 2 === index
              return (
                <StyledLi key={item.name} isLastButOne={isLastButOne}>
                  <Link
                    fontSize="sm"
                    disabled={isLast}
                    color={linkColor}
                    decorationColor={decorationColor}
                    iconLeft={<Icon color={iconColor}>{!loading && <OtherRightArrow />}</Icon>}
                    {...(item.isRouterLink ? { to: item.link } : { href: item.link })}
                  >
                    {item.name}
                  </Link>
                </StyledLi>
              )
            })}
        </StyledUl>
      </StyledBreadcrumb>
    </>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
