export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState,
                action.payload
            ];

        case '[TODO] Delete Todo':
            return initialState.filter((value) => value.id != action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map((todo) => {
                if (action.payload === todo.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}