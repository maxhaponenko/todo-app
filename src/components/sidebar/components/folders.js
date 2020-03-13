import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';


const Folders = (props) => {

    const folders = useSelector(state => state.items.folders)

    return (
        <Fragment>
            {folders.map((item, index) => {
                return (
                    <div key={index} className="folder">
                        <div className="folder__heading">
                            {item.name}
                        </div>
                        <div className="folder__items-container">
                            <ul>
                                {item.children && (
                                    item.children.map((item, index) => {
                                        return (
                                            <li key={index} className="folder__item"><div><i className="fas fa-bars"></i></div>{item}</li>
                                        )
                                    })
                                )}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Folders