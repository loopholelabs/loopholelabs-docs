// Local imports
import {Link} from '@/components/Link/Link';

/**
 * Renders the Status button
 *
 * @component
 */
export function StatusButton() {
    return (
        <Link href={"https://status.loopholelabs.io"} title={'Status Page'}>
            <div
                className="flex items-center justify-center bg-fd-secondary dark:bg-[#111315] rounded-md py-1.5 px-3 text-[13px] text-fd-foreground/85 dark:text-[#E9E9E9] font-sans transition-colors duration-200">
                <div className="relative h-3 w-3 mr-2">
                    <div
                        className="absolute top-0.5 left-0.5 h-2 w-2 rounded-full bg-fd-primary dark:bg-[#00FE7F] shadow-[0_0_0.5px_theme(colors.fd-primary.DEFAULT/60),0_0_1px_theme(colors.fd-primary.DEFAULT/50),0_0_3px_theme(colors.fd-primary.DEFAULT/40),0_0_6px_theme(colors.fd-primary.DEFAULT/30),0_0_9px_theme(colors.fd-primary.DEFAULT/20),0_0_18px_theme(colors.fd-primary.DEFAULT/10)] dark:shadow-[0_0_0.5px_rgba(0,254,127,0.60),0_0_1px_rgba(0,254,127,0.50),0_0_3px_rgba(0,254,127,0.40),0_0_6px_rgba(0,254,127,0.30),0_0_9px_rgba(0,254,127,0.20),0_0_18px_rgba(0,254,127,0.10)]"></div>
                    <div
                        className="absolute h-3 w-3 rounded-full border-[0.5px] border-fd-primary dark:border-[#00FE7F] animate-ping"></div>
                </div>
                <p>All Systems Operational</p>
            </div>
        </Link>
    )
}

