import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);


    // const Floppy = await ethers.getContractFactory("Floppy");
    // const floppy = await Floppy.deploy();
    // console.log('Floppy address: ', floppy.address);
    // Config.setConfig(network + '.Floppy', floppy.address);

    // const Vault = await ethers.getContractFactory("Vault");
    // const vault = await Vault.deploy();
    // console.log('Floppy address: ', vault.address);
    // Config.setConfig(network + '.Vault', vault.address);
    
    const Floppy = await ethers.getContractFactory("IPT");
    const floppy = await Floppy.deploy();
    console.log('IPT address: ', floppy.address);
    Config.setConfig(network + '.IPT', floppy.address);

    // const Ico = await ethers.getContractFactory("FLPCrowdSale");
    // const ico = await Ico.deploy(1000,100,'0xb5F60142e7c6BfDdda4734953C1bCe1CD12f2B06', '0x81F388a3A0d1A7b40689DfA5e8856FC4A85ded58');
    // console.log('ICO address: ', ico.address);
    // Config.setConfig(network + '.ico', ico.address);

    
    // const Hero = await ethers.getContractFactory("Hero");
    // const hero = await Hero.deploy();
    // console.log('stman hero address: ', hero.address);
    // Config.setConfig(network + '.Hero', hero.address);


    // const MKP = await ethers.getContractFactory("HeroMarketplace");
    // const heroMarketplace = await MKP.deploy("0x4fEf3339E859D2a7394C4f6efe1A9F8220fc12b2", "0x81F388a3A0d1A7b40689DfA5e8856FC4A85ded58");
    // console.log('Market deployed at: ', heroMarketplace.address);
    
    // const Auction = await ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy("0x81F388a3A0d1A7b40689DfA5e8856FC4A85ded58", "0x4fEf3339E859D2a7394C4f6efe1A9F8220fc12b2");
    // console.log('Market deployed at: ', auction.address);
    // Config.setConfig(network + '.Auction', auction.address);

    await Config.updateConfig();
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});