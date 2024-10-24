'use client';

import {RootProvider as Root} from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';
import {usePathname, useSearchParams} from "next/navigation";
import {type ReactNode, useState, useEffect} from 'react';
import {posthog} from 'posthog-js'
import {PostHogProvider, usePostHog} from 'posthog-js/react'

import {SearchContext} from '@/context/search';

const CustomSearchDialog = dynamic(() => import('@/components/Search/Search'));

export function RootProvider({children, posthogBootstrap}: { children: ReactNode, posthogBootstrap?: any }) {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <PostHog bootstrap={posthogBootstrap}>
            <PostHogPageView/>
            {/* @ts-ignore */}
            <SearchContext.Provider value={{searchOpen: searchOpen, setSearchOpen: setSearchOpen}}>
                <Root search={{
                    SearchDialog: CustomSearchDialog, options: {
                        api: '/docs/api/search',
                        defaultTag: 'architect',
                        tags: [
                            {
                                name: 'Architect',
                                value: 'architect',
                            },
                            {
                                name: 'Scale',
                                value: 'scale',
                            },
                        ],
                    }
                }} theme={{enabled: false}}>
                    {children}
                </Root>
            </SearchContext.Provider>
        </PostHog>
    );
}

function PostHog({children, bootstrap}: {children: ReactNode, bootstrap?: any}) {
    if (process.env.NODE_ENV !== 'development') {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            posthog.init(process.env.POSTHOG_KEY, {
                api_host: process.env.POSTHOG_HOST,
                person_profiles: 'always',
                capture_pageview: false,
                capture_pageleave: true,
                bootstrap: bootstrap,
            })
        }
        return <PostHogProvider client={posthog}>{children}</PostHogProvider>
    }
    return <>{children}</>
}

function PostHogPageView(): null {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthog = usePostHog();
    useEffect(() => {
        if (pathname && posthog) {
            let url = window.origin + pathname
            if (searchParams.toString()) {
                url = url + `?${searchParams.toString()}`
            }
            posthog.capture(
                '$pageview',
                {
                    '$current_url': url,
                }
            )
        }
    }, [pathname, searchParams, posthog])
    return null
}
