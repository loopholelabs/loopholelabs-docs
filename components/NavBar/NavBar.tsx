'use client';

// Module imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

// Local imports
import {Link} from "@/components/Link/Link";
import Img from "@/components/Img/Img";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";
import {SearchToggle} from "@/components/Search/Search";
import {SidebarToggle} from "@/components/SidebarToggle/SidebarToggle";

import ArchitectLogoDark from "@/public/images/architect-logo-dark.svg";
import ArchitectLogoLight from "@/public/images/architect-logo-light.svg";
import LoopholeLabsIconLight from "@/public/images/loopholelabs-icon-dark.svg";
import {useScrollPosition} from "@/lib/hooks";

export function Links(props: {mobile?: boolean}) {
    return (
        <div className={`flex-row items-center border-l h-[90%] pl-4 ${props.mobile ? 'flex' : 'hidden md:flex'} space-x-3`}>
            <Link href="https://loopholelabs.io/discord"
                  className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-accent-foreground dark:text-white rounded-md transition duration-300">
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5"/>
            </Link>
            <Link href="https://github.com/loopholelabs"
                  className="inline-flex p-2 border border-fd-border bg-transparent hover:bg-fd-accent hover:border-transparent text-fd-accent-foreground dark:text-white rounded-md transition duration-300">
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
        <nav className={`sticky top-0 z-50 w-full transition-colors backdrop-blur-md ${(layoutScrollPosition > 0 || windowScrollPosition > 0) ? 'border-b border-fd-border' : ''}`}>
            <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className={'flex items-center justify-center pr-4'}>
                            <Img image={LoopholeLabsIconLight} alt="Loophole Labs icon" className="h-7 w-7 mr-2"
                                 priority/>
                            <FontAwesomeIcon icon={faAngleDown}
                                             className="w-5 h-5 -mb-1 text-fd-primary dark:text-white"/>
                        </div>
                        <Img image={ArchitectLogoLight} alt="Architect logo" className="h-5 hidden dark:block"
                             priority/>
                        <Img image={ArchitectLogoDark} alt="Architect logo" className="h-5 dark:hidden" priority/>
                    </div>
                    <div className={'flex items-center justify-center pr-4'}>
                        <div className="flex items-center space-x-2 md:space-x-3">
                            <SearchToggle className={'w-full md:min-w-64'}/>
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
