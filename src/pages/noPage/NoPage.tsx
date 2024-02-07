import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';
import './NoPage.css'
import Footer from '../../components/StandardComponents/Footer';

export default function NoPage() {
    return (
        <Fragment>
            <main className="content">
                <section className="noPage">
                    <h1>404: This URL doesn't exist.</h1>
                    <h4>Please try another URL.</h4>
                    <img className='sadDuck' src="assets/images/sad-duck.webp" alt="404 sad duck"></img>
                </section>
                <Footer />
            </main>
        </Fragment>
    );
}