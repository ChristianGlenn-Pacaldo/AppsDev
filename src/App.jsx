import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => (
  <div style={{ backgroundColor: '#111', minHeight: '100vh', padding: '1rem' }}>
    <Header />
    <Profile />
    <Footer />
  </div>
);

export default App;
