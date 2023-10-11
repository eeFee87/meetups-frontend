import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <Header />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
