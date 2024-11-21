import './App.css';
import Button from './components/Conditional Button Styles';
import ToggleButton from './components/Dynamic Classes Based on State';

function App() {
  return (
    <div>
      <div>
        <Button label='Xeven' />
        <Button label='Xeven' isPrimary={true} />
        <Button label='Xeven' isDisabled={true} />
      </div>
      <div>
        <ToggleButton isActive={true}/>
        <ToggleButton/>
      </div>
    </div>
  );
}

export default App;
