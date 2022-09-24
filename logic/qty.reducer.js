export default function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.amount };
        case 'decrement':
            if (state.count === 1) return { count: 1 }
            return { count: state.count - action.amount };
        case 'reset':
            return { count: 1 }
        default:
            return { count: state.count }
    }
}
