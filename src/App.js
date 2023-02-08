
import mockup from './mockuppp.png'
function App() {
  return (
    <div className="App bg-background overflow-x-hidden   p-0 w-full lg:h-[100vh] sm:h-[250vh]  ">
     <div class="custom-shape-divider-top-1675793784">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className="h-[45px] w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill fill-main "></path>
    </svg>
</div>
      <div className="hh mt-[50px]   lg:flex justify-between">
        <div className="circle lg:w-[600px] sm:w-[50px] justify-start align-left  lg:h-[600px] sm:h-[200px] rounded-[360px] bg-main">
        <img src={mockup} className="lg:h-[658px] sm:h-[100px] ml-[50px]   " alt="" />

        </div>


        <div className="txt  mt-[10%]  text-center lg:mr-[10%]">
          <h1 className="text-main m-auto text-[5rem]">Nyaanime</h1>
          <p className="text-main text-center text-2xl">
            Latest anime episodes totally for free.
          </p>
          <br />
          <br />
          <div className="btn  text-center ">
            <a
              href="https://expo.dev/artifacts/eas/5QSisHgjJ8y4EK5CA7Xqyb.apk"
              className="bg-main place-self-center hover:shadow-xl rounded-xl p-3 text-background text-4xl mt-[10%]"
            >
              Download Now!
            </a>
            <br /><br /><br />
            <p className="text-light">"available for androind only" <i class="uil uil-android"></i> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
