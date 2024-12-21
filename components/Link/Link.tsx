// Module imports
import NextLink from 'next/link'
import type {ReactNode} from "react";

// Local imports
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'

interface LinkProps {
    children: ReactNode;
    className?: string;
    href: string;
    title?: string;
    onClick?: () => void;
}

/**
 * Renders a link.
 *
 * @component
 */
export function Link(props: LinkProps) {
    const {
        children,
        className = '',
        href,
        onClick = undefined,
        title = '',
    } = props

    if ((href.startsWith('/')) || (href.startsWith('#'))) {
        return (
            <NextLink
                title={title}
                onClick={onClick}
                className={className}
                href={href}>
                {children}
            </NextLink>
        )
    }

    return (
        <ExternalLink
            title={title}
            className={className}
            href={href}>
            {children}
        </ExternalLink>
    )
}