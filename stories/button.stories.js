import Button from '../src/components/buttons/Button.svelte'

export default {
    title: 'Button',
    component: Button
}

export const Default = () => ({
    Component: Button,
    props: {
        value: 'Button'
    }
})
export const Pill = () => ({
    Component: Button,
    props: {
        value: 'Button',
        shape: 'pill',
        type: 'success'
    }
})
export const Success = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'success'
    }
})
export const Secondary = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'secondary'
    }
})
export const Danger = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'danger'
    }
})
export const Warning = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'warning'
    }
})
export const Link = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'link'
    }
})
export const Light = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'light'
    }
})
export const Primary = () => ({
    Component: Button,
    props: {
        value: 'Button',
        type: 'primary'
    }
})
export const PrimaryLg = () => ({
    Component: Button,
    props: {
        value: 'Button',
        size: 'lg',
        type: 'primary'
    }
})
export const PrimaryMd = () => ({
    Component: Button,
    props: {
        value: 'Button',
        size: 'md',
        type: 'primary'
    }
})
export const PrimarySm = () => ({
    Component: Button,
    props: {
        value: 'Button',
        size: 'sm',
        type: 'primary'
    }
})
export const PrimaryOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'primary'
    }
})
export const SecondaryOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'secondary'
    }
})
export const SuccessOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'success'
    }
})
export const DangerOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'danger'
    }
})
export const WarningOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'warning'
    }
})
export const DarkOutlined = () => ({
    Component: Button,
    props: {
        value: 'Button',
        outlined: true,
        type: 'dark'
    }
})
