import * as React from 'react'
import * as cn from 'classnames'
import { Link, ExternalLink, Icons } from 'ak.gg/components'
import { Platform, SocialMediaLinks } from 'ak.gg/components/social-media'
import { routes, Route, routeText } from 'ak.gg/routes'
import './links.scss'

type External = 'SauceLabs'
type LinkTypes = Route | Platform | External

interface LinkProps {
  to?: string
  icon?: boolean
}

export const Links: {
  [key in LinkTypes]: React.FC<LinkProps>
} = {
  SoundCloud: SocialMediaLinks.SoundCloud,
  Twitter: SocialMediaLinks.Twitter,
  Instagram: SocialMediaLinks.Instagram,
  GitHub: SocialMediaLinks.GitHub,
  DevTo: SocialMediaLinks.DevTo,
  home: ({ children }) => (
    <Link className="link-home" to={routes.home}>
      {children || routeText.home}
    </Link>
  ),
  blog: ({ children }) => (
    <Link className="link-blog" to={routes.blog}>
      {children || routeText.blog}
    </Link>
  ),
  cs: ({ children }) => (
    <Link className="link-cs" to={routes.cs}>
      {children || routeText.cs}
    </Link>
  ),
  code: ({ children }) => (
    <Link className="link-code" to={routes.code}>
      {children || routeText.code}
    </Link>
  ),
  SauceLabs: ({ children = 'SauceLabs', icon }) => (
    <ExternalLink
      className={cn(icon && 'link-icon', 'link-saucelabs')}
      to="https://saucelabs.com"
    >
      {icon ? (
        <>
          <Icons.SauceLabs /> <span>{children}</span>
        </>
      ) : (
        children
      )}
    </ExternalLink>
  ),
}
