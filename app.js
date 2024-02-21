/************ Practice Code *************/

// const courseInfo = {};
// const assignentGroup = {};
// const assignmentInfo = {};
// const learnerSubmission = [];

// function getCourseInfo(id, name) {
//     // checking if the id is a number
//     if (typeof id !== "number") {
//         return "Course ID must be a number";
//     }
//     // making sure the ID is a 3 digit code
//     else if (id > 1000 || id <= 99) {
//         return "ID must be a 3 digit number";
//     }

//     // checking the name
//     if (typeof name !== "string") {
//         return "Incorrect Course Name";
//     }

//     return [id, name];
// }
// // courseInfo = getCourseInfo(123, "Intro")
// // courseInfo = getCourseInfo(125, "Second")

// courseInfo = {
//     ID: 123,
//     name: "Intro"
// }

// console.log(getCourseInfo(courseInfo));
// // console.log(getCourseInfo(123,"Introduction to JavaScript"));
// console.log(courseInfo);
// console.log("Hello World");

/**************** Provided Information ****************/

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  const results = [];

  const example_result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  // Parse submission data.
  console.log(`Submission Data:`, submissions);
  // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
  // Find existing data for this learner, if any.
  // If the learner already has data, add the new score to the existing data.
  // Calculate the average score for each learner and remove the extra data.

  //==== PUT CODE HERE =====//

  // Function to group submissions by learner ID
  function groupSubmissionsByLearnerId(submissions) {
    const groupedAssignments = {};

    submissions.forEach(({ learner_id, assignment_id, submission }) => {
      if (!groupedAssignments[learner_id]) {
        groupedAssignments[learner_id] = [];
      }

      groupedAssignments[learner_id].push({
        assignment_id,
        score: submission.score,
      });
    });
    return groupedAssignments;
  }

  let theAssignments = groupSubmissionsByLearnerId(
    LearnerSubmissions,
    AssignmentGroup
  );
  //   console.log(theAssignments);

  // function to extract the assignment information
  const extractAssignmentInfo = (assignmentGroup) => {
    const extractedInfoArray = [];

    assignmentGroup.assignments.forEach((assignment) => {
      const { id, due_at, points_possible } = assignment;
      extractedInfoArray.push({ id, due_at, points_possible });
    });

    return extractedInfoArray;
  };
  const classAssignment = extractAssignmentInfo(AssignmentGroup);
  //   console.log(classAssignment);

  // Function to group data based on assignment_id = id
  function groupTotalScoreWithSubmission(submision, grade) {
    const groupedData = {};

    // Iterate through each key in submision
    for (const key in submision) {
      // Iterate through each assignment in the grade
      submision[key].forEach((assignment) => {
        // Find the corresponding assignment in grade1 based on assignment_id = id
        const correspondingAssignment = grade.find(
          (a) => a.id === assignment.assignment_id
        );

        // If found, add points_possible to the submision
        if (correspondingAssignment) {
          // Create a new submision in groupedData if it doesn't exist
          if (!groupedData[key]) {
            groupedData[key] = [];
          }

          // Add points_possible to the submision
          groupedData[key].push({
            ...assignment,
            points_possible: correspondingAssignment.points_possible,
          });
        }
      });
    }

    return groupedData;
  }
  // calling the group function
  const groupedData = groupTotalScoreWithSubmission(
    theAssignments,
    classAssignment
  );
  console.log(groupedData);

  return results;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// Function to calculate weighted average
function average(grade, total) {
  let gradeID, totalPoints;

  console.log(`This is the course info: ${total.course_id}`);

  // Trying to use a for loop to get students grades
  // for (let i = 0; i < grade.length; i++) {
  //     console.log(`Student ID: ${grade[i].learner_id}`)
  //     console.log(`Assignment ID: ${grade[1].assignment_id}`)
  //     console.log(grade[i].submission.score)
  // }

  // for (let j = 0; j < total.assignments.length; j++) {
  //     gradeID = total.assignments[j].id;
  //     console.log(`The assignment ID: ${gradeID}`);
  //     totalPoints = total.assignments[j].points_possible;
  //     console.log(`This is the total possible grade: ${totalPoints}`);
  // }

  // going through students grades
  // for (let a = 0; a < grade.length; a++) {
  //     if (grade[a].learner_id == 125) {
  //         console.log(`Student ID: ${grade[a].learner_id}`)
  //     }
  // }

  // make sure the assignment ID is correct
  if (gradeID == totalPoints) {
  }

  // need to compare the assignment ID with the submitted assignment from the student
  // console.log(totalPoints);

  // if ()
  // if (total.assignments[0].id == 1) {
  //     console.log(total.assignments[0].points_possible)
  // }
}

average(LearnerSubmissions, AssignmentGroup);
