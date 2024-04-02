function TodoItem({todoName, todoDate, onDeleteClick }) {

  return (
    <div className="container">
      <div className="row skRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button id="dev" type="button" className="btn btn-danger skButton"
          onClick={() => onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
