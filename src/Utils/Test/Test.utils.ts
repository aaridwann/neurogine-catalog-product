import React from 'react';

import renderer from 'react-test-renderer';

export interface SnapshotTestConfig<P> {
  desc: string;
  props: P;
}

export const runSnapshotTests = <P extends object>(
  Component: React.ComponentType<P> | React.ForwardRefExoticComponent<P>,
  configs: SnapshotTestConfig<P>[],
): void => {
  configs.forEach(({ props, desc }) => {
    it(desc, () => {
      let component: renderer.ReactTestRenderer;

      renderer.act(() => {
        component = renderer.create(
          React.createElement(Component as React.ComponentType<P>, props),
        );
      });

      const tree = component!.toJSON();

      expect(tree).not.toBeNull();
      expect(tree).toMatchSnapshot();
    });
  });
};