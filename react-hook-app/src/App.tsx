import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UseStateCounterOneDemo,UseStateCounterTwoDemo} from './components/UseState'
import {UseEffectDemo} from './components/UseEffect'
import {UseContextDemo} from './components/UseContext'
import {ApplicationWithoutUseCallBack} from './components/UseCallBack/ProblemWihoutUseCallBack'
import {ApplicationWithUseCallBack} from './components/UseCallBack/SolutionWithUseCallBack'
import {ApplicationWithoutUseMemo} from './components/UseMemo/ProblemWithoutUseMemo'
import {ApplicationWithUseMemo} from './components/UseMemo/SolutionWithUseMemo'
import {ApplicationCustomHook} from './components/CustomHook/ApplicationCustomHook'
import {ApplicationWithoutReactMemo} from './components/ReactMemo/ProblemWithoutReactMemo'
import {ApplicationWithReactMemo} from './components/ReactMemo/SolutionWithReactMemo'

const heading={
  color:'orange'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h4 style={heading}>-----------------------------------------Start: useState()----------------------------</h4>
       <UseStateCounterOneDemo/>
       <UseStateCounterTwoDemo/>
       <h4 style={heading}>----------------------------------------End: useState()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: useEffect()-------------------------------</h4>
       <UseEffectDemo/>
       <h4 style={heading}>----------------------------------------End: useEffect()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: useContext()-------------------------------</h4>
       <UseContextDemo/>
       <h4 style={heading}>----------------------------------------End: useContext()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: useCallback()-------------------------------</h4>
       <ApplicationWithoutUseCallBack/>
       <ApplicationWithUseCallBack/>
       <h4 style={heading}>----------------------------------------End: useCallback()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: useMemo()-------------------------------</h4>
       <ApplicationWithoutUseMemo/>
       <ApplicationWithUseMemo/>
       <h4 style={heading}>----------------------------------------End: useMemo()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: Custome Hook-------------------------------</h4>
       <ApplicationCustomHook/>
       <h4 style={heading}>----------------------------------------End: Custome Hook()-------------------------------</h4>

       <h4 style={heading}>----------------------------------------Start: React.Memo-------------------------------</h4>
       <ApplicationWithoutReactMemo/>
       <ApplicationWithReactMemo/>
       <h4 style={heading}>----------------------------------------End: React.Memo---------------------------------</h4>
      </header>
    </div>
  );
}

export default App;
