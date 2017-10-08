/**
 * Created by sravankumarganji on 9/21/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ""}
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course})
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
    this.setState({course: {title: ''}})
  }

  courseRow(course, i) {
    return <li key={i}>{course.title}</li>
  }

  render() {
    return (
      <div>
        <h1>courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}

        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};
CoursesPage.defaultProps = {};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
