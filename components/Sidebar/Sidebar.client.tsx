'use client';

import {type ButtonHTMLAttributes, type ReactElement, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {SidebarTrigger} from 'fumadocs-core/sidebar';
import {MenuIcon, XIcon} from "lucide-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

import {cn} from "@/lib/cn";
import {buttonVariants} from "@/lib/variants";
import {useAttributeObserver} from "@/lib/hooks";
import {Link} from "@/components/Link/Link";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";

export function SidebarToggle(props: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const sidebar = document.getElementById('nd-sidebar');
        if (sidebar) {
            const isOpen = sidebar.getAttribute('data-open') === 'true';
            setOpen(isOpen);
        }
    }, [pathname]);
    useAttributeObserver('nd-sidebar', 'data-open', (newValue) => {
        setOpen(newValue == "true");
    });
    return (
        <SidebarTrigger>
            <div className={cn(buttonVariants({color: 'ghost', size: 'icon'}), props.className)}>
                {open ? <XIcon/> : <MenuIcon/>}
            </div>
        </SidebarTrigger>
    );
}

export function SidebarFooter() {
    return (
        <div className={'flex items-center justify-end border-t border-fd-border md:border-transparent'}>
            <div className={'pr-4'}>
                <ThemeToggle/>
            </div>
            <div className={`flex-row items-center border-l px-4 md:hidden space-x-3`}>
                <Link href="https://loopholelabs.io/discord"
                      className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-accent-foreground dark:text-white rounded-md transition duration-300">
                    <FontAwesomeIcon icon={faDiscord} className="w-5 h-5"/>
                </Link>
                <Link href="https://github.com/loopholelabs"
                      className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-accent-foreground dark:text-white rounded-md transition duration-300">
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/>
                </Link>
            </div>
        </div>
    )
}