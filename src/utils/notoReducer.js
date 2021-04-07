/*
 * Centralized state-management

 * I've settled on using a reducer function for all state management related
 * code to make the application more scalable and to make code on different
 * components more abstract.
 */

export default function notoReducer(state, action) {
  switch (action.type) {
    case 'toggleTheme':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };

    default:
      throw new Error('Not a valid action for notoReducer.');
  }
}
