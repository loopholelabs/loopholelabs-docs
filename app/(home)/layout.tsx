import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/home-layout';

export default function Layout({children}: { children: ReactNode; }): React.ReactElement {
    return <HomeLayout>
        {children}
    </HomeLayout>;
}
