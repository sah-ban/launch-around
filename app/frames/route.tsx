import { Button } from "frames.js/next";
import { frames } from "./frames";



const frameHandler = frames(async () => {
  interface UserData {
  fid: string;
  }

  let userData: UserData | null = null;
  
  const SplashScreen = () => (
    <div tw="flex flex-col w-full h-full bg-[#20142c] text-[#f5deb3] font-sans font-bold">
        <div tw="flex justify-center">
                <img
                  src="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/banner.png"
                  alt="Profile"
               tw="w-[900px]"
                />
        </div>


    
        </div>
      );


  const launch = `https://warpcast.com/~/frames/launch?domain=around-joined.vercel.app`;

  const buttons = [];

  if (!userData) {
    buttons.push(
      <Button
        action="link"
        target={launch}      >
       Launch Frame 
      </Button>
    );
  }

  return {
    image: <SplashScreen /> ,
    buttons: buttons,
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
