import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Features</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#rest" data-toggle="tab">Mock REST</a>
                <a className="nav-link" href="#livereload" data-toggle="tab">Hot Reloading</a>
                <a className="nav-link" href="#es2015" data-toggle="tab">ES2015</a>
                <a className="nav-link" href="#unittests" data-toggle="tab">Unit Tests</a>
            </nav>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="rest">
                    <h3>Mock REST</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                           esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                           in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="tab-pane" id="livereload">
                    <h3>Hot Reloading</h3>
                    <p>aka Live Reloading, aka Hot Module Replacement (HRM)</p>
                </div>

                <div className="tab-pane" id="es2015">
                    <h3>ES2015</h3>
                    <p>aka ES6</p>
                </div>

                <div className="tab-pane" id="unittests">
                    <h3>Unit Tests</h3>
                    <p>Jest, Enzyme</p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
