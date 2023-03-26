import Navbar from 'react-bootstrap/Navbar';

let date = new Date();

let year = date.getFullYear();

export default function Footer() {
    return (
        <div className='text-center p-2' bg="dark" style={{ backgroundColor: '#f8f9fa' }}>
            © {year} Copyright David Presby
        </div>
        // <Navbar className="Footer">&#169;
        //      </Navbar>
    )
}