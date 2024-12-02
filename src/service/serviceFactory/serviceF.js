// serviceFactory.js
import {Web3} from "web3";
import abi from "./abi";

class ServicesF {
    web3 = new Web3(window.ethereum);
    contractAddress = '0xB7215cf2D5b623b3BddB5096D41E7a561D4A5B65';
    contract = new this.web3.eth.Contract(abi, this.contractAddress);

    // Метод для создания пула
    async createPool(tokenA, tokenB, reserveA, reserveB, wallet) {
         await this.contract.methods.createPool(tokenA, tokenB, reserveA, reserveB).send({ from: wallet });

    }

    // Метод для получения всех пулов
    async getPools(wallet) {
        return await this.contract.methods.getPools().call(wallet); // возвращаем адреса пулов
    }

    async getBalance(wallet) {
        return await this.contract.methods.getBalance().call(wallet); // возвращаем адреса пулов
    }
}

export default new ServicesF();
