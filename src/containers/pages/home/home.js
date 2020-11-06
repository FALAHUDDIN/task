import React, { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reqShowDashboard,
  reqShowTasks,
  reqCreateTasks,
  reqUpdateTasks,
  reqDeleteTasks,
} from "../../../actions";

export default function Home() {
  // main state
  const [homeState, setHomeState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      isAddTask: false,
    }
  );
  const [addTaskState, setAddTaskState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      taskName: "",
    }
  );

  // history, sagas, redux
  const revShowDashboard = useSelector((state) => state.data.revShowDashboard);
  const revShowTasks = useSelector((state) => state.data.revShowTasks);
  const revCreateTasks = useSelector((state) => state.data.revCreateTasks);
  const revUpdateTasks = useSelector((state) => state.data.revUpdateTasks);
  const revDeleteTasks = useSelector((state) => state.data.revDeleteTasks);
  const dispatch = useDispatch();
  const onReqShowDashboard = () => {
    return dispatch(reqShowDashboard());
  };
  const onReqShowTasks = () => {
    return dispatch(reqShowTasks());
  };
  const onReqCreateTasks = (formData) => {
    return dispatch(reqCreateTasks(formData));
  };
  const onReqUpdateTasks = (formData) => {
    return dispatch(reqUpdateTasks(formData));
  };
  const onReqDeleteTasks = (formData) => {
    return dispatch(reqDeleteTasks(formData));
  };

  //component mount, update, unmount
  useEffect(() => {
    onReqShowDashboard();
    onReqShowTasks();
  }, [revCreateTasks, revUpdateTasks, revDeleteTasks]);

  //page function
  const handleBtnAddTask = () => {
    if (homeState.isAddTask === true) {
      setHomeState({ isAddTask: false });
    } else {
      setHomeState({ isAddTask: true });
    }
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    setAddTaskState({
      [name]: event.target.value,
    });
  };
  const handleAddTask = () => {
    if (addTaskState.taskName !== "") {
      let formData = {
        name: addTaskState.taskName,
      };
      onReqCreateTasks(formData);
    }
    handleResetAddTask();
  };
  const handleBoxCrossTask = (id, tick) => {
    let formData = { id: id, completed: tick };
    if (tick) {
      formData = {
        id,
        completed: false,
      };
    } else {
      formData = {
        id,
        completed: true,
      };
    }
    onReqUpdateTasks(formData);
  };
  const handleBtnDelTask = (id) => {
    let formData = {
      id: id,
    };
    onReqDeleteTasks(formData);
  };
  const handleResetAddTask = () => {
    setHomeState({
      isAddTask: false,
    });
    setAddTaskState({ taskName: "" });
  };

  console.log(revShowTasks, "data");
  return (
    <div>
      {revShowDashboard ? (
        revShowDashboard && revShowDashboard.latestTasks.length !== 0 ? (
          <div>
            {homeState.isAddTask && (
              <div>
                <div>+ New Task</div>
                <input
                  name="taskName"
                  type="text"
                  value={addTaskState.taskName}
                  onChange={handleInputChange}
                  placeholder="Task Name"
                ></input>
                <button onClick={() => handleAddTask()}>+ New Task</button>
              </div>
            )}
            <div>
              Task Completed:
              {revShowDashboard.tasksCompleted}/{revShowDashboard.totalTasks}
            </div>
            <div>
              Latest Created Tasks:
              {revShowDashboard.latestTasks.map((x, index) => {
                let keyX = index;
                return (
                  <div
                    key={keyX}
                    style={{
                      textDecoration: x.completed ? "line-through" : "unset",
                    }}
                  >
                    {x.name}
                  </div>
                );
              })}
            </div>
            <div>
              Pie Chart:
              {revShowDashboard.tasksCompleted}/{revShowDashboard.totalTasks}
            </div>
            <div>Tasks:</div>
            <input placeholder="Search by task name"></input>
            <div>
              <button onClick={() => handleBtnAddTask()}>+ New Task</button>
            </div>
            {revShowTasks &&
              revShowTasks.tasks.length !== 0 &&
              revShowTasks.tasks
                .sort(
                  (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )
                .map((x, index) => {
                  let keyX = index;
                  return (
                    <div key={keyX}>
                      <span
                        style={{
                          border: x.completed
                            ? "1px solid green"
                            : "1px solid red",
                        }}
                        onClick={() => handleBoxCrossTask(x._id, x.completed)}
                      >
                        click
                      </span>
                      <span
                        style={{
                          textDecoration: x.completed
                            ? "line-through"
                            : "unset",
                        }}
                      >
                        {x.name}
                      </span>
                      <button>Edit</button>
                      <button onClick={() => handleBtnDelTask(x._id)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
          </div>
        ) : homeState.isAddTask ? (
          <div>
            <div>+ New Task</div>
            <input
              name="taskName"
              type="text"
              value={addTaskState.taskName}
              onChange={handleInputChange}
              placeholder="Task Name"
            ></input>
            <button onClick={() => handleAddTask()}>+ New Task</button>
          </div>
        ) : (
          <div>
            <div>You have no task</div>
            <button onClick={() => handleBtnAddTask()}>+ New Task</button>
          </div>
        )
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
