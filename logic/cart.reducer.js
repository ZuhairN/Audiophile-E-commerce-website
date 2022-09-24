export default function reducer(state, action) {
    switch (action.type) {
        case 'add':
            if (state.length > 0) {
                if (state.every(item => item.id !== action.id)) {
                    return [...state, {
                        id: action.id, name: action.name, qty: action.qty, price: action.price,
                    }]
                }
                return state.map(item => {
                    if (item.id === action.id) return { ...item, qty: item.qty + action.qty }
                    return item
                })
            }
            return [{
                id: action.id, name: action.name, qty: action.qty, price: action.price,
            }]
        case 'increment':
            return state.map(item => {
                if (item.id === action.id) return { ...item, qty: item.qty + 1 }
                return item
            })
        case 'decrement':
            return state.map(item => {
                if (item.id === action.id) return { ...item, qty: item.qty - 1 }
                return item
            })
        case 'destroy':
            return state.filter(item => item.id !== action.id)
        case 'reset':
            return []
        default:
            return state;
    }
}
