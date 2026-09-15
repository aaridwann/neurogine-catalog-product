import React from 'react';
export interface SnapshotTestConfig<P> {
    desc: string;
    props: P;
}
export declare const runSnapshotTests: <P extends object>(Component: React.ComponentType<P> | React.ForwardRefExoticComponent<P>, configs: SnapshotTestConfig<P>[]) => void;
//# sourceMappingURL=Test.utils.d.ts.map