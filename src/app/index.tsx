import { render } from 'solid-js/web'
import { Header } from './Header/Header'
import './index.css'

const CountingComponent = () => {
    return <>
        <Header />
    </>
}

render(() => <CountingComponent />, document.getElementById('root')!)