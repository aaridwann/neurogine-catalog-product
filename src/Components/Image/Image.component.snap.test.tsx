import ImageComponent from './Image.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

describe('Image Component Snap test', () => {
  const configs = [
    {
      desc: 'should render correctly with a valid source URL and standard style',
      props: {
        sourceUrl: 'https://example.com/product-image.jpg',
        style: { width: 100, height: 100, borderRadius: 8 },
      },
    },
    {
      desc: 'should render correctly with an empty source URL (shimmer/fallback state)',
      props: {
        sourceUrl: '',
        style: { width: '100%', height: 200 },
      },
    },
    {
      desc: 'should render correctly with full width and circular style',
      props: {
        sourceUrl: 'https://example.com/avatar.jpg',
        style: { width: 60, height: 60, borderRadius: 30 },
      },
    },
  ];

  runSnapshotTests(ImageComponent, configs);
});