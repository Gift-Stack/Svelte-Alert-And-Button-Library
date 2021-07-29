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

  <button class="gl-btn gl-btn-{type} gl-btn-{shape} gl-btn-{size} {outlinedClass}">
    {value}
  </button>

<style>
  .gl-btn {
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
  }
  .gl-btn-sm {
    padding: 10px 20px;
  }
  .gl-btn-primary{
    color: white;
    background: #0275d8;
    border: #0275d8
  }
  .gl-btn-success{
    color: white;
    background: #5cb85c;
    border: #5cb85c;
  }
  .gl-btn-secondary{
    color: white;
    border: grey;
    background: grey;
  }
  .gl-btn-danger{
    color: white;
    background: d9534f;
    border: #d9534f;
  }
  .gl-btn-warning{
    color: white;
    background: #f0ad4e;
    border: #f0ad4e
  }
  .gl-btn-info{ color: white;
    background: #5bc0de;
    border: #5bc0de;
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
  .gl-btn-link{
    background: transparent;
    border: transparent;
    color: #0275d8;
  }
  .gl-btn-link:hover {
    text-decoration: underline;
  }
</style>