import logo from "./logo.svg";
import "./App.css";
import mockup from './mockupp.png'
function App() {
  return (
    <div className="App bg-background h-full  p-9">
      <div className="hh flex justify-between">
        <div className="circle w-[600px]  h-[600px] rounded-[50%] bg-main">
        <img src={mockup} className="h-[650px] ml-[10%]" alt="" />

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
            <br /><br />
            <p className="text-light">"available for androind only" <i class="uil uil-android"></i> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
