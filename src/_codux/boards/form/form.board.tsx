import { createBoard } from '@wixc3/react-board';
import { Form } from '../../../components/form/form';

export default createBoard({
    name: 'Form',
    Board: () => <Form />,
    isSnippet: true,
});
