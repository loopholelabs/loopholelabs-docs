'use client';

import {useDocsSearch} from 'fumadocs-core/search/client';
import {type ReactNode, type ReactElement, type ButtonHTMLAttributes, useEffect, useState, useContext} from 'react';
import {useOnChange} from 'fumadocs-core/utils/use-on-change';
import {SearchDialog, type SharedProps} from 'fumadocs-ui/components/dialog/search';
import {SearchIcon} from "lucide-react";
import {cn} from '@/lib/cn';
import {buttonVariants} from '@/lib/variants';

import { type TagItem, TagsList} from '@/components/Search/TagList';

import {SearchContext} from "@/context/search";

export interface CustomSearchDialogProps extends SharedProps {
    defaultTag?: string;
    tags?: TagItem[];
    api?: string;
    delayMs?: number;
    footer?: ReactNode;
}

export function SearchToggle(props: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement {
    // @ts-ignore
    const {setSearchOpen} = useContext(SearchContext);
    return (
        <>
            <button type="button"
                    className={cn('md:hidden', buttonVariants({size: 'icon', color: 'ghost', className: props.className}))}
                    data-search="" aria-label="Open Search"
                    onClick={() => {
                        setSearchOpen(true);
                    }}>
                <SearchIcon/>
            </button>
            <button type="button" data-search-full="" {...props} className={cn('items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground hover:border-transparent hidden md:inline-flex', props.className)}
                    onClick={() => {
                        setSearchOpen(true);
                    }}>
                <SearchIcon className="ms-1 size-4"/>
                Search
                <div className="ms-auto inline-flex gap-0.5">
                    <kbd className="rounded-md border bg-fd-background px-1.5 pointer-events-none h-5 select-none items-center gap-1 text-[12px] font-medium flex" >
                        <span className="text-sm -mb-[0.5px]">⌘</span>K
                    </kbd>
                </div>
            </button>
        </>
    );
}

export default function CustomSearchDialog({defaultTag, tags, api, delayMs, ...props}: CustomSearchDialogProps): ReactElement {
    const [tag, setTag] = useState(defaultTag);
    const {search, setSearch, query} = useDocsSearch({type: 'fetch', api: api}, undefined, tag, delayMs);

    // @ts-ignore
    const {searchOpen, setSearchOpen} = useContext(SearchContext);

    useEffect(() => {
        if (props.open !== searchOpen) {
            setSearchOpen(props.open);
        }
    }, [props.open]);

    useEffect(() => {
        if (props.open !== searchOpen) {
            props.onOpenChange(searchOpen);
        }
    }, [searchOpen]);

    useOnChange(defaultTag, (v) => {
        setTag(v);
    });

    return (
        <SearchDialog
            search={search}
            onSearchChange={setSearch}
            isLoading={query.isLoading}
            results={query.data ?? []}
            {...props}
            open={searchOpen}
            footer={
                tags ? (
                    <>
                        <TagsList tag={tag} onTagChange={setTag} items={tags}/>
                        {props.footer}
                    </>
                ) : (
                    props.footer
                )
            }
        />
    );
}