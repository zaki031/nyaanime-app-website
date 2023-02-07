import logo from "./logo.svg";
import "./App.css";
import mockup from './mockuppp.png'
function App() {
  return (
    <div className="App bg-background  m-0 h-[100vh]  ">
     <div class="custom-shape-divider-top-1675793784">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className="h-[45px] w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill fill-main "></path>
    </svg>
</div>
      <div className="hh mt-[50px]   flex justify-between">
        <div className="circle w-[600px] justify-start align-left  h-[600px] rounded-[50%] bg-main">
        <img src={mockup} className="h-[658px] ml-[50px] mb-[50px]  " alt="" />

        </div>


        <div className="txt  mt-[10%]  mr-[10%]">
          <h1 className="text-main text-[7rem]">Nyaanime</h1>
          <p className="text-main  text-3xl  ">
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
