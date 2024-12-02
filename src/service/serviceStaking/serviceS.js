import abi from "./abi.json"
import {Web3} from "web3";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0x36d056f791f44474f7B6c1191D39271591c83ceF'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)

    async deposit (amount,wallet){
        try{
            return await this.contract.methods.deposit(amount).send({from: wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async claimReward (wallet){
        try{
            return await this.contract.methods.claimReward().send({from: wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async getStaking(wallet) {
        try {
            return await this.contract.methods.getStaking().call({from: wallet});
        } catch (error) {
            console.error(error.message);
        }
    }

}
export default new Services();