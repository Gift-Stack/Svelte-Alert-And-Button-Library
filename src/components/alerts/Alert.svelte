<script>
  import { Icon } from 'proi-ui-icons';
  import {icons} from './icons'

  export let value
  export let size = 'md';
  export let type = 'success';
  export let closable = false;
  export let outlined = false;

let closed = false;
  const outlinedClass = outlined
    ? `gl-alert-outlined gl-alert-outlined-${type}`
    : `gl-alert-${type}`;

  $: icon = icons.filter((item) => item.type == type)[0];

  const close = () => {
    closed = true;
  };
</script>

{#if !closed}
  <div class="gl-alert {outlinedClass}">
    <div class="gl-alert-icon">
      <Icon type={icon.iconType} color={icon.color} scale="15" />
    </div>
    <div class="gl-alert-text">
      <slot>{value}</slot>
    </div>

    {#if closable}
      <div class="gl-alert-close-icon" on:click={close}>
        <Icon type="circleClose" scale="15" />
      </div>
    {/if}
  </div>
{/if}
<style>
    .gl-alert {
    display: flex;
    padding: 6px 16px;
    font-size: 16px;
    border-radius: 50px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1;
    border-radius: 4px;
    margin: 5px 0;
  }

  .gl-alert-text {
    padding: 8px 0;
  }

  .gl-alert-close-icon {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 16px;
    opacity: 0.5;
  }

  .gl-alert-close-text {
    cursor: pointer;
    font-weight: 400;
  }

  .gl-alert-icon {
    display: flex;
    opacity: 0.9;
    align-items: center;
    font-size: 22px;
    margin-right: 12px;
    fill: #007f50;
  }

  .gl-alert-outlined {
    background: transparent;
  }

  .gl-alert-success {
    background: #9eecba;
    border: 1px solid #007f50;
  }

  .gl-alert-outlined-success {
    border: 1px solid #007f50;
  }

  .gl-alert-error {
    background: #f3737c;
    color: white;
    border: 1px solid #ee3d48;
  }

  .gl-alert-outlined-error {
    color: black;
    border: 1px solid #ee3d48;
  }

  .gl-alert-info {
    background: #79aaf3;
    border: 1px solid #257dff;
  }

  .gl-alert-outlined-info {
    border: 1px solid #257dff;
  }

  .gl-alert-warning {
    background: #fadc8d;
    border: 1px solid #fdb300;
  }

  .gl-alert-outlined-warning {
    border: 1px solid #fdb300;
  }

  .gl-alert-close-icon:hover {
    opacity: 1;
  }
</style>