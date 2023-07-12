import './Top.css';
import headshot from '../../assets/img/matthew.jpg';

function Top() {
  return (
      <div className='intro flex flex-wrap min-h-screen w-auto'>
        <img className='max-w-sm h-auto rounded-full p-8' src={headshot} alt="Headshot" />
        <div className='p-8'>
          <p className='text-5xl p-1'>Hi, I'm Matthew Gaim</p>
          <p className='text-3xl p-1'>Software Engineer</p>
          <p className='text-3xl p-1'>Graduated from University of California Santa Cruz 🐌 in December 2022</p>
          <p className='text-3xl p-1'>with a BS in computer science</p>
          <p></p>
        </div>
      </div>
  );
}

export default Top;