import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DeleteButton from '../common/DeleteButton';
const CourseRowList = ({ course }) => {
    return (
        <tr>
            <td className="tableColumns"><a href={course.watchHref} target="_blank">Watch</a></td>
            <td className="tableColumns"><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td className="tableColumns">{course.authorId}</td>
            <td className="tableColumns">{course.category}</td>
            <td className="tableColumns">{course.length}</td>
            <td><DeleteButton id={course.id} /></td>
        </tr>
    );
};
CourseRowList.propTypes = {
    course: PropTypes.object.isRequired
};
export default CourseRowList;