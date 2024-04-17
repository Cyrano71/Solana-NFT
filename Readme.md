## SOLANA NFT

To install @solana/spl-token and @solana/web3.js use
```
yarn add @solana/spl-token
yarn add @solana/web3.js
```

To update the version of solana client 
```
solana-install init 1.18.11
```

To build
```
cargo build-bpf
```

To Deploy
```
solana program deploy ./target/deploy/nft_minter_program.so

Program Id: 8k5PLxiZTg9J3SGxCzc4jtQKTW2CKmqGcrAmxXhWxNxa
```

If the blockchain is stuck use the reset command:
```
solana-test-validator -r
```