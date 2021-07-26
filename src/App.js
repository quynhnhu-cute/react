
import './App.css';
import DemoDataBinding from './lesson-1/data-binding/DemoDataBinding';
import ClassBasedComponent from './lesson-1/demo-component/ClassBasedComponent';
import FunctionalComponent from './lesson-1/demo-component/FunctionalComponent';
import Courses from './lesson-1/exercise-component/exercise-1/Courses';
import Exercise1 from './lesson-1/exercise-component/exercise-1/Exercise1';
import Header from './lesson-1/exercise-component/exercise-1/Header';
import Index from './lesson-1/exercise-component/exercise-2/Index';
import Exercise3 from './lesson-1/exercise-component/exercise-3/Exercise3';
import ChooseCarColor from './lesson-2/choose-car-color/ChooseCarColor';
import DemoConditionalRendering from './lesson-2/conditional-rendering/DemoConditionalRendering';
import DemoHandlingEvent from './lesson-2/handling-events/DemoHandlingEvent';
import DemoListAndKey from './lesson-2/list and key/DemoListAndKey';
import DemoState from './lesson-2/state/DemoState';
import DemoStylingComponent from './lesson-2/style-component/DemoStylingComponent';


function App() {
  return (
    <div className="App">
      {/* Demo Component  */}
        {/* <ClassBasedComponent/>
        <FunctionalComponent/> */}

      {/* <Exercise1/> */}
      {/* <Index/> */}
      {/* <Exercise3/> */}
      {/* <DemoDataBinding/> */}
      {/* <DemoHandlingEvent/> */}
      {/* <DemoConditionalRendering/> */}
      {/* <DemoState/> */}
      {/* <DemoStylingComponent/> */}
        {/* <ChooseCarColor/> */}
        <DemoListAndKey/>
    </div>
  );
}

export default App;
