import './App.css'
import MainPage from './components/MainPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51MpY8VGTCtdGURLxuY8eEWuDW20TTYW62DGlT8JGuxcibBSCJDEle6UBxqJE1CJwXeSZ9EdbgM1lMthoxDqoPALP00Wdd4bSMc");


function App() {
  const options: any = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <MainPage/>
    </Elements>
  )
}

export default App
