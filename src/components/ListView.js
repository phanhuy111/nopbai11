import React, { Component } from 'react';
// import ListView from './ListView'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Fuse from 'fuse.js';
import { IoMdAirplane, IoIosSearch } from "react-icons/io";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props

        return (
            <div>
                <div className="listview">
                    {
                        (data !== undefined && data.length !== 0) ? data.map((e, i) => {

                            return (
                                <div className="modalP" key={i}>
                                    <div className="right">
                                        <div className="image">
                                            <img src={e.urlImage} alt='' />
                                        </div>
                                    </div>
                                    <div className="left">
                                        <Link to={`/detail/${e.id}`} className="name">
                                            {e.name}
                                        </Link>
                                        <div className="location">
                                            <IoMdAirplane />
                                            {e.location}
                                        </div>
                                        <div className="description">
                                            {e.description.substr(0, 135)}
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : ''
                    }
                </div>
            </div>
        );
    }
}





// const mapDispatchToProps = (dispatch) => {
//     return {
//         // getAGoal: (id) => { dispatch(getAGoal(id))}
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         museum: state.firestore.ordered.museum
//     }
// }

export default ListView
    // firestoreConnect([
    //     { collection: 'museum' }
    // ]),
    // connect(mapStateToProps, mapDispatchToProps)
