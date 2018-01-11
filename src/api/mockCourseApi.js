import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.techtrainingpoint.com",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.techtrainingpoint.com",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.techtrainingpoint.com",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.techtrainingpoint.com",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.techtrainingpoint.com",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  },
  // {
  //   id: "a",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "b",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "c",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "d",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "e",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "f",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "g",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "h",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "i",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "j",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "k",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "l",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "m",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "n",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "o",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "p",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "q",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "r",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "s",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "t",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "u",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "v",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "w",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "x",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "y",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // },
  // {
  //   id: "z",
  //   title: "Web Component Fundamentals",
  //   watchHref: "http://www.techtrainingpoint.com",
  //   authorId: "cory-house",
  //   length: "5:10",
  //   category: "HTML5"
  // }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => course.id == courseId);
        courses.splice(indexOfCourseToDelete, 1);
        resolve(indexOfCourseToDelete);
      }, 0);
    });
  }
}

export default CourseApi;
