import React, { Fragment } from 'react';


const Folders = (props) => {
    return (
        <Fragment>
            <div className="folder">
                <div className="folder__heading">
                    Projects
            </div>
                <div className="folder__items-container">
                    <ul>
                        <li className="folder__item"><div><i class="fas fa-bars"></i></div>EverGo</li>
                        <li className="folder__item"><div><i class="fas fa-bars"></i></div>Gemshark</li>
                    </ul>
                </div>
            </div>
            <div className="folder">
                <div className="folder__heading">
                    Learning
                </div>
                <div className="folder__items-container">
                    <ul>
                        <li className="folder__item"><div><i class="fas fa-bars"></i></div>Git</li>
                        <li className="folder__item"><div><i class="fas fa-bars"></i></div>Hooks</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Folders