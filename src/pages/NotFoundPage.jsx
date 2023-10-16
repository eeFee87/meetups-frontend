import notFoundImage from '../assets/not-found-image.gif';
import Header from '../components/Header';
function NotFoundPage() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <h1 className='text-6xl drop-shadow-lg text-teal-700 font-bold flex justify-center pt-10'>
        Página no encontrada
      </h1>
      <img
        className='pt-10'
        src={notFoundImage}
        width='600'
        height='600'
      />
    </div>
  );
}

export default NotFoundPage;
