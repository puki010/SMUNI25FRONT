import reactLogo from '/smuni25.png'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import { MainButton } from "@twa-dev/sdk/react";

function App() {
  const {
    sendDeposit,
  } = useMainContract();
  const { connected } = useTonConnect();

  return (
    <>
      <div> 
        {connected && (<a onClick={() => {
                  sendDeposit();
                }} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>)}
      </div> 
      <h1>ስሙኒ</h1>
      <p className="read-the-docs">
      ከታች ያለውን Connect Wallet የሚለውን በመንካት ዋሌት አድሬሶን አስመዝግበውን ገንዘብዎን ማውጣት ይችላሉ።
      </p>
      
      <div className='cnct'>
        <TonConnectButton />
      </div>
      <div>
        {connected && (
          <MainButton text='4 TON ለመቀበል ይጫኑ'
            onClick={() => {
              sendDeposit();
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
