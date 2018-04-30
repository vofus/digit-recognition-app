<template>
	<div id="app">
		<nav class="blue-grey">
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Logo</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<router-link active-class="active" tag="li" to="/main"><a>Главная</a></router-link>
					<router-link active-class="active" tag="li" to="/test"><a>Тестирование</a></router-link>
					<router-link active-class="active" tag="li" to="/recognition"><a>Распознавание</a></router-link>
				</ul>
			</div>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "digit-recognition-app"
	};
</script>
