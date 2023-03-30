import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'G-0HBQ1BX8Q4' });
    }, []);
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}