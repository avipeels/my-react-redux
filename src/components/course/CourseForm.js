import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = (props) => {

    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="title"
                value={props.course.title}
                onChange={props.onChange}
                errors={props.errors.title} />

            <SelectInput
                name="authorId"
                label="Author"
                value={props.course.authorId}
                defaultOption="Select Author"
                options={props.allAuthors}
                onChange={props.onChange}
                errors={props.errors.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={props.course.category}
                onChange={props.onChange}
                errors={props.errors.category} />

            <TextInput
                name="length"
                label="Length"
                value={props.course.length}
                onChange={props.onChange}
                errors={props.errors.length} />

            <input
                type="submit"
                disabled={props.saving}
                value={props.saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={props.onSave}
            />
        </form>
    );
};
CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    saving: PropTypes.bool,
    errors: PropTypes.object
};
export default CourseForm;