'use client'

import { useEffect } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ColorSchemeScript, DirectionProvider, MantineProvider } from '@mantine/core'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

// Create a new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})

const RootProvider = ({ children }: TWrapperWithChildrenType) => {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])
    return (
        <QueryClientProvider client={queryClient}>
            <QueryParamProvider adapter={NextAdapterApp}>
                <DirectionProvider>
                    <MantineProvider>
                        <ParallaxProvider>{children}</ParallaxProvider>
                    </MantineProvider>
                    <ColorSchemeScript defaultColorScheme='light' />
                </DirectionProvider>
            </QueryParamProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' /> */}
        </QueryClientProvider>
    )
}

export { RootProvider }
