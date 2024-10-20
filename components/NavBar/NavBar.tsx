// Module imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

// Local imports
import {Link} from "@/components/Link/Link";
import Img from "@/components/Img/Img";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

import ArchitectLogoDark from "@/public/images/architect-logo-dark.svg";
import ArchitectLogoLight from "@/public/images/architect-logo-light.svg";
import LoopholeLabsIconLight from "@/public/images/loopholelabs-icon-light.svg";

/**
 * Renders the NavBar component.
 *
 * @component
 */
export function NavBar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border transition-colors backdrop-blur-md">
            <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Img image={LoopholeLabsIconLight} alt="Loophole Labs icon" className="h-8 w-8 mr-2" priority/>
                        <Img image={ArchitectLogoLight} alt="Architect logo" className="h-6 hidden dark:block" priority/>
                        <Img image={ArchitectLogoDark} alt="Architect logo" className="h-6 dark:hidden" priority/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://loopholelabs.io/discord"
                              className="bg-[#5865F2] hover:bg-[#4752C4] text-white p-2 rounded-md transition duration-300">
                            <FontAwesomeIcon icon={faDiscord} className="w-5 h-5"/>
                        </Link>
                        <Link href="https://github.com/loopholelabs"
                              className="bg-[#333] hover:bg-[#24292e] text-white p-2 rounded-md transition duration-300">
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/>
                        </Link>
                        <ThemeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
