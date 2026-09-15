import HeaderCartButton from './HeaderCard.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';
describe('Header Cart Button', () => {
    const configs = [
        {
            desc: 'should render correctly when cart is empty (itemCount undefined/zero)',
            props: {
                itemCount: 0,
                onPress: jest.fn(),
            },
        },
        {
            desc: 'should render correctly with a few items in the cart',
            props: {
                itemCount: 3,
                onPress: jest.fn(),
            },
        },
        {
            desc: 'should render correctly with a large number of items in the cart',
            props: {
                itemCount: 99,
                onPress: jest.fn(),
            },
        },
    ];
    runSnapshotTests(HeaderCartButton, configs);
});
