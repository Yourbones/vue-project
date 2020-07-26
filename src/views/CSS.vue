<template>
  <div class="container">
    <h1>这个页面用于编写 CSS 样式</h1>
    <div class="strip-loading">
      <ul class="flex">
        <li v-for="v in 6" :key="v" :style="`--line-index: ${v}`"></li>
      </ul>
    </div>
    <div class="heart-loading">
      <ul class="flex" style="`--line-count: 9`">
        <li v-for="v in 9" :key="v" :class="`line-${v}`" :style="`--line-index: ${v}`"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .strip-loading {
    width: 200px;
    height: 200px;
    ul {
      width: 200px;
      height: 100px;
      li {
        @keyframes beat {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(.5);
          }
        }
        --time: calc((var(--line-index) - 1) * 200ms);
        border-radius: 3px;
        width: 6px;
        height: 30px;
        background-color: #f66;
        animation: beat 1.5s ease-in-out var(--time) infinite;
        & + li {
          margin-left: 5px;
        }
      }
    }
  }
  .heart-loading {
	width: 200px;
	height: 200px;
	ul {
		width: 150px;
		height: 10px;
	}
	li {
		--Θ: calc(var(--line-index) / var(--line-count) * .5turn);
		--time: calc((var(--line-index) - 1) * 40ms);
		border-radius: 5px;
		width: 10px;
		height: 10px;
		background-color: #3c9;
		filter: hue-rotate(var(--Θ));
		animation-duration: 1s;
		animation-delay: var(--time);
		animation-iteration-count: infinite;
	}
	.line-1,
	.line-9 {
		animation-name: line-move-1;
	}
	.line-2,
	.line-8 {
		animation-name: line-move-2;
	}
	.line-3,
	.line-7 {
		animation-name: line-move-3;
	}
	.line-4,
	.line-6 {
		animation-name: line-move-4;
	}
	.line-5 {
		animation-name: line-move-5;
	}
	.line-2,
	.line-8 {
		animation-name: line-move-2;
	}
	.line-3,
	.line-7 {
		animation-name: line-move-3;
	}
	.line-4,
	.line-6 {
		animation-name: line-move-4;
	}
	.line-5 {
		animation-name: line-move-5;
	}
  }
@keyframes line-move-1 {
	0%,
	10%,
	90%,
	100% {
		height: 2.7vh;
	}
	45%,
	55% {
		height: 8vh;
		transform: translate3d(0, -4vw, 0);
	}
}
@keyframes line-move-2 {
	0%,
	10%,
	90%,
	100% {
		height: 2.7vh;
	}
	45%,
	55% {
		height: 16vh;
		transform: translate3d(0, -8vh, 0);
	}
}
@keyframes line-move-3 {
	0%,
	10%,
	90%,
	100% {
		height: 2.7vh;
	}
	45%,
	55% {
		height: 22vh;
		transform: translate3d(0, -11vh, 0);
	}
}
@keyframes line-move-4 {
	0%,
	10%,
	90%,
	100% {
		height: 2.7vh;
	}
	45%,
	55% {
		height: 24vh;
		transform: translate3d(0, -8vh, 0);
	}
}
@keyframes line-move-5 {
	0%,
	10%,
	90%,
	100% {
		height: 2.7vh;
	}
	45%,
	55% {
		height: 24vh;
		transform: translate3d(0, -5.4vh, 0);
	}
}
</style>
