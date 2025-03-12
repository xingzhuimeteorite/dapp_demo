import { createConfig,http,useReadContract,useWriteContract,useWatchContractEvent, } from "wagmi";
import { Mainnet, WagmiWeb3ConfigProvider, MetaMask } from '@ant-design/web3-wagmi';
import { Address, NFTCard, Connector, ConnectButton,useAccount  } from "@ant-design/web3";

const CallTest = () => {
  const {account} = useAccount();
  const result = useReadContract({
    abi:[
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        imputs:[{name: 'owner', type: 'address'}],
        outputs:[{name: 'balance', type: 'uint256'}],
    },],
    address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
    functionName: 'balanceOf',
    args:[account?.address as `0x${string}`], 
  });
  return (<div>{result.data?.toString()}</div>);
}
export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider
      chains={[Mainnet]}
      transports={{
        [Mainnet.id]: http('https://api.zan.top/node/v1/eth/mainnet/1cac3c85b82f4340ac07d560ee047abb'),
      }}
      wallets={[MetaMask()]}
    >
      <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
     <NFTCard
       address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
       tokenId={641}
     />
     <Connector>
     <ConnectButton />
     </Connector>
      <CallTest />
    </WagmiWeb3ConfigProvider>
  );
};