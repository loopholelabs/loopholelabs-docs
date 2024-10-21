'use client';

import {type ButtonHTMLAttributes, type ReactElement, useState} from "react";
import {SidebarTrigger} from 'fumadocs-core/sidebar';
import {MenuIcon, XIcon} from "lucide-react";

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/lib/variants";
import {useAttributeObserver} from "@/lib/mutation";

export function SidebarToggle(props: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement {
    const [open, setOpen] = useState(false);
    useAttributeObserver('nd-sidebar', 'data-open', (newValue) => {
        setOpen(newValue == "true");
    });
    return (
        <SidebarTrigger>
            <div className={cn(buttonVariants({color: 'ghost', size: 'icon'}), props.className)}>
                { open ? <XIcon /> : <MenuIcon />}
            </div>
        </SidebarTrigger>
    );
}