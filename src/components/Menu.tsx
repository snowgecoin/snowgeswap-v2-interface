/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { classNames } from '../functions/styling'
import { ExternalLink } from './Link'
import { ReactComponent as MenuIcon } from '../assets/images/menu.svg'
import { t } from '@lingui/macro'
import { I18n } from '@lingui/core'
import { useLingui } from '@lingui/react'

const items = (i18n: I18n) => [
    {
        name: i18n._(t`Home Page`),
        description: i18n._(t`Learn more about SnowgeCoin.`),
        href: 'https://snowgecoin.com'
    },
    {
        name: i18n._(t`About Us`),
        description: i18n._(t`Want to know how we got so floofy?`),
        href: 'https://snowgecoin.com/about'
    },
    {
        name: i18n._(t`Roadmap`),
        description: i18n._(t`Snowge's past, present, and future.`),
        href: 'https://snowgecoin.com/roadmap'
    },
    {
        name: i18n._(t`Open Source`),
        description: i18n._(t`Snowge is an open-source protocol.`),
        href: 'https://github.com/snowgecoin'
    },
    {
        name: i18n._(t`Telegram`),
        description: i18n._(t`Come hang out in the Snowge Telegram!`),
        href: 'https://t.me/snowgecoin'
    },
    {
        name: i18n._(t`Discord`),
        description: i18n._(t`Join the floofs on Discord!`),
        href: 'https://discord.gg/qy3ymqazeJ'
    },
    {
        name: i18n._(t`SushiSwap`),
        description: i18n._(t`SnowgeSwap is a proud fork of SushiSwap.`),
        href: 'https://app.sushi.com'
    }
]

export default function Menu() {
    const { i18n } = useLingui()
    const solutions = items(i18n)

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames(open ? 'text-secondary' : 'text-primary', 'focus:outline-none')}
                    >
                        <MenuIcon
                            title="More"
                            className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'inline-flex items-center ml-2 h-5 w-5 group-hover:text-secondary hover:text-high-emphesis'
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            static
                            className="absolute z-10 bottom-12 lg:top-12 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-xs sm:px-0"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-dark-900 px-5 py-6 sm:gap-8 sm:p-8">
                                    {solutions.map(item => (
                                        <ExternalLink
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 block rounded-md hover:bg-dark-800 transition ease-in-out duration-150"
                                        >
                                            <p className="text-base font-medium text-high-emphesis">{item.name}</p>
                                            <p className="mt-1 text-sm text-secondary">{item.description}</p>
                                        </ExternalLink>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
