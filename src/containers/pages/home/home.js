import React, { useReducer, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import {
  reqShowDashboard,
  reqShowTasks,
  reqCreateTasks,
  reqUpdateTasks,
  reqDeleteTasks,
} from "../../../actions";
import Header from "../../../components/header/header";
import TaskCompleted from "../../../components/taskCompleted/taskCompleted";
import TaskLatest from "../../../components/taskLatest/taskLatest";
import TaskPie from "../../../components/taskPie/taskPie";
import TaskFilter from "../../../components/taskFilter/taskFilter";
import TaskList from "../../../components/taskList/taskList";
import TaskAdd from "../../../components/taskAdd/taskAdd";
import TaskEdit from "../../../components/taskEdit/taskEdit";
import TaskNo from "../../../components/taskNo/taskNo";
import TaskLoading from "../../../components/taskLoading/taskLoading";

export default function Home() {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    content: {
      height: "calc(100% - 72px)",
      overflow: "auto",
    },
    contentTaskRow: {
      display: "flex",
      flexDirection: "column",
    },
    "@media (min-width: 1024px)": {
      content: {
        padding: "22px 120px",
      },
      contentTaskRow: {
        flexDirection: "row",
      },
    },
  });
  const home = useStyles();

  // main state
  const [homeState, setHomeState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      isAddTask: false,
      isEditTask: false,
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
  const [editTaskState, setEditTaskState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      taskName: "",
      taskId: "",
    }
  );
  const [filterTaskState, setFilterTaskState] = useReducer(
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
  }, [revCreateTasks, revUpdateTasks, revDeleteTasks]); // eslint-disable-line react-hooks/exhaustive-deps

  //page function
  const handleBtnAddTask = () => {
    if (homeState.isAddTask === true) {
      setHomeState({ isAddTask: false });
      setAddTaskState({ taskName: "" });
    } else {
      setHomeState({ isAddTask: true });
    }
  };
  const handleBtnEditTask = (id, name) => {
    if (homeState.isEditTask === true) {
      setHomeState({ isEditTask: false });
      setEditTaskState({ taskId: "", taskName: "" });
    } else {
      setHomeState({ isEditTask: true });
      setEditTaskState({ taskId: id, taskName: name });
    }
  };
  const handleBtnDelTask = (id) => {
    let formData = {
      id: id,
    };
    onReqDeleteTasks(formData);
  };
  const handleAddTask = () => {
    if (addTaskState.taskName !== "") {
      let formData = {
        name: addTaskState.taskName,
      };
      onReqCreateTasks(formData);
    }
    handleCancelAddTask();
  };
  const handleEditTask = () => {
    if (editTaskState.taskName !== "") {
      let formData = {
        id: editTaskState.taskId,
        name: editTaskState.taskName,
      };
      onReqUpdateTasks(formData);
    }
    handleCancelEditTask();
  };
  const handleCancelAddTask = () => {
    setHomeState({
      isAddTask: false,
    });
    setAddTaskState({ taskName: "" });
  };
  const handleCancelEditTask = () => {
    setHomeState({
      isEditTask: false,
    });
    setEditTaskState({ taskName: "" });
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
  const handleInputAddChange = (event) => {
    const name = event.target.name;
    setAddTaskState({
      [name]: event.target.value,
    });
  };
  const handleInputEditChange = (event) => {
    const name = event.target.name;
    setEditTaskState({
      [name]: event.target.value,
    });
  };
  const handleInputFilterChange = (event) => {
    const name = event.target.name;
    setFilterTaskState({
      [name]: event.target.value,
    });
  };

  return (
    <div className={home.container}>
      <Header />
      {revShowDashboard ? (
        revShowDashboard && revShowDashboard.latestTasks.length !== 0 ? (
          <div className={home.content}>
            {homeState.isAddTask && (
              <TaskAdd
                handleCancelAddTask={handleCancelAddTask}
                addTaskState={addTaskState}
                handleInputAddChange={handleInputAddChange}
                handleAddTask={handleAddTask}
              />
            )}
            {homeState.isEditTask && (
              <TaskEdit
                handleCancelEditTask={handleCancelEditTask}
                editTaskState={editTaskState}
                handleInputEditChange={handleInputEditChange}
                handleEditTask={handleEditTask}
              />
            )}
            <div className={home.contentTaskRow}>
              <TaskCompleted revShowDashboard={revShowDashboard} />
              <TaskLatest revShowDashboard={revShowDashboard} />
              <TaskPie revShowDashboard={revShowDashboard} />
            </div>
            <TaskFilter
              filterTaskState={filterTaskState}
              handleInputFilterChange={handleInputFilterChange}
              handleBtnAddTask={handleBtnAddTask}
            />
            <TaskList
              revShowTasks={revShowTasks}
              filterTaskState={filterTaskState}
              handleBoxCrossTask={handleBoxCrossTask}
              handleBtnEditTask={handleBtnEditTask}
              handleBtnDelTask={handleBtnDelTask}
            />
          </div>
        ) : homeState.isAddTask ? (
          <TaskAdd
            handleCancelAddTask={handleCancelAddTask}
            addTaskState={addTaskState}
            handleInputAddChange={handleInputAddChange}
            handleAddTask={handleAddTask}
          />
        ) : (
          <TaskNo handleBtnAddTask={handleBtnAddTask} />
        )
      ) : (
        <TaskLoading />
      )}
    </div>
  );
}
