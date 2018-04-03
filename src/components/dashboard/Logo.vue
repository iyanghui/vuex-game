<template>
  <div class="logo">
    <a href="" target="_blank">Memory</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .logo {
    display:flex; /*Flex布局*/
    display: -webkit-flex;  /* Safari */
    align-items:center; /*指定垂直居中*/
    justify-content: center; /*指定水平居中*/
    width: 160px;
    height: 100%;
    background-color: #5979ac;
    border-radius: 6px;

    a {
      font-size: 20px;
      text-decoration: none;
      color: #fff;
    }
  }

  @media screen and (max-width: 450px) {
    .logo {
      width: 150px;
    }
  }

  @media screen and (max-width: 380px) {
    .logo {
      width: 140px;
    }
  }

  @media screen and (max-width:360px) {
    .logo {
      width: 110px;

      a {
        font-size: 18px;
      }
    }
  }
</style>

