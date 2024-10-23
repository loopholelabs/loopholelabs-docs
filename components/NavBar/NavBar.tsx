'use client';

// Module imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

// Local imports
import {Link} from "@/components/Link/Link";
import Img from "@/components/Img/Img";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";
import {SearchToggle} from "@/components/Search/Search";
import {SidebarToggle} from "@/components/Sidebar/Sidebar";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {useScrollPosition} from "@/lib/hooks";

import ArchitectIconDark from "@/public/images/architect-icon-dark.svg";
import ArchitectIconLight from "@/public/images/architect-icon-light.svg";
import ScaleIconLight from "@/public/images/scale-icon.svg";
import LoopholeLabsLogoLight from "@/public/images/loopholelabs-logo-light.svg";
import LoopholeLabsDocsLogoDark from "@/public/images/loopholelabs-logo-docs-dark.svg";

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

export function Products() {
    const handleTabChange = (value: string) => {
        console.log(value);
    }
    return (
        <Tabs defaultValue="architect" className="w-max bg-transparent dark:bg-transparent" onValueChange={handleTabChange}>
            <TabsList className="bg-transparent dark:bg-transparent border dark:border border-fd-border dark:border-fd-border inline-flex h-10 items-center justify-between rounded-md p-1 w-max">
                <TabsTrigger value="architect" className={'px-2 py-0.5 inline-flex justify-start w-max bg-transparent dark:bg-transparent data-[state=active]:bg-fd-accent dark:data-[state=active]:bg-fd-accent data-[state=active]:text-fd-accent-foreground text-fd-muted-foreground dark:text-fd-muted-foreground dark:data-[state=active]:text-fd-accent-foreground'}>
                    <Img image={ArchitectIconLight} alt="Architect icon" className="h-5 w-auto" priority/>
                    <p className={'pl-1.5 font-normal text-lg'}>Architect</p>
                </TabsTrigger>
                <TabsTrigger value="scale" className={'px-2 py-0.5 inline-flex justify-start w-max bg-transparent dark:bg-transparent data-[state=active]:bg-fd-accent dark:data-[state=active]:bg-fd-accent data-[state=active]:text-fd-accent-foreground text-fd-muted-foreground dark:text-fd-muted-foreground dark:data-[state=active]:text-fd-accent-foreground'}>
                    <Img image={ScaleIconLight} alt="Scale icon" className="h-5 w-auto text-white" priority/>
                    <p className={'pl-1.5 font-normal text-lg'}>Scale</p>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
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
        <nav
            className={`pt-2 fixed md:absolute top-0 z-50 w-full transition-colors bg-opacity-80 bg-fd-background backdrop-blur-md max-w-full border-b border-fd-border ${(layoutScrollPosition > 0 || windowScrollPosition > 0) ? 'md:border-fd-border' : 'md:border-transparent'}`}>
            <div className="w-full max-w-[var(--max-width)] mx-auto px-2 md:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center w-max">
                        <Link href={'https://loopholelabs.io'} className={'w-max mr-8 -mt-2'}>
                            <Img image={LoopholeLabsDocsLogoDark} alt="Loophole Labs logo" className={'h-auto'} priority/>
                        </Link>
                        <Products/>
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