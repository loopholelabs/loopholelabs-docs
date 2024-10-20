// Module imports
import React from "react";

interface ExternalLinkProps {
    children: React.ReactNode,
    className?: string,
    href: string,
    rel?: string,
    title?: string,
}

/**
 * Renders a link to an external website.
 *
 * @component
 */
export function ExternalLink(props: ExternalLinkProps) {
    const {
        children,
        className = '',
        href,
        rel = '',
        title = '',
    } = props

    return (
        // eslint-disable-next-line react/forbid-elements
        <a
            {...props}
            title={title}
            className={className}
            href={href}
            rel={`noopener noreferrer ${rel}`}
            target={'_blank'}>
            {children}
        </a>
    )
}
