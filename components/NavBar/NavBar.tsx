'use client';

// Module imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

// Local imports
import {Link} from "@/components/Link/Link";
import Img from "@/components/Img/Img";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";
import {SearchToggle} from "@/components/Search/Search";
import {SidebarToggle} from "@/components/Sidebar/Sidebar.client";

import {useScrollPosition} from "@/lib/hooks";

import LoopholeLabsLogoDark from "@/public/images/loopholelabs-logo-dark.svg";
import LoopholeLabsLogoLight from "@/public/images/loopholelabs-logo-light.svg";
import LoopholeLabsIconLight from "@/public/images/loopholelabs-icon-light.svg";

export function Links() {
    return (
        <div className={`flex-row items-center border-l h-[90%] pl-4 hidden md:flex space-x-3`}>
            <Link href="https://loopholelabs.io/discord"
                  className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-muted-foreground dark:text-fd-muted-foreground hover:text-fd-accent-foreground dark:hover:text-fd-accent-foreground rounded-md transition duration-300">
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5"/>
            </Link>
            <Link href="https://github.com/loopholelabs"
                  className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-muted-foreground dark:text-fd-muted-foreground hover:text-fd-accent-foreground dark:hover:text-fd-accent-foreground rounded-md transition duration-300">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/>
            </Link>
        </div>
    )
}

/**
 * Renders the NavBar component.
 *
 * @component
 */
export function NavBar() {
    const layoutScrollPosition = useScrollPosition('nd-docs-layout');
    const windowScrollPosition = useScrollPosition('');
    return (
        <nav className={`pt-2 fixed md:absolute top-0 z-50 w-full transition-colors bg-opacity-80 bg-fd-background backdrop-blur-md max-w-full border-b border-fd-border ${(layoutScrollPosition > 0 || windowScrollPosition > 0) ? 'md:border-fd-border' : 'md:border-transparent'}`}>
            <div className="w-full max-w-[var(--max-width)] mx-auto px-2 md:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center w-max">
                        <div id={'logo'} className={'w-full -mt-2 flex items-center justify-start space-x-2'}>
                            <Link href={'https://loopholelabs.io'} className={'w-full hidden md:block'}>
                                <Img image={LoopholeLabsLogoDark} alt="Loophole Labs logo" className={'hidden dark:block'} priority/>
                                <Img image={LoopholeLabsLogoLight} alt="Loophole Labs logo" className={'dark:hidden'} priority/>
                            </Link>
                            <Link href={'https://loopholelabs.io'} className={'w-full md:hidden'}>
                                <Img image={LoopholeLabsIconLight} alt="Loophole Labs icon" className={'h-6 w-6'} priority/>
                            </Link>
                            <span className={'md:-mb-1.5 text-[20px] md:text-[18px] font-light text-[#2C0F62] dark:text-white font-mono'}>|</span>
                            <Link href={'https://loopholelabs.io/docs/architect'}>
                                <p className={'-mb-1 md:-mb-2 md:-ml-0.5 font-medium md:font-semibold text-[18px] md:text-[18.5px] text-[#2C0F62] dark:text-white'}>Docs</p>
                            </Link>
                        </div>
                    </div>
                    <div className={'flex items-center justify-center pr-4 md:w-full'}>
                        <div className="flex items-center space-x-2 md:space-x-3 md:w-full justify-end">
                            <SearchToggle className={'w-full md:max-w-56 md:flex-1'}/>
                            <ThemeToggle className={'hidden md:inline-flex'}/>
                            <SidebarToggle className={'md:hidden'}/>
                        </div>
                        <Links/>
                    </div>
                </div>
            </div>
        </nav>
    );
}