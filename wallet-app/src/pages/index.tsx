import Web3 from 'web3';

const web3 = new Web3("https://cloudflare-eth.com")
web3.eth.getBlockNumber(function (error, result) {
  console.log(result)
})

const Index = (x) => (
  <div>Hello World </div>

)

export default Index
