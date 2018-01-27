import React, { PropTypes } from 'react';
import CourseRowList from './CourseRowList';
const CourseList = ({ courses }) => {
    return (
        <div className="margin-top-20px">
            <table className="table-responsive table table-striped table-hover table-border-round">
                <thead>
                    <tr>
                        <th className="">Link</th>
                        <th className="width100pc">Title</th>
                        <th className="width100pc ">Author</th>
                        <th className="width100pc ">Category</th>
                        <th className="width100pc">Length</th>
                        <th className="width100pc"></th>
                    </tr>
                </thead>
                <tbody className="">
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