import { keypairIdentity,  generateSigner, percentAmount } from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import {
    createNft,
    fetchDigitalAsset,
    mplTokenMetadata,
  } from '@metaplex-foundation/mpl-token-metadata'

describe("NFT Minter", async () => {
    it("Create an NFT!", async () => {
        //const umi = createUmi(`http://localhost:8899`).use(mplTokenMetadata())
        const umi = createUmi(`https://api.devnet.solana.com/`, "confirmed").use(mplTokenMetadata())
        const secretKey = JSON.parse(require('fs').readFileSync(require('os').homedir() + '/.config/solana/id.json', "utf-8"))
        const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey))
        umi.use(keypairIdentity(keypair))

        const mint = generateSigner(umi)
        await createNft(umi, {
        mint,
        name: 'My hot3l NFT',
        uri: 'https://www.hot3l.io/',
        sellerFeeBasisPoints: percentAmount(5.5),
        }).sendAndConfirm(umi)

        const asset = await fetchDigitalAsset(umi, mint.publicKey)
        console.log(asset)
    })
})