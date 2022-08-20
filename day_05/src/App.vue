<template>
<div id="body">
  <div id="wrapper">
    <h1> 404 </h1>
		<div>
  	  <p> Kinda sus.. </p>
  	  <p> Page not found </p>
		</div>
  </div>
</div>
</template>

<style>
#body {
  max-width: 1280px;
	min-height: 100vh;
	text-align: center;
	background-color: rgba(255,255,255,0.48);

	display: flex;
	align-items: center;
	justify-content: center;
}

#wrapper {
	width: max-content;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

#wrapper h1 {
  font-size: 6rem;
	font-weight: 700;
	color: #3c3c3c;
}

#wrapper p {
  font-size: 2.5rem;
	font-weight: 600;
	color: #ddd;
	-webkit-text-stroke: 2px black;
}

#wrapper p:first-of-type {
  margin-top: 1rem;
}

@media(min-width:700px) {
  #wrapper {
	  width: 500px;
		height: 215px;
	  flex-direction: row;
		align-items: center;
		gap: 2rem;
	}

	#wrapper p {
	  line-height: 2;
		text-align: left;
		margin: auto 0;
  }

	#wrapper p:first-of-type {
	  margin-top: 0;
	}

	#wrapper p:last-of-type {
	  margin-top: -1.5rem;
	}
}
</style>
