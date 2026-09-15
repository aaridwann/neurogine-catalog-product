import ShimmeringCard from './ShimeringCard.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

describe('Shimmering Card', () => {
  const configs = [
    {
      desc: 'should render correctly with default props',
      props: {},
    },
    {
      desc: 'should render correctly with custom style',
      props: {
        style: {
          width: 200,
          height: 100,
          borderRadius: 8,
        },
      },
    },
  ];

  runSnapshotTests(ShimmeringCard, configs);
});