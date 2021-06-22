import { connect } from "react-redux";

function TodoList({todos}) {
    return(
        <ul>
            {todos.map((todo) => {
                return <li>{todo.text}</li>;
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
const mainDispatchToProps = (dispatch) => {
    return {};
};

const TodoListContainer = connect(
    mapStateToProps,
    mainDispatchToProps
)(TodoList);

export default TodoListContainer;