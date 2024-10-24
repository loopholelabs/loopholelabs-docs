import {SidebarFooter} from "@/components/Sidebar/Sidebar.client";
import Img from "@/components/Img/Img";

import ArchitectIconLight from "@/public/images/architect-icon-light.svg";
import ScaleIconLight from "@/public/images/scale-icon-light.svg";

export function SidebarOptions() {
    return {
        enabled: true, tabs: [
            {
                url: '/architect',
                title: 'Architect',
                description: 'Workload Orchestration',
                icon: <Img image={ArchitectIconLight} alt="Architect icon" className="h-6 w-6" priority/>
            },
            {
                url: '/scale',
                title: 'Scale',
                description: 'WebAssembly Plugins',
                icon: <Img image={ScaleIconLight} alt="Scale icon" className="h-6 w-6" priority/>
            }
        ], collapsible: false, hideSearch: true, footer: <SidebarFooter/>
    }
}