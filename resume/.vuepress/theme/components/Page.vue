<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content content" />
    <slot name="bottom" />
  </main>
</template>

<script>
export default {
  props: ['sidebarItems'],
}

</script>

<style lang="stylus">
@require '../styles/config.styl'
.page {
  .content {
    font-size: $fontSize;
    font-family: menlo, pingfang;
    font-weight: $fontWeight;
    color: $textColor;

    * {
      margin: 0 !important;
    }
    
    > h1 {
      display: flex;
      align-items: center;
      
      img {
        width: 0.9rem;
      }

      > div {
        flex: 1;
        transform: translateY(-.2em)
        
        > h2 {
          margin-top: 0.6em !important;
          font-size: 0.5em;
          border-bottom: 0;
        }
        > h3 {
          font-size: 0.4em;
          border-bottom: 0;
          }
      }

      > ul {
        float: right;
        font-size: 12px;
        font-weight: normal;
        margin: 0;
        padding: 0;
        
        > li {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          
          > span {
            width: 6em;
            align-items: center;
            display: flex;
            justify-content: flex-end;

            &::after {
              content: ' ';
              margin 0 0.25em;
            }
          }
        }
      }
    }

    > h2, > h3 {
      line-height: 1;
      border: 0;
      padding: 0;
      display: flex;
      align-items: baseline;
      margin-bottom: 0.6em !important;

      .header-anchor {
        display: none;
      }
    }

    > h2 {
      font-size: 1.35em;
      display: flex;

      &:not(:first-of-type) {
        margin-top: 1em !important;
      }

      &::after {
        content: '';
        flex: 1;
        border-bottom: 2px dashed #D3D3D3;
        margin-left: 10px;
      }
    }

    > h3 {
      font-size: 1.1em;

      &:not(:first-of-type) {
        margin-top: 0.6em !important;
      }
    }

    > p, > ul, > ol {
      line-height: 1.5;
    }

    > p {
    }

    > ul {
      margin: 0;
      margin-top: 0.5em;
    }

    > hr {
      margin-top: 0.4em !important;
      border-top: 1px dashed $borderColor;
    }

    .role {
      flex: 1;
      font-size: 12px;
      text-align: left;
    }

    .right {
      float: right;
      flex: 1;
      font-size: 0.9em;
      text-align: right;
      font-weight: normal;
      font-style: italic;
    }

    .tag {
      width: min-content;
      padding: 0.1em 0.3em;
      background-color: #dddddd;
      font-weight: bold;
      border-radius: 0.3em;
    }
  }
}
</style>
