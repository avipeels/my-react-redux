import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve(); } },
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
        };
        const Wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = Wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(Wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});