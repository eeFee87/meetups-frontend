import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
function LoginPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <Header />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
