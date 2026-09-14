import React from 'react';
import renderer from 'react-test-renderer';
export const runSnapshotTests = (Component, configs) => {
    configs.forEach(({ props, desc }) => {
        it(desc, () => {
            let component;
            renderer.act(() => {
                component = renderer.create(React.createElement(Component, props));
            });
            const tree = component.toJSON();
            expect(tree).not.toBeNull();
            expect(tree).toMatchSnapshot();
        });
    });
};
