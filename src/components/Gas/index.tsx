import useSWR from 'swr'
import React from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { ChainId } from '@snowge/swapsdk'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'

function Gas() {
    const { i18n } = useLingui()
    const { account, chainId, library } = useActiveWeb3React()
    const GAS_STATION = {
        [ChainId.MAINNET]: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
        [ChainId.ROPSTEN]: 'https://eth-ropsten.alchemyapi.io/v2/cidKix2Xr-snU3f6f6Zjq_rYdalKKHmW',
        [ChainId.RINKEBY]: 'https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD',
        [ChainId.GÖRLI]: 'https://eth-goerli.alchemyapi.io/v2/Dkk5d02QjttYEoGmhZnJG37rKt8Yl3Im',
        [ChainId.KOVAN]: 'https://eth-kovan.alchemyapi.io/v2/6OVAa_B_rypWWl9HqtiYK26IRxXiYqER',
        [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
        [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
        [ChainId.MATIC]: 'https://gasstation-mainnet.matic.network/?',
        [ChainId.MATIC_TESTNET]: 'https://gasstation-mumbai.matic.today/?',
        [ChainId.XDAI]: 'https://rpc.xdaichain.com',
        [ChainId.BSC]: 'https://bscgas.info/gas',
        [ChainId.BSC_TESTNET]: '',
        [ChainId.MOONBEAM_TESTNET]: 'https://rpc.testnet.moonbeam.network',
        [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
        [ChainId.AVALANCHE_TESTNET]: 'https://api.avax-test.network/ext/bc/C/rpc',
        [ChainId.HECO]: 'https://http-mainnet.hecochain.com',
        [ChainId.HECO_TESTNET]: 'https://http-testnet.hecochain.com',
        [ChainId.HARMONY]: 'https://explorer.harmony.one',
        [ChainId.HARMONY_TESTNET]: 'https://explorer.pops.one',
        [ChainId.OKEX]: 'https://exchainrpc.okex.org',
        [ChainId.OKEX_TESTNET]: 'https://exchaintestrpc.okex.org',
        [ChainId.ARBITRUM]: '',
        [ChainId.ARBITRUM_TESTNET]: '',
        [ChainId.CELO]: ''
    }
    const { data, error }: any = useSWR(chainId ? GAS_STATION[chainId] : GAS_STATION[ChainId.MATIC], url =>
        fetch(url).then(r => r.json())
    )

    if (error) return <div>{i18n._(t`failed to load`)}</div>
    if (!data) return <div>{i18n._(t`?`)}</div>

    return <div>{data.standard.toFixed(1)}</div>
}

export default Gas
