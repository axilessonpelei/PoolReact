import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0x572215316e51870DB80e95dFeAE9c5F9405b0947'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''


    async trade (demand,  demandToken,  supplyToken, wallet){
        try{
            return await this.contract.methods.trade(demand,  demandToken,  supplyToken).send({from: wallet})
        } catch(error){
            console.log(error.message)
        }
    }


}
export default new Services();