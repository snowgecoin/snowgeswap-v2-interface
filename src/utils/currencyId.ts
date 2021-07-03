import { Currency, NATIVE, Token } from '@snowge/swapsdk'

export function currencyId(currency: Currency): string {
    if (currency === NATIVE) return 'ETH'
    if (currency instanceof Token) return currency.address
    throw new Error('invalid currency')
}
