
const initialState = {
    user:"Initial User",
    expenses:[]
  };
  
  export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RENAME_USER':
          return {
            ...state,
            user: action.user,
          };
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: action.payload,
        };
      default:
        return state;
    }
  };
  

  