<script>
  export let value
  export let size = 'md';
  export let type = 'default';
  export let shape = 'default';
  export let outlined = false;

  const outlinedClass = outlined
    ? `gl-btn-outlined gl-btn-outlined-${type}`
    : `gl-btn-${type}`;
</script>

  <button class="gl-btn gl-btn-{shape} gl-btn-{size} {outlinedClass}">
    {value}
  </button>

<style>
  .gl-btn {
    border-radius: 5px;
    cursor: pointer;
  }
  .gl-btn-outlined {
    background: transparent !important;
  }
  .gl-btn-pill {
    border-radius: 50px;
  }
  .gl-btn-sm {
    padding: 10px 20px;
  }
  .gl-btn-md {
    padding: 13px 32px;
  }
  .gl-btn-lg {
    font-size: larger;
    padding: 15px 50px;
  }
  .gl-btn-primary{
    color: white;
    background: #0275d8;
    border: #0275d8
  }
  .gl-btn-outlined-primary {
    color: #0275d8;
    border: 1px #0275d8 solid
  }
  .gl-btn-success{
    color: white;
    background: #5cb85c;
    border: #5cb85c;
  }
  .gl-btn-outlined-success {
    color: #5cb85c;
    border: 1px #5cb85c solid
  }
  .gl-btn-secondary{
    color: white;
    border: grey;
    background: grey;
  }
  
  .gl-btn-outlined-secondary{
    color: grey;
    border: 1px grey solid;
  }

  .gl-btn-danger{
    color: white;
    background: #d9534f;
    border: #d9534f;
  }
  .gl-btn-outlined-danger{
    color: #d9534f;
    border: 1px #d9534f solid;
  }
  .gl-btn-warning{
    color: white;
    background: #f0ad4e;
    border: #f0ad4e
  }
  .gl-btn-outlined-warning{
    color: #f0ad4e;
    border: 1px #f0ad4e solid
  }
  .gl-btn-info{ color: white;
    background: #5bc0de;
    border: #5bc0de;
  }
  .gl-btn-outlined-info{
    color: #5bc0de;
    border: 1px #5bc0de solid;
  }
  .gl-btn-light{
    background: #f7f7f7;
    border: #f7f7f7;
  }
  .gl-btn-dark{
    color: white;
    background: #292b2c;
    border: #292b2c;
  }
  .gl-btn-outlined-dark{
    color: #292b2c;
    border: 1px #292b2c solid;
  }
  .gl-btn-link{
    background: transparent;
    border: transparent;
    color: #0275d8;
  }
  .gl-btn-link:hover {
    text-decoration: underline;
  }
  
</style>