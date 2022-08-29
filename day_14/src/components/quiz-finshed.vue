<script setup lang="ts">
</script>

<template>
  <div class="congrats__container">
	  <img
		  src="../assets/prize.svg"
			alt="A blueish half open box"
		/>
		<h1>Congrats, you have just finished the best of all quizzes!</h1>
		<div class="final-score__container">
		  <div>
			  <img
				  src="../assets/earnings.svg"
					alt="Money icon"
				/>
				<p>
				  SCORE EARNED
					<span>0</span>
				</p>
			</div>

			<hr />

			<div>
			  <img
				  src="../assets/success.svg"
					alt="An heptagon polygon with check mark"
				/>
				<p>
				  CORRECT ANSWERS
					<span>0</span>
				</p>
			</div>
		</div>

		<button class="congrats__finish__button">
		  <span>START OVER</span>
		</button>
	</div>
</template>

<style scoped lang="scss">
@import "../assets/colors.scss";

.congrats__container {
  width: 400px;
	max-width: 90vw;
	background-color: $question-bg;
	padding: 1.5rem;
	border-radius: 6px;

	display: flex;
	flex-direction: column;

	h1 {
	  text-align: center;
		margin: 2rem auto 3.5rem;
	}

	& > img {
	  height: 5rem;
	}

	.final-score__container {
	  width: 100%;

		border-radius: 4px;

		background-color: $badge-bg;

		hr {
		  width: 90%;
			margin-inline: auto;
			background-color: $white;
		}

		div {
		  height: 5rem;
			width: 100%;
			padding: 1rem 1.5rem;

			display: flex;
			align-items: center;
			gap: 1.5rem;

		  img {
			  width: 2rem;
			}

			p {
			  flex: 1;
				display: flex;
				justify-content: space-between;

				font-weight: 600;

				span {
				  font-weight: 600;
				}
			}
		}
	}

	.congrats__finish__button {
	  width: 100%;
		height: 4rem;
		border: 0;
		border-radius: 4px;
		margin-top: 2rem;

		background-color: $green;

		display: flex;
		justify-content: center;
		align-items: center;

		span {
		  font-size: 1.5rem;
			font-weight: 600;
		}

		&:active {
		  background-color: #008766;
		}
	}
}
</style>
