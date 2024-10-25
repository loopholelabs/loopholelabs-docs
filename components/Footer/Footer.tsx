// Module imports
import {
    faDiscord,
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Local Imports
import {Link} from '@/components/Link/Link'
import {StatusButton} from "@/components/StatusButton/StatusButton";

import Img from "@/components/Img/Img";

import LoopholeLabsLogoDark from "@/public/images/loopholelabs-logo-dark.svg";
import LoopholeLabsLogoLight from "@/public/images/loopholelabs-logo-light.svg";

// @ts-ignore
const FooterLink = ({ href, title, children }) => (
    <li className="transition-all duration-300 ease-in-out border-b border-transparent hover:border-primary">
        <Link href={href} title={title} className="text-foreground hover:text-primary">{children}</Link>
    </li>
);

// @ts-ignore
const SocialLink = ({ href, title, icon }) => (
    <li className="flex items-center justify-center">
        <Link href={href} title={title} className="flex items-center justify-center w-7 h-7 text-foreground hover:text-primary">
            <FontAwesomeIcon icon={icon} className="w-7 h-7" />
        </Link>
    </li>
);

export function Footer() {
    return (
        <footer className="bg-background text-foreground flex justify-center w-full max-w-screen px-16 max-[1168px]:px-8 border-t border-border">
            <div className="max-w-[var(--max-width)] flex-grow leading-[22px] w-max">
                <div className="flex flex-row items-center justify-between py-12 max-[1168px]:flex-col max-[1168px]:pb-6 max-[1168px]:gap-16 max-[1021px]:gap-8">
                    <div className="flex flex-col -mt-[42px] font-inter font-normal justify-center items-center max-[1168px]:mt-0 max-[1168px]:text-center max-[1168px]:hidden">
                        <div className="h-[42px] mb-3 relative">
                            <Img image={LoopholeLabsLogoLight} alt="loophole labs logo" className="object-contain object-left dark:hidden" />
                            <Img image={LoopholeLabsLogoDark} alt="loophole labs logo" className="object-contain object-left hidden dark:block" />
                        </div>
                        <p className="text-muted-foreground">
                            99 Wall Street #3065,<br />
                            New York, NY 10005
                        </p>
                    </div>

                    <div className="flex flex-row gap-20 max-[1168px]:grid max-[1168px]:grid-cols-4 max-[1168px]:gap-12 max-[1021px]:grid-cols-3 max-[1021px]:grid-rows-2 max-[750px]:grid-cols-2 max-[750px]:gap-10 max-[515px]:grid-cols-1 max-[515px]:grid-rows-4 max-[515px]:text-center">
                        <div className="flex flex-col font-medium">
                            <h3 className="font-medium pb-6 text-primary">Products</h3>
                            <ul className="flex flex-col items-start gap-4 list-none font-normal max-[515px]:items-center">
                                <FooterLink href="https://architect.run" title="Architect">Architect</FooterLink>
                                <FooterLink href="https://scale.sh" title="Scale">Scale</FooterLink>
                            </ul>
                        </div>

                        <div className="flex flex-col font-medium">
                            <h3 className="font-medium pb-6 text-primary">Resources</h3>
                            <ul className="flex flex-col items-start gap-4 list-none font-normal max-[515px]:items-center">
                                <FooterLink href="https://loopholelabs.io/docs" title="Docs">Docs</FooterLink>
                                <FooterLink href="https://loopholelabs.io/blog?product=architect" title="Blog">Blog</FooterLink>
                            </ul>
                        </div>

                        <div className="flex flex-col font-medium">
                            <h3 className="font-medium pb-6 text-primary">Company</h3>
                            <ul className="flex flex-col items-start gap-4 list-none font-normal max-[515px]:items-center">
                                <FooterLink href="https://loopholelabs.io" title="About Us">About Us</FooterLink>
                                <FooterLink href="https://loopholelabs.io/privacy" title="Privacy Policy">Privacy Policy</FooterLink>
                                <FooterLink href="https://loopholelabs.io/code-of-conduct" title="Code of Conduct">Code of Conduct</FooterLink>
                            </ul>
                        </div>

                        <div className="flex flex-col font-medium">
                            <h3 className="font-medium pb-6 text-primary">Follow Us</h3>
                            <ul className="grid grid-cols-2 gap-4 max-[1168px]:-ml-6 max-[515px]:-ml-3">
                                <SocialLink href="https://twitter.com/LoopholeLabs" title="Twitter" icon={faTwitter} />
                                <SocialLink href="https://github.com/loopholelabs" title="Github" icon={faGithub} />
                                <SocialLink href="https://www.linkedin.com/company/loophole-labs/" title="Linkedin" icon={faLinkedin} />
                                <SocialLink href="https://loopholelabs.io/discord" title="Discord" icon={faDiscord} />
                            </ul>
                        </div>
                    </div>

                    <div className="hidden max-[1168px]:flex max-[1168px]:flex-col max-[1168px]:items-center max-[1168px]:w-full max-[1168px]:border-t max-[1168px]:border-border max-[1168px]:pt-12">
                        <div className="mb-8">
                            <StatusButton />
                        </div>
                        <div className="h-[42px] mb-3 relative">
                            <Img image={LoopholeLabsLogoLight} alt="loophole labs logo" className="object-contain object-left dark:hidden" />
                            <Img image={LoopholeLabsLogoDark} alt="loophole labs logo" className="object-contain object-left hidden dark:block" />
                        </div>
                        <p className="text-center text-muted-foreground">
                            99 Wall Street #3065,<br />
                            New York, NY 10005
                        </p>
                    </div>
                </div>

                <div className="border-t border-border py-6 text-center font-untitled-sans font-normal">
                    <div className="flex justify-between max-[1168px]:hidden">
                        <small className="text-muted-foreground">Copyright © 2024 Loophole Labs, Inc | All rights reserved.</small>
                        <StatusButton />
                    </div>
                    <div className="hidden max-[1168px]:flex max-[1168px]:justify-center">
                        <small className="text-muted-foreground">Copyright © 2024 Loophole Labs, Inc | All rights reserved.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}