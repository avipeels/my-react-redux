import React, { PropTypes } from 'react';
import CourseRowList from './CourseRowList';
const CourseList = ({ courses }) => {
    return (
        <div className="margin-top-20px tablerows">
            <table className="table">
                <thead>
                    <tr>
                        <th className="">Link</th>
                        <th className="width100pc tablerows">Title</th>
                        <th className="width100pc tablerows">Author</th>
                        <th className="width100pc tablerows">Category</th>
                        <th className="width100pc tablerows">Length</th>
                        <th className="width100pc"></th>
                    </tr>
                </thead>
                <tbody className="tablerows">
                    {courses.map(course =>
                        <CourseRowList key={course.id} course={course} />
                    )}
                </tbody>
            </table>
        </div>
    );
};
CourseList.propTypes = {
    courses: PropTypes.array.isRequired

};
export default CourseList;