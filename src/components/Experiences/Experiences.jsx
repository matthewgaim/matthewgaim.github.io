import './Experiences.css';
import Skills from '../Skills/Skills';

const Breaker = () => {
  return <div className='pb-11'></div>;
};

function Experiences() {
  return (
    <div className="exp_section relative">
      <p className='text-6xl p-3 previous-work-title'>Previous Work</p>
      <div className='previous-work mx-auto flex flex-wrap pb-3'>
        <div className='work w-full md:w-1/2 p-4'>
          <h1 className='text-4xl font-semibold'>Professional</h1>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU" alt="Microsoft Logo" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Microsoft</div>
                <p class="block mt-1 text-lg leading-tight font-medium text-black">Software Engineer Intern</p>
                <p class="mt-2 text-2xl">Led design and implementation of a dead letter queue for a Pub-Sub API within a microservice team.</p>
              </div>
            </div>
          </div>
          <Breaker />
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://w7.pngwing.com/pngs/90/415/png-transparent-osisoft-business-organization-industry-internet-of-things-business-blue-people-logo.png" alt="OSISoft Logo" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">OSIsoft</div>
                <p class="block mt-1 text-lg leading-tight font-medium text-black">IT Support Engineer Intern</p>
                <ul class="list-disc">
                  <li class="mt-2 text-2xl">Actively involved in the hands-on maintenance and troubleshooting of office technologies.</li>
                  <li class="mt-2 text-2xl">Resolved 10+ weekly support tickets, including new hire equipment setup, PC troubleshooting, and lobby display configuration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='projects w-full md:w-1/2 p-4'>
          <h1 className='text-4xl font-semibold'>Projects</h1>
          <a href="https://www.getaroomy.com">
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://raw.githubusercontent.com/getaroomy/Roomy/4bc84d24e18db248e833f27c807554bbe6b7cf9a/Roomy/public/images/roomylogofull.svg" alt="Roomy Logo" />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Roomy</div>
                  <ul class="list-disc">
                    <li class="mt-2 text-2xl">A platform that allows people in the housing market to put a face and story to their rental applications.</li>
                    <li class="mt-2 text-2xl">I was responsible for developing the backend in Python w/ Flask, and the infrastructure to be deployed to Google Cloud.</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <Breaker />
          <a href='https://github.com/matthewgaim/Loudmouth'>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://em-content.zobj.net/thumbs/120/apple/354/speaking-head_1f5e3-fe0f.png" alt="Loud Emoji" />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Loudmouth</div>
                  <p class="mt-2 text-2xl">Live comments for streaming services such as Netflix</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Experiences;
