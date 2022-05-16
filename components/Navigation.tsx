/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useMemo } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const LocaleMap: Record<string, string> = {
  en: '中文',
  zh: 'EN',
}

export default function Navigation() {
  const router = useRouter()
  const localeButtonContent = LocaleMap[router.locale ?? 'en']
  const { t } = useTranslation('common')

  const navigation = useMemo(
    () => [
      { name: t('menu_hackathon'), href: '#', current: true },
      { name: 'Summit Agenda', href: '#', current: false },
      { name: 'Speakers', href: '#', current: false },
      { name: 'Partnership', href: '#', current: false },
      { name: 'Venue', href: '#', current: false },
      { name: 'Contact Us', href: '#', current: false },
    ],
    [],
  )

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="block h-8 w-auto lg:hidden" src="/favicon.ico" alt="ETH Shanghai" />
                  <span>{t('logo')}</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text--gray-900' : 'text-gray-500 hover:bg-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                    <div className="flex items-center justify-center px-3">
                      <Link
                        className="rounded-md text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-white"
                        href="/"
                        locale={router.locale === 'en' ? 'zh' : 'en'}>
                        <a>{localeButtonContent}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div className="flex items-center sm:hidden">
                    <div className="flex w-16 items-center justify-center">
                      <Link
                        className="rounded-md text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-white"
                        href="/"
                        locale={router.locale === 'en' ? 'zh' : 'en'}>
                        <a>{localeButtonContent}</a>
                      </Link>
                    </div>
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text--gray-900' : 'text-gray-500 hover:bg-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
