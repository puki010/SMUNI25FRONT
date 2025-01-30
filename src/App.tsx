import reactLogo from '/smuni25.svg'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const {
    counter_value,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest,
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

        <div className='Card'>
          <b>ምን ያክል ግዜ ገንዘቡን ያወጣሉ</b>
          <div>{counter_value ?? "በመፈለግ ላይ..."}</div>
        </div>
        {connected && (
              <a
                onClick={() => {
                  sendIncrement();
                }}
              ></a>
            )}

            <br/>

            {connected && (
              <button type='button'
                onClick={() => {
                  sendDeposit();
                }}
              >
                ገንዘቡን ለማውጣት ይጫኑ
              </button>
            )}

             <br/>
             <br/>
             <br/>
             <br/>

            {connected && (
              <a
                onClick={() => {
                  sendWithdrawalRequest();
                }}
              >ሀ</a>
            )}


      </div>
      
    </>
  );
}

export default App;
