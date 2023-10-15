import heroImage from '../assets/heroImage.png';
export const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row  items-center justify-around lg:mx-24'>
      <img
        className='drop-shadow-lg w-[600px] h-[400px] '
        src={heroImage}
        alt='hero logo'
      />
      <h2 className='text-3xl font-bold text-teal-600 w-[50%] '>
        <span className='text-teal-800 text-5xl font-bold drop-shadow-lg'>
          Uniendo Comunidades.
        </span>
        <p className='drop-shadow-md pt-3 '>
          Contacta con gente como tú. Sumérgete en un mundo de oportunidades de
          networking, aprendizaje y diversión gracias a esta plataforma
          versátil.
        </p>
      </h2>
    </div>
  );
};
