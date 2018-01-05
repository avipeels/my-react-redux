import React, { PropTypes } from 'react';
import CourseRowList from './CourseRowList';
const CourseList = ({ courses }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course =>
                    <CourseRowList key={course.id} course={course} />
                )}
            </tbody>
        </table>
    );
};
CourseList.propTypes = {
    courses: PropTypes.array.isRequired

};
export default CourseList;