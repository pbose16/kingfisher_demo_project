import type { Config } from 'jest'

const config: Config = {
    rootDir: './',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
}
export default config