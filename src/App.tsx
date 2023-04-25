import { styled } from './styles/stitches';
import { flex } from './styles/utils';
import Hello from './components/home/Hello/Hello';

function App() {
    return (
        <Main>
            <Hello />
        </Main>
    );
}

export default App;

const Main = styled('main', {
    height: '100vh',
    ...flex({ flexDirection: 'column', alignItems: 'center' })
});
