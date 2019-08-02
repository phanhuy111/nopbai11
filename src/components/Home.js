import React, { Component } from 'react';
// import ListView from './ListView'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Fuse from 'fuse.js';
import { IoMdAirplane, IoIosSearch } from "react-icons/io";
import ListView from './ListView'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.museum !== this.state.data) {
            this.setState({ data: nextProps.museum });
        }
    }


    componentDidMount() {
        this.setState({
            data: this.props.museum
        });
    }


    handleChange = (e) => {
        const options = {
            threshold: 0.05,
            location: 0,
            distance: 100,
            minMatchCharLength: 1,
            keys: ['name']
        }
        const fuse = new Fuse(this.state.data, options)
        const data = fuse.search(e.target.value.trim())
        this.setState({
            value: e.target.value.trim(),
            data
        });
    }

    render() {
        const { data } = this.state
        const data1 = (data !== undefined && data.length !== 0) ? data : []
        return (
            <div className="all">
                <div className="all-search">
                    <div className="logo">
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOd_tdCl5xISunahYC7KBWlgxh_sj1A2Oqxohu0-aUgRA0_As'
                            alt='hhh'
                            className='logoImage'
                        />
                    </div>
                    <input
                        type="text"
                        name="quantity"
                        id="search_tern"
                        required=""
                        className="search_box ui-search-field"
                        value={this.props.value}
                        onChange={this.handleChange}
                        placeholder="Tìm kiếm" />
                    <IoIosSearch />
                </div>
                <ListView data={data1} />
            </div>
        );
    }
}





// const mapDispatchToProps = (dispatch) => {
//     return {
//         // getAGoal: (id) => { dispatch(getAGoal(id))}
//     }
// }


const mapStateToProps = (state) => {
    return {
        museum: state.firestore.ordered.museum
    }
}

export default compose(
    firestoreConnect([
        { collection: 'museum' }
    ]),
    connect(mapStateToProps, null)
)(Home)
