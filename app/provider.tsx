'use client';

import {RootProvider} from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';
import {type ReactNode, useState} from 'react';

import { SearchContext } from '@/context/search';

const CustomSearchDialog = dynamic(() => import('@/components/Search/Search'));

export function Provider({children}: { children: ReactNode }) {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        // @ts-ignore
        <SearchContext.Provider value={{searchOpen: searchOpen, setSearchOpen: setSearchOpen}}>
            <RootProvider search={{SearchDialog: CustomSearchDialog, options: {
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
                }}} theme={{enabled: false}}>
                {children}
            </RootProvider>
        </SearchContext.Provider>
    );
}