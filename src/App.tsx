import React, { Component } from 'react';
import Footer from './Footer';
import ObjectComponent from './components/ObjectComponent';

import resume from './resume.json';

class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="margins">
                    <ObjectComponent value={resume} open={true} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
