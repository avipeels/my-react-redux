import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DeleteButton from '../common/DeleteButton';
const CourseRowList = ({ course }) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><DeleteButton id={course.id} /></td>
        </tr>
    );
};
CourseRowList.propTypes = {
    course: PropTypes.object.isRequired
};
export default CourseRowList;