import Button from '../src/components/buttons/Button.svelte'

export default {
    title: 'Button',
    component: Button
}

export const Default = () => ({
    Component: Button,
    props: {
        value: 'Button',
        size: 'sm',
        type: 'link'
    }
})
