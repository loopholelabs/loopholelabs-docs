'use client';

// Module imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Local imports
import {Link} from "@/components/Link/Link";
import Img from "@/components/Img/Img";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";
import {SearchToggle} from "@/components/Search/Search";
import {SidebarToggle} from "@/components/Sidebar/Sidebar";

import {useScrollPosition} from "@/lib/hooks";

import ArchitectLogoDark from "@/public/images/architect-logo-dark.svg";
import ArchitectLogoLight from "@/public/images/architect-logo-light.svg";
import LoopholeLabsIconLight from "@/public/images/loopholelabs-icon-dark.svg";

export function Links() {
    return (
        <div className={`flex-row items-center border-l h-[90%] pl-4 hidden md:flex space-x-3`}>
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
        <NavigationMenu className={`sticky top-0 z-50 w-full transition-colors bg-opacity-80 bg-fd-background backdrop-blur-md max-w-full border-b border-fd-border ${(layoutScrollPosition > 0 || windowScrollPosition > 0) ? 'md:border-fd-border' : 'md:border-transparent'}`}>
            <div className="w-full max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <NavigationMenuList>
                        <div className="flex items-center">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Img image={LoopholeLabsIconLight} alt="Loophole Labs icon" className="h-7 w-7 mr-2" priority/>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components that you can copy and
                                                        paste into your apps. Accessible. Customizable. Open
                                                        Source.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Img image={ArchitectLogoLight} alt="Architect logo" className="h-5 hidden dark:block" priority/>
                            <Img image={ArchitectLogoDark} alt="Architect logo" className="h-5 dark:hidden" priority/>
                        </div>
                    </NavigationMenuList>
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
        </NavigationMenu>
    );
}