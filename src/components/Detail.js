import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoMdAirplane, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class Detail extends Component {

  render() {
    const { museum } = this.props;
    const details = (museum != undefined && museum.length != 0) ? museum.filter((i) => { return i.id === this.props.match.params.ID }) : [];
    return (
      <div className="chitietcauhoi" >
        <div className="back">
          <Link to='/' className="iconback">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="cauhoi">
          {
            (details !== undefined && details.length !== 0) ? details.map((e, i) => {
              return (
                <div className='detail' key={i}>
                  <div className="right1">
                    <div className='title1'>
                      <h1>
                        {e.name}
                      </h1>
                    </div>
                    <div className='image1'>
                      <img src={e.urlImage} alt='' />
                    </div>
                    <div className="location1">
                      <IoMdAirplane />
                      {e.location}
                    </div>
                    <div className="des1">
                      {e.description}
                    </div>
                  </div>
                  <div className="left1">
                    <iframe frameBorder="0" style={{ width: "100%", height: "500px" }} title="map"
                      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15672.268931690754!2d106.7824432!3d10.882491!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1564508476809!5m2!1svi!2s">
                    </iframe>
                  </div>
                </div>
              )
            }) : ''
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    museum: state.firestore.ordered.museum
  }
}

export default compose(
  firestoreConnect([
    { collection: 'museum' }
  ]),
  connect(mapStateToProps, null)
)(Detail)