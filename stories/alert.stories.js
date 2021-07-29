import Alert from '../src/components/alerts/Alert.svelte'

export default {
    title: 'Alert',
    component: Alert
}

export const Success = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'success',
        closable: false,
        outlined: false
    }
})

export const SuccessOutlined = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'success',
        closable: false,
        outlined: true
    }
})

export const SuccessClosable = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'success',
        closable: true,
        outlined: true
    }
})
export const Error = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'error',
        closable: false,
        outlined: false
    }
})

export const ErrorOutlined = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'error',
        closable: false,
        outlined: true
    }
})

export const ErrorClosable = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'error',
        closable: true,
        outlined: true
    }
})
export const Info = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'info',
        closable: false,
        outlined: false
    }
})

export const InfoOutlined = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'info',
        closable: false,
        outlined: true
    }
})

export const InfoClosable = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'info',
        closable: true,
        outlined: true
    }
})
export const Warning = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'warning',
        closable: false,
        outlined: false
    }
})

export const WarningOutlined = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'warning',
        closable: false,
        outlined: true
    }
})

export const WarningClosable = () => ({
    Component: Alert,
    props: {
        value: 'Hello World',
        type: 'warning',
        closable: true,
        outlined: true
    }
})

// const Template = (args) => ({ Component: Alert, props: args })

// export const Success = Template.bind({})
// Success.arg = {
//     type: 'success',
//     closable: false,
//     outlined: false
// }

// export const Error = Template.bind({})
// Error.arg = {
//     value: 'Hello World',
//     type: 'error',
//     closable: true,
//     outlined: true
// }
