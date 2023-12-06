import { createBoard } from '@wixc3/react-board';
import { Form } from '../../components/form/form';


export default createBoard({
    name: 'App',
    Board: () => <div>
        <Form>
            {undefined}
        </Form>
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 268,
        canvasHeight: 222
    }
});
