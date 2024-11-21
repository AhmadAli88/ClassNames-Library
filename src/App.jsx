import './App.css';
import Alert from './components/Combining Multiple Classes';
import Button from './components/Conditional Button Styles';
import ToggleButton from './components/Dynamic Classes Based on State';
import ButtonComponent from './components/SecondButtonExample';

function App() {
  return (
    <div>
      <div>
        <Button label='Xeven' />
        <Button label='Xeven' isPrimary={true} />
        <Button label='Xeven' isDisabled={true} />
      </div>
      <div>
        <ToggleButton isActive={true} />
        <ToggleButton />
      </div>
      <div>
        <Alert type='success' message='This is success alert' />
        <Alert type='error' message='This is danger alert' />
        <Alert type='warning' message='This is warning alert' />
      </div>
      <div>
        <h1>Button Component with Conditional Class</h1>
        <ButtonComponent />
      </div>
    </div>
  );
}

export default App;
