// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { login, increment, decrement } from './action';

// const App = () => {
//   const counter = useSelector((state) => state.counter);
//   const logger = useSelector((state) => state.isLogged);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => dispatch(increment)}>+</button>
//       <button onClick={() => dispatch(decrement)}>-</button>
//       {logger ? <h2>Hi, Sam!</h2> : <h2>Please Login</h2>}
//       {logger ? (
//         <button onClick={() => dispatch(login)}>Log out</button>
//       ) : (
//         <button onClick={() => dispatch(login)}>Log In</button>
//       )}
//     </div>
//   );
// };

// export default App;
import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
