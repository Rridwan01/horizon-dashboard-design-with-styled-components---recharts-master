import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import {
  BlockTableWrap,
  BlockTitle,
} from "../../../../styles/global/default";
import { CourseTableWrap } from "./CourseManagementTable.styles";

// You can move this array to your src/data/mockData.js file later
const COURSE_MANAGEMENT_DATA = [
  {
    id: 1,
    name: "Software Engineering Project",
    lecturer: "Dr. A.A. Waheed",
    duration: "6 Months",
    students: 45,
  },
  {
    id: 2,
    name: "Computing Fundamentals",
    lecturer: "Dr. V.B. Oyekunle",
    duration: "3 Months",
    students: 120,
  },
  {
    id: 3,
    name: "Introduction to Cybersecurity",
    lecturer: "Prof. O.O. Ojo",
    duration: "4 Months",
    students: 85,
  },
];

const CourseManagementTable = () => {
  return (
    <CourseTableWrap>
      <BlockTitle className="course-table-head">
        <h3 className="head-ttl">Course Management</h3>
        <button className="add-btn">
          <MdAdd size={20} />
          <span>Add Course</span>
        </button>
      </BlockTitle>
      <div className="course-table-content">
        <div className="table-block scrollbar">
          <BlockTableWrap>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Lecturer</th>
                <th>Duration</th>
                <th>Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {COURSE_MANAGEMENT_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.lecturer}</td>
                    <td>{dataItem.duration}</td>
                    <td>{dataItem.students}</td>
                    <td>
                      <div className="data-cell-actions">
                        <button type="button" className="edit-btn" aria-label="Edit course">
                          <MdEdit size={22} />
                        </button>
                        <button type="button" className="delete-btn" aria-label="Delete course">
                          <MdDelete size={22} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </BlockTableWrap>
        </div>
      </div>
    </CourseTableWrap>
  );
};

export default CourseManagementTable;